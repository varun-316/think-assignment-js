const root = document.getElementById("root");

export const addHeader = () => {
    const headerDiv = document.createElement("div");
    headerDiv.setAttribute("id", "header");
    root.appendChild(headerDiv);
    addHeading();
    addStatus();
}

const addStatus = () => {
    const uname = window.sessionStorage.getItem("username");
    const statusDiv = document.createElement("div");
    statusDiv.setAttribute("id", "login-status");
    document.getElementById("header").appendChild(statusDiv);
    if(uname) {
        addUsername(uname);
        addButton(true);
    } else {
        addButton(false);
    }
}

const addUsername = (uname) => {
    const username = document.createElement("h3");
    username.setAttribute("id","welcome-msg")
    username.innerHTML = "Welcome " +uname;
    document.getElementById("login-status").appendChild(username);
}

const addButton = (loginFlag) => {    
    const loginbtn = document.createElement("button");
    loginbtn.setAttribute("id", "login-button");
    loginbtn.innerHTML = loginFlag ? "Logout" : "Login";
    loginbtn.onclick = () => {
        if(!loginFlag) {
            window.sessionStorage.setItem("stage", 0);
            window.location.reload();
        } else {
            window.sessionStorage.clear();
            window.location.reload();
        }
    }
    document.getElementById("login-status").appendChild(loginbtn);
}

const addHeading = () => {
    const heading = document.createElement("h1");
    heading.setAttribute("id", "heading");
    heading.innerHTML = "Think Assignment";
    document.getElementById("header").appendChild(heading);
}