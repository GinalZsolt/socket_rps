var socket = io();
socket.emit('join')





socket.on("JoinSelf",(data)=>{
    document.querySelector("#player").innerHTML=data.name
})
socket.on("JoinOponent",(data)=>{
    document.querySelector("#oponent").innerHTML=" vs "+data.name
})
socket.on("JoinAlreadyIn",(data)=>{
    document.querySelector("#oponent").innerHTML=" vs "+data.name
})
socket.on('leave',()=> {
    window.location.href = "/";
})