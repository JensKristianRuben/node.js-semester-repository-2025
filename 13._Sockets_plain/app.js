import express from "express";
import http from 'http';
import { Server } from 'socket.io';


const app = express();

app.use(express.static("public"));

const server = http.createServer(app);

const io = new Server(server)

io.on("connection", (socket) => {
    console.log("A socket connected", socket.id);

    socket .on("Clients-sends-color", (data) => {
        console.log(data.color);
    
        io.emit("server-sends-color", data)

        // socket.broadcast.emit("server-sends-color", data)
        // socket.emit("server-sends-color", data)
    })
});


const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
    
})