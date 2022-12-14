export function getGovtForm(){

     

    const steps = document.createElement("p");
    steps.setAttribute("id","step");
    steps.innerHTML = "Step 2 of 3";

    const form = document.createElement("form");
    form.setAttribute("method","post");
    form.setAttribute("action","AddressForm.mjs");

    const aadhar = document.createElement("input")
    aadhar.setAttribute("type","number");
    aadhar.setAttribute("name","aadhar");
    aadhar.setAttribute("maxlength","16");
    aadhar.setAttribute("placeholder","Aadhar Card No");

    const pan = document.createElement("input")
    pan.setAttribute("type","text");
    pan.setAttribute("name","pan");
    pan.setAttribute("maxlength","8");
    pan.setAttribute("placeholder","Pan Card No");

    const back = document.createElement("input");
    back.setAttribute("type","button");
    back.setAttribute("value","Back");
    back.setAttribute("id","back")

    const submit = document.createElement("input");
    submit.setAttribute("type","submit");
    submit.setAttribute("value","Next");

    form.appendChild(steps);
    form.appendChild(aadhar);
    form.appendChild(pan);
    form.appendChild(back);
    form.appendChild(submit);    

    document.getElementById("root").appendChild(form);
}
