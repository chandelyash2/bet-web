// socketManager.js
import io from 'socket.io-client';

const socket = io('http://ec2-16-171-64-115.eu-north-1.compute.amazonaws.com:8081', {
  transports: ['websocket'],
});

export default socket;
