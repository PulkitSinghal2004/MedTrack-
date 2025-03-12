// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, initializeAuth, getReactNativePersistence} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHX2URX1W5yaDLtDVlvt6_TcLWJ0j49X4",
  authDomain: "project2025-21a85.firebaseapp.com",
  projectId: "project2025-21a85",
  storageBucket: "project2025-21a85.firebasestorage.app",
  messagingSenderId: "524339718137",
  appId: "1:524339718137:web:db4df2db254135456dff28",
  measurementId: "G-GJQ2KLDCT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app)