const io= require("socket.io")(8000,{
    cors:"http://localhost:5500"
}
)
const users={}

io.on("connect",(socket)=>{
    socket.on("user-joined", (name)=>{
        users[socket.id]=name
        socket.broadcast.emit("new-user-joined",name)
        console.log(users);
    })

    socket.on("send",(message)=>{
        socket.broadcast("receive",{name:users[socket.id], message})
    })

    socket.on("disconnect",()=>{
        let name= users[socket.id]
        delete users[socket.id]
        socket.broadcast.emit("user-left ",name)
    })
})