const users = [];
function userJoin(id, username, room) {
    const user = {
        id,
        username,
        room,
        pick:''
    }
    users.push(user);
    return user;
}


function userLeave(id) {
    const idx = users.findIndex(user => user.id === id);
    if (idx != -1) {
        return users.splice(idx, 1)[0];
    }
}

function getCurrentUser(id) {
    return users.find(user => user.id === id);
}

function getRoomUsers(room) {
    return users.filter(user => user.room === room);
}


module.exports = {
    userJoin,
    userLeave,
    getCurrentUser,
    getRoomUsers
}