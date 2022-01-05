import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAzxEtvyj3cw7TdiHfzL9H1emSJa2PKn60",
  authDomain: "todolist-13e32.firebaseapp.com",
  databaseURL: "https://todolist-13e32-default-rtdb.firebaseio.com",
  projectId: "todolist-13e32",
  storageBucket: "todolist-13e32.appspot.com",
  messagingSenderId: "912974817364",
  appId: "1:912974817364:web:f0bbb5906e5abeee3465c1"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp