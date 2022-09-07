export function getLoginInfo(){
    const form = document.createElement("form");
    // form.setAttribute("method", "post");


    const uname = document.createElement("input");
    uname.setAttribute("type","text");
    uname.setAttribute("name","uname");
    uname.setAttribute("id", "uname");
    uname.setAttribute("required", "");
    uname.setAttribute("placeholder","Username");

    const pass = document.createElement("input");
    pass.setAttribute("type","password");
    pass.setAttribute("name","pass");
    pass.setAttribute("required", "");
    pass.setAttribute("id", "pass");
    pass.setAttribute("placeholder","Password");

    const submit = document.createElement("input");
    submit.setAttribute("type","submit");
    submit.setAttribute("value","Login");

    form.appendChild(uname);
    form.appendChild(pass);
    form.appendChild(submit);

    

    document.getElementById("root").appendChild(form);

    form.onsubmit = async (e) => {
        await setLoginValues();        
        // window.location.reload();
    }
}

const setLoginValues = async () => {
    const uname = document.getElementById("uname").value;
    const pass = document.getElementById("pass").value;
    await setSession(uname, pass);    
    await setLocal(uname, pass);
}

const setSession = async (uname, pass) => {
    window.sessionStorage.setItem("username", uname);
    window.sessionStorage.setItem("password", pass);
}

const setLocal = async (uname, pass) => {
    const user = window.localStorage.getItem(uname);

    if(!user) {
        const userObj = {
            "uname": uname,
            "pass": pass,
            "fname": "",
            "lname": "",
            "contact": "",
            "email": "",
            "address": "",
            "aadhaar": "",
            "pan": "",
            "stage": 1
        }
        window.localStorage.setItem(uname, JSON.stringify(userObj));
    }
}