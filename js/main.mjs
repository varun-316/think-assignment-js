import { addHeader } from "./components.mjs";
import { getPersonalDetails } from "./PersonalForm.mjs";
import { getGovtForm } from "./GovtForm.mjs";

window.onload = () => {
    addHeader();
    getPersonalDetails();
    getGovtForm();
}