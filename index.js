
// const express = require('express');
// const http = require('http');
// const cors = require('cors');
// const { Server } = require('socket.io');

// const app = express();
// app.use(cors());
// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: { origin: '*' },
// });

// let users = {};

// io.on('connection', socket => {
//   console.log('User connected:', socket.id);

//   socket.on('locationUpdate', data => {
//     console.log('Location from', data.userId, ':', data.latitude, data.longitude);
//     users[data.userId] = data;
//     socket.broadcast.emit('locationBroadcast', data); // Send to others
//   });

//   socket.on('disconnect', () => {
//     console.log('User disconnected:', socket.id);
//   });
// });

// server.listen(3000, () => console.log('Socket server running on port 3000'));








// const express = require('express');

// const http = require('http');

// const socketIO = require('socket.io');

// const cors = require('cors');
 
// const app = express();

// const server = http.createServer(app);

// const io = socketIO(server, {

//   cors: {

//     origin: '*', // allow all for dev

//     methods: ['GET', 'POST']

//   }

// });
 
// app.use(cors());
 
// io.on('connection', (socket) => {

//   console.log('User connected:', socket.id);
 
//   socket.on('send-location', (location) => {

//     // Broadcast location to other clients

//     socket.broadcast.emit('receive-location', location);

//   });
 
//   socket.on('disconnect', () => {

//     console.log('User disconnected:', socket.id);

//   });

// });
 
// const PORT = 3000;

// server.listen(PORT, () => console.log(`Socket.IO server running on port ${PORT}`));

 // server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*', // Set this carefully in production
  },
});

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  socket.on('locationUpdate', (data) => {
    console.log('Received location:', data);
    // Broadcast to others
    socket.broadcast.emit('locationBroadcast', data);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
