import React, { useState } from  'react';
// import {render} from 'react-dom';



const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpass, setConfirmpass] = useState("");
      
    const userString = `${firstname} ${lastname}`;

    const helloUser = (event) => {
        return (
            <>
            <div className="row">
            <div className="formcontainer">
                <div className="inputcontainer">
                    <div className="outputcontainer">&bull; Hello, {firstname} welcome to react! &bull;</div>
                </div>
            </div>
        </div>
        </>
        );
    };
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpass };
        console.log("Welcome", newUser);
    };
    return(
    <>
        <form onSubmit={ createUser }>
            <div className="formcontainer">
                <div className="inputcontainer">
                    <label>First name &bull; &nbsp; </label>
                    <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
                </div>
                <div className="inputcontainer">
                    <label>Last name &bull; &nbsp; </label>
                    <input type="text" onChange={ (e) => setLastname(e.target.value) } />
                </div>
                <div className="inputcontainer">
                    <label>Email Address &bull; &nbsp; </label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div className="inputcontainer">
                    <label>Password &bull; &nbsp; </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div className="inputcontainer">
                    <label>Confirm Password &bull; &nbsp; </label>
                    <input type="password" onChange={ (e) => setConfirmpass(e.target.value) } />
                </div>
                <div className="row">
                    <button type="submit" value="createUser" className="btncote" onClick={ (event) => helloUser()}>SUBMIT</button>
                </div>
            </div>
        </form>
        <br/>
        <br/>
        <div className="row">
            <div className="formcontainer">
                <div className="inputcontainer">
                    <div className="outputcontainer">&bull; User info &bull; <br/> {userString} <br/> {email} </div>
                </div>
            </div>
        </div>
        </>
        );
    };

export default UserForm;