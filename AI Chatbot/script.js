constnmessageInput =document.querySelector(".message-input");

const handleOutgoingMessage = (userMessage) => {
    const messageContent = '';
} 

messageInput.addEventListner("keydown",(e) =>{
//Handle Enter Key press for sending message    
const userMessage = e.target.value.trim();
if(e.key === "Enter" && userMessage){
    handleOutgoingMessage(userMessage);
}

});