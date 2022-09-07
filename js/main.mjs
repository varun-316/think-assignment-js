import { addHeader } from "./components/Header.mjs";
import { getPersonalDetails } from "./components/PersonalForm.mjs";
import { getGovtForm } from "./components/GovtForm.mjs";
import { getLoginInfo } from "./components/LoginForm.mjs";
import { getAddressDetails } from "./components/AddressForm.mjs";

export const checkLogin = () => {
    const username = window.sessionStorage.getItem("username");
    if(!username) {
        return false;
    }
    return true;
}

export const getUserObj = async (username) => {
    return window.localStorage.getItem(username);
}

export const setStageInit = async () => {
    // if(!checkLogin) {
    //     window.sessionStorage.setItem("stage", 0);
    // } else {
        const username = window.sessionStorage.getItem("username");
        if(!username) {
            window.sessionStorage.setItem("stage", 0);
            return;
        } 
        const userObjStr = window.localStorage.getItem(username);
        const obj = JSON.parse(userObjStr);
        window.sessionStorage.setItem("stage", obj.stage);
        
    
}

export const getStage = async () => {
    const stage = window.sessionStorage.getItem("stage");
    if(!stage) return 0;
    return stage;
}

const renderForm = async (stage) => {
    // if(stage == 0) getLoginInfo();
    if(stage == 0) getLoginInfo();
    else if(stage == 1) getPersonalDetails();
    else if(stage == 2) getAddressDetails();
    else if(stage == 3) getGovtForm();
}

window.onload = async () => {
    addHeader();
    await setStageInit();
    const stage = await getStage();
    await renderForm(stage);
    console.log(stage);
    // getPersonalDetails();
    // getGovtForm();
    
    // getAddressDetails();
}