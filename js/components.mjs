const root = document.getElementById("root");

export const addHeader = () => {
    const para = document.createElement("p");
    para.innerHTML = "This is a paragraph.";
    root.appendChild(para);
}