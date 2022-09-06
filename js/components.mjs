const root = document.getElementById("root");

export const addHeader = () => {
    const headerDiv = document.createElement("div");
    headerDiv.setAttribute("id", "header");
    root.appendChild(headerDiv);
    addHeading();
    addLoginButton();    
}

const addLoginButton = () => {
    const loginbtn = document.createElement("button");
    loginbtn.setAttribute("id", "login-button");
    loginbtn.innerHTML = "Login";
    document.getElementById("header").appendChild(loginbtn);
}

const addHeading = () => {
    const heading = document.createElement("h1");
    heading.setAttribute("id", "heading");
    heading.innerHTML = "Think Assignment";
    document.getElementById("header").appendChild(heading);
}