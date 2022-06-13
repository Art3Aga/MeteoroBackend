const http = require('http');
const express = require('express');
const firebase = require('./server/firebase/firebase_config');

const app = express();
const server = http.createServer(app);

server.listen(3000, () => {
    console.log('server on port 3000');
    firebase.firestore.collection('sensor_data').onSnapshot(snapshot => {
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
        });
    });
    /*let id = Date.now().valueOf(); 
    firebase.firestore.collection('sensor_data').doc(id.toString()).set({
        luz: data.luz,
        temperatura: data.temperatura,
        presion: data.presion,
        humedad: data.humedad,
        viento: data.viento,
        fecha: db.Timestamp.fromDate(new Date())
    });*/
});

const SerialPort = require('serialport');
const ReadLine = SerialPort.parsers.Readline;

const port = new SerialPort("COM3", {
    baudRate: 9600
});

const parser = port.pipe(new ReadLine({ delimiter: '\r\n' }));

parser.on('open', function () {
    console.log('connection is opened');
});
  
parser.on('data', function (data) {
    console.log(data);
});
  
parser.on('error', (err) => console.log(err));