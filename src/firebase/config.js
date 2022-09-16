// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/storage';
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey:
		"AIzaSyCUwl5LqEOR8YJhZL5FFzDoAsz7qYollVU",
	authDomain:
		"tega-firegram.firebaseapp.com",
	projectId: "tega-firegram",
	storageBucket:
		"tega-firegram.appspot.com",
	messagingSenderId: "112278843374",
	appId:
		"1:112278843374:web:0896bd76a4c427daa1a8ff",
};

// Initialize Firebase
const fireApp = firebase.initializeApp(
	firebaseConfig
);
// Initialize firebase storage
const projectStorage = firebase.storage()

// Initialize firebase database
const projectFireStore = firebase.firestore()

// Create timestamp
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;



export {fireApp, projectStorage, projectFireStore, timeStamp}
