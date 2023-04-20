import io from 'socket.io-client';

const socket = io('https://campusconnect.herokuapp.com/');

export default socket