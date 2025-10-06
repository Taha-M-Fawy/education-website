const button = document.querySelector(".btn");

button.addEventListener('click',(e)=>{
    e.preventDefault();
    const name= document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const ms= document.getElementById("message").value;

    if(name==="" || email==="" || ms===""){
        alert("Please fill in all fields.");
        return;
    }
    let userMessage  = {
        name:name,
        email:email,
        message:ms
    };

    let message = JSON.parse(localStorage.getItem("message")) || [];
    message.push(userMessage);

    localStorage.setItem("message", JSON.stringify(message));

    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("message").value="";
    
    alert("Message saved locally!");

})