
require('dotenv').config()

const admin = require('firebase-admin');

const {initializeApp, applicationDefault} = require('firebase-admin/app')

initializeApp({
    credential: applicationDefault(),
});

const firestore = admin.firestore();

module.exports = {
    db: firestore,
};