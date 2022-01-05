import React, {useState} from "react";
import Home from "../components/Home";
import Login from "../components/Login";

const App = () => {
  const [user, setUser]= useState(false)
  return <>{user ? <Home/> : <Login/>}</>
};

export default App