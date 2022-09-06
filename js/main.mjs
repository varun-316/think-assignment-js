import { addHeader } from "./components/Header.mjs";
import { getPersonalDetails } from "./PersonalForm.mjs";

window.onload = () => {
    addHeader();
    getPersonalDetails();
}