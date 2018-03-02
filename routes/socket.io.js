module.exports = (io) => {
    io.on('connection', (socket) => {
        // 클라에게 보내기
        setTimeout(() => {
            socket.emit('hello', {
                message: '만나서 반갑습니다~'
            })
        }, 3000);
        
        // 클라에게 받을 때
        socket.on('abc', (data) => {
            // 여기서 하고싶은거 다해~
            console.log(data);
        })

        socket.on('disconnect', () => {

        })
    })
}
