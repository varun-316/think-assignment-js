export function getPersonalDetails(){

    var br = document.createElement("br");
    var form = document.createElement("form");
    form.setAttribute("method","post");
    form.setAttribute("action","GovtForm.js");

    var fname = document.createElement("input");
    fname.setAttribute("type","text");
    fname.setAttribute("name","fname");
    fname.setAttribute("placeholder","First Name");

    var lname = document.createElement("input");
    lname.setAttribute("type","text");
    lname.setAttribute("name","lname");
    lname.setAttribute("placeholder","Last Name");

    var contact = document.createElement("input");
    contact.setAttribute("type","text");
    contact.setAttribute("name","contact");
    contact.setAttribute("maxlength","10");
    contact.setAttribute("placeholder","Contact Details");

    var email = document.createElement("input");
    email.setAttribute("type","email");
    email.setAttribute("name","emailId");
    email.setAttribute("placeholder","Email");

    var submit = document.createElement("input");
    submit.setAttribute("type","submit");
    submit.setAttribute("value","submit");

    form.appendChild(fname);
    form.appendChild(br);
    form.appendChild(lname);
    form.appendChild(br);
    form.appendChild(contact);
    form.appendChild(br);
    form.appendChild(email);
    form.appendChild(br);
    form.appendChild(submit);    

    document.getElementById("root").appendChild(form);
}
