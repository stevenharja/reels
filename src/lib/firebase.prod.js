import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

// Seed the database

// Configuration
const config = {
  apiKey: "AIzaSyB2jBDr744VIh3tgWbpTP3MpUyUPwk8WzM",
  authDomain: "reels-608ff.firebaseapp.com",
  databaseURL: "https://reels-608ff.firebaseio.com",
  projectId: "reels-608ff",
  storageBucket: "reels-608ff.appspot.com",
  messagingSenderId: "130678863495",
  appId: "1:130678863495:web:f89b4e88af5ff2b48a2a22",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
