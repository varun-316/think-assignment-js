export function getPersonalDetails(){

    const br = document.createElement("br");

    const steps = document.createElement("p");
    steps.innerHTML = "Step 1 of 3";

    const form = document.createElement("form");
    form.setAttribute("method","post");
    form.setAttribute("action","GovtForm.mjs");

    const fname = document.createElement("input");
    fname.setAttribute("type","text");
    fname.setAttribute("name","fname");
    fname.setAttribute("placeholder","First Name");

    const lname = document.createElement("input");
    lname.setAttribute("type","text");
    lname.setAttribute("name","lname");
    lname.setAttribute("placeholder","Last Name");

    const contact = document.createElement("input");
    contact.setAttribute("type","text");
    contact.setAttribute("name","contact");
    contact.setAttribute("maxlength","10");
    contact.setAttribute("placeholder","Contact Number");

    const email = document.createElement("input");
    email.setAttribute("type","email");
    email.setAttribute("name","emailId");
    email.setAttribute("placeholder","Email");

    const submit = document.createElement("input");
    submit.setAttribute("type","submit");
    submit.setAttribute("value","Next");

    form.appendChild(steps);
    form.appendChild(fname);
    form.appendChild(br.cloneNode());
    form.appendChild(lname);
    form.appendChild(br.cloneNode());
    form.appendChild(contact);
    form.appendChild(br.cloneNode());
    form.appendChild(email);
    form.appendChild(br.cloneNode());
    form.appendChild(submit);    

    document.getElementById("root").appendChild(form);
}
