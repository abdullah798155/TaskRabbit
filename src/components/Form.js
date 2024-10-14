import React from 'react'
import { useState } from 'react';

import './Form.css';
function Form() {
       //to check if the password and confirm password are the same
    const [password, setPassword] = useState("");
    const [error,setError] = useState("");
    const [confirm, setConfirm] = useState("");
    const [message, setMessage] = useState("Enter your details");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [user, setUser] = useState({});

    const emailValidation = (email) => {
        let re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    const passwordValidation = (password) => {
        let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        return re.test(password);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setUsername(document.getElementById("username").value);
        setEmail(document.getElementById("email").value);
        setPassword(document.getElementById("password").value);
        if (document.getElementById("password").value === document.getElementById("confirm").value) {
            if (!emailValidation(document.getElementById("email").value)) {
                setMessage("Invalid email");
                alert("Invalid email");
                setError("False");
                return;
            }
            if (!passwordValidation(document.getElementById("password").value)) {
                setMessage("Password must contain at least 8 characters, including uppercase, lowercase letters and numbers");
                alert("Password must contain at least 8 characters, including uppercase, lowercase letters and numbers");
                setError("False");
                return;
            }
            else{
            setConfirm(document.getElementById("confirm").value);
            setUser({
                username: username,
                email: email,
                password: password,
                confirm: confirm
            });
            setError("True");
            setMessage("Your details have been submitted");
        }
        } else {
            setMessage("Passwords do not match");
            setError("False");
        }
    }



  return (
    <div id="container">
        <h1>User Registration form</h1>
        Username: <input type="text" name="username" id="username"/><br/>
        Email : <input type="email" name="email" id="email" /><br/>
        Password: <input type="password" name="password" id="password"/><br/>
        Confirm password :<input type="text" name="confirm" id="confirm"/>
        {user.confirm!=null &&  <h3>Password matched ✅</h3>}
        {error==="False" && <h2 id="error">{message}</h2>}
        {error==="True" && <h2 id="success">{message}</h2>}
        {user.username!=null && <h4>Your details</h4>}
        {user.username!=null &&  <h5>Username: {user.username}</h5>}
        {user.email!=null &&  <h5>Email: {user.email}</h5>}

        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Form