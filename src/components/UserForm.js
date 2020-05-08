import React, { useState } from  'react';
// import {render} from 'react-dom';


const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpass, setConfirmpass] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const userString = `${firstname} ${lastname}`;

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpass };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };
    const formMessage = () => {
        if( hasBeenSubmitted ) {
            return (
            <div className="row">
                <div className="formcontainer">
                    <div className="inputcontainer">
                        <div className="outputcontainer"> &bull; Thank you, {firstname} !</div>
                    </div>
                </div>
            </div>
            );
        }
    };
    return(
        <>
        {formMessage()}
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
                    <button type="submit" value="createUser" className="btncote">SUBMIT</button>
                </div>
            </div>
        </form>
        <div className="row">
            <div className="formcontainer">
                <div className="inputcontainer">
                    <div className="outputcontainer"> &bull; User info &bull; <hr/> {userString} <hr/> {email}  <hr/> </div>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        </>
        );
    };

export default UserForm;