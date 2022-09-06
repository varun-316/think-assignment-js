export function getLoginInfo(){
    const form = document.createElement("form");
    form.setAttribute("method","post");

    const uname = document.createElement("input");
    uname.setAttribute("type","text");
    uname.setAttribute("name","uname");
    uname.setAttribute("placeholder","Username");

    const pass = document.createElement("input");
    pass.setAttribute("type","password");
    pass.setAttribute("name","pass");
    pass.setAttribute("placeholder","Password");

    const submit = document.createElement("input");
    submit.setAttribute("type","submit");
    submit.setAttribute("value","Next");

    form.appendChild(uname);
    form.appendChild(pass);
    form.appendChild(submit);

    document.getElementById("root").appendChild(form);
}