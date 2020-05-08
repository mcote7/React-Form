import React, { useState } from  'react';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasBeenSubmited, setHasBeenSubmited] = useState(false);
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassError, setConfirmPassError] = useState("");

    const userString = `${firstName} ${lastName}`;
//<------------------------------------------------------------------------validations------------------------------<<<<<<<
    const handlefirstName = (e) => {
        setFirstName(e.target.value);
            if(e.target.value.length < 1) {
                setFirstNameError("Name is required.");
            } 
            else if(e.target.value.length < 2) {
                setFirstNameError("Name must be 2 characters or longer.");
            }
            else if (e.target.value.length > 2) {
                setFirstNameError("");
            }
    };

    const handlelastName = (e) => {
        setLastName(e.target.value);
            if(e.target.value.length < 1) {
                setLastNameError("Name is required.");
            } 
            else if(e.target.value.length < 2) {
                setLastNameError("Name must be 2 characters or longer.");
            }
            else if (e.target.value.length > 2) {
                setLastNameError("");
            }
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
            if(e.target.value.length < 1) {
                setEmailError("Email is required.");
            } 
            else if(e.target.value.length < 5) {
                setEmailError("Email must be 5 characters or longer.");
            }
            else if (e.target.value.length > 5) {
                setEmailError("");
            }
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
            if(e.target.value.length < 1) {
                setPasswordError("Password is required.");
            } 
            else if(e.target.value.length < 7) {
                setPasswordError("Password must be 7 characters or longer.");
            }
            else if (e.target.value.length > 7) {
                setPasswordError("");
            }
    };

    const handleConfirmPass = (e) => {
        if( e.target.value !== password) {
            setConfirmPassError("Passwords must match.")
        }
        else if( e.target.value === password) {
            setConfirmPassError("");
        }
    };

//<---------------------------------------------------------------------------------------------------------<<<<<<<

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password};
        console.log("Welcome", newUser);
        setHasBeenSubmited( true );
    };
    const formMessage = () => {
        if( hasBeenSubmited ) {
            return (
            <div className="row">
                <div className="formcontainer2">
                    <div className="inputcontainer">
                        <div className="outputcontainer"> &hearts; Thank you, {firstName} .</div>
                    </div>
                </div>
            </div>
            );
        }
    };
    return(
        <>
        <form onSubmit={ createUser }>
            <div className="formcontainer">
                <div className="inputcontainer">
                    <label>First name &bull; &nbsp; </label>
                    <input type="text" onChange={handlefirstName} /> <br/>
                    {
                        firstNameError ?
                        <span style={{color:'red'}}>{ firstNameError }</span> :
                        ''
                    }
                </div>
                <div className="inputcontainer">
                    <label>Last name &bull; &nbsp; </label>
                    <input type="text" onChange={handlelastName} /> <br/>
                    {
                        lastNameError ?
                        <span style={{color:'red'}}>{ lastNameError }</span> :
                        ''
                    }
                </div>
                <div className="inputcontainer">
                    <label>email Address &bull; &nbsp; </label>
                    <input type="email" onChange={handleEmail} /> <br/>
                    {
                        emailError ?
                        <span style={{color:'red'}}>{ emailError }</span> :
                        ''
                    }
                </div>
                <div className="inputcontainer">
                    <label>password &bull; &nbsp; </label>
                    <input type="password" onChange={handlePassword} /> <br/>
                    {
                        passwordError ?
                        <span style={{color:'red'}}>{ passwordError }</span> :
                        ''
                    }
                </div>
                <div className="inputcontainer">
                    <label>Confirm password &bull; &nbsp; </label>
                    <input type="password" onChange={handleConfirmPass} /> <br/>
                    {
                        confirmPassError ?
                        <span style={{color:'red'}}>{ confirmPassError }</span> :
                        ''
                    }
                </div>
                <div className="row">
                    <button type="submit" value="createUser" className="btncote">SUBMIT</button>
                </div>
            </div>
        </form>
        {formMessage()}
        <div className="row">
            <div className="formcontainer2">
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