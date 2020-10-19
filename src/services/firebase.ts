import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBFbQuqwtMJaoQUsvaSFO_ijzOPd56DmS4",
    authDomain: "instacool-localclone.firebaseapp.com",
    databaseURL: "https://instacool-localclone.firebaseio.com",
    projectId: "instacool-localclone",
    storageBucket: "instacool-localclone.appspot.com",
    messagingSenderId: "322130013313",
    appId: "1:322130013313:web:cc01bab82d1973bc4b7180",
    measurementId: "G-LVRC8S1W0Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const fireAuth    = firebase.auth();
export const fireDB      = firebase.firestore();
export const fireStorage = firebase.storage();