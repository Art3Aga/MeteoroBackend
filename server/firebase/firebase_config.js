//import * as firebaseadmin from 'firebase-admin';

const firebaseadmin = require('firebase-admin');

const serviceAccount = require("../../sistemariego-de91e-firebase-adminsdk-v4bz6-fd8ab81625.json");



firebaseadmin.initializeApp({
    credential: firebaseadmin.credential.cert(serviceAccount),
    databaseURL: 'https://sistemariego-de91e-default-rtdb.firebaseio.com'
});
const settings = {
    timestampsInSnapshots: true
};
firebaseadmin.firestore().settings(settings);
const firestore = firebaseadmin.firestore();
const db = firebaseadmin.firestore;

module.exports = {
    firestore, db
}