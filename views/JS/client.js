const socket = io("http://localhost:8000")
 
const name= prompt("Enter the YOUR name to Join the chat :")
socket.emit("user-joined",name)

let first =document.getElementById(".first")
function generateMessage(side,message){
    let div= document.createElement("div")

    div.classList.add("alert")
    div.innerHTML=message
    if(side==="left"){
        div.classList.add("alert-primary")
        div.classList.add("left")
    }
    else if(side==="right"){
        div.classList.add("alert.secondry")
        div.classList.add("right")
    }
    else{
        div.classList.add("alert-info")
        div.classList.add("center")
    }
    first.append(div)
}
socket.on("new-user-joined", name=>{
    generateMessage("center", `${name} joined the chat`)
})