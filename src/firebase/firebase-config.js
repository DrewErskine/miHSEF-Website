import firebase from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDNd0WdrXj9VFCV7LGslbMtlTwMSW7-Wws",
    authDomain: "mihsef-2024.firebaseapp.com",
    projectId: "mihsef-2024",
    storageBucket: "mihsef-2024.appspot.com",
    messagingSenderId: "308659126920",
    appId: "1:308659126920:web:176d1f247988357a23d53d",
    measurementId: "G-9R8E4MYBE3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore and Storage services if needed
const firestore = firebase.firestore();
const storage = firebase.storage();
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Optionally, you can enable Firestore timestampsInSnapshots
firestore.settings({ timestampsInSnapshots: true });

export { firebase, firestore, storage };
