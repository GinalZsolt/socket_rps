var socket = io();
socket.emit('join')





socket.on("JoinSelf",(data)=>{
    console.log(data.name)
})
socket.on("JoinOponent",(data)=>{
    console.log(data.name)
})
socket.on("JoinAlreadyIn",(data)=>{
    console.log(data.name)
})
socket.on('leave',()=> {
    window.location.href = "/";
});