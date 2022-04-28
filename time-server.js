const net = require("net");

const server = net.createServer();

server.listen(parseInt(process.argv[2]));

server.on("connection", function(socket) {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let munites = date.getMinutes();

    let data = year+"-"+zeroed(month)+"-"+zeroed(day)+" "+
    zeroed(hour)+":"+zeroed(munites);

    socket.write(data);
    socket.write("");
    socket.on("error", function(err) {
        console.log(err);
    })
    socket.end("\n");
});

function zeroed(x) {
    if (x < 10) {
        return "0" + x;
    }
    return x;
}