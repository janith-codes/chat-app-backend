import express from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';
import cors from 'cors';

interface ChatMessage {
    message: string;
    author: string;
}

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket: Socket) => {
    console.log(`A user connected: ${socket.id}`);

    socket.on("send_message", (data: ChatMessage) => {
        console.log(`Received message from ${data.author}: ${data.message}`);
        socket.broadcast.emit("receive_message", data);
    });

    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});