import React, { createContext, useEffect, useReducer, useState } from "react";
import MyAccount from "./components/Account/MyAccount";
import Login from "./components/LoginSignup/Login";
import Signup from "./components/LoginSignup/Signup";
import styles from "./styles/App.css";
import allUsers from "./users.json";
import {signUser, loginUser} from "./components/Logic/userLogic";

export const userDetails = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [users, setUsers] = useState(allUsers)

  /* 
  This is the login code to set the current user : it calls a loginUser function
  which is used to get the user details from the database
  */

  function validateUser(loggedUser) {
  setCurrentUser(loginUser(users, loggedUser))
}

 /* 
  This is the signup code to register a user : it calls a signUser function
  which is used to add the user details to the database
  */

  function registerUser(newUser) {
  setUsers(signUser(users, newUser))
  }


  return (
    <div className="App">
      <userDetails.Provider value={currentUser}>
        <Signup registerUser={registerUser} />
        <MyAccount />
        <Login validateUser={validateUser} />
      </userDetails.Provider>
    </div>
  );
}

export default App;
