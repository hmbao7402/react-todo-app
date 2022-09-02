// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyC8ml70yokG8rfqYCu90rSSNW-dQjfoS3w',
	authDomain: 'humiba-todo-app.firebaseapp.com',
	projectId: 'humiba-todo-app',
	storageBucket: 'humiba-todo-app.appspot.com',
	messagingSenderId: '206830082573',
	appId: '1:206830082573:web:082d7e388355e874b61344',
	measurementId: 'G-VVXPVSHBNY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
