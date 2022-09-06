export function getAddressDetails(){
    const steps = document.createElement("p");
    steps.innerHTML = "Step 3 of 3";

    const form = document.createElement("form");
    form.setAttribute("method","post");
    
    const address1 = document.createElement("input");
    address1.setAttribute("type","text");
    address1.setAttribute("name","addline1");
    address1.setAttribute("maxlength","50");

    const address2 = document.createElement("input");
    address2.setAttribute("type","text");
    address2.setAttribute("name","addline2");
    address1.setAttribute("maxlength","50");

    var state = ["Maharashtra","New Delhi","Goa","Gujarat","Karnataka"];
    var select = document.createElement("select");
    select.name = "state";
    select.id = "states"
 
    for (const val of state)
    {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select.appendChild(option);
    }

    const pincode = document.createElement("input")
    pincode.setAttribute("type","number");
    pincode.setAttribute("name","pincode");
    pincode.setAttribute("maxlength","6");
    pincode.setAttribute("placeholder","Pincode");

    const back = document.createElement("input");
    back.setAttribute("type","button");
    back.setAttribute("value","Back");

    const submit = document.createElement("input");
    submit.setAttribute("type","submit");
    submit.setAttribute("value","Next");

    form.appendChild(steps);
    form.appendChild(address1);
    form.appendChild(address2);
    form.appendChild(select);
    form.appendChild(pincode);
    form.appendChild(back);
    form.appendChild(submit);

    document.getElementById("root").appendChild(form);
}