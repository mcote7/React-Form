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
            setFirstNameError("Name is required .");
        } 
        else if(e.target.value.length < 2) {
            setFirstNameError("Name must be 2 characters or longer .");
        }
        else if (e.target.value.length > 18) {
            setFirstNameError("Name too long .");
            e.target.value = "";
        }
        else if (e.target.value.length > 2) {
            setFirstNameError("");
        }
    };

    const handlelastName = (e) => {
        setLastName(e.target.value);
            if(e.target.value.length < 1) {
                setLastNameError("Name is required .");
            } 
            else if(e.target.value.length < 2) {
                setLastNameError("Name must be 2 characters or longer .");
            }
            else if (e.target.value.length > 18) {
                setLastNameError("Name too long .");
                e.target.value = "";
            }
            else if (e.target.value.length > 2) {
                setLastNameError("");
            }
    };

    const handleEmail = (e) => {
        const emailRegex = /^\S+@\S+\.\S+$/;
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required .");
        } 
        else if (e.target.value.match(emailRegex)) {
            setEmailError("");
        }
        else if(e.target.value) {
                setEmailError("Valid Email is required!");
            }
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
            if(e.target.value.length < 1) {
                setPasswordError("Password is required .");
            } 
            else if(e.target.value.length < 7) {
                setPasswordError("Password must be 7 characters or longer .");
            }
            else if (e.target.value.length > 7) {
                setPasswordError("");
            }
    };

    const handleConfirmPass = (e) => {
        if( e.target.value !== password) {
            setConfirmPassError("Passwords must match .")
        }
        else if( e.target.value === password) {
            setConfirmPassError("");
        }
    };

//<---------------------------------------------------------------------------------------------------------<<<<<<<

    const createUser = (e) => {
        e.preventDefault();
        if(firstNameError || lastNameError || emailError || passwordError || confirmPassError) {
            setFirstName("please enter valid . . .");
            setLastName("please enter valid . . .");
            setEmail("please enter valid . . .");
            setPassword("please enter valid . . .");
        }
        else {
        const newUser = { firstName, lastName, email, password };
        setFirstName(firstName);
        setLastName(lastName);
        setEmail(email);
        setPassword(password);
        console.log("Welcome", newUser);
        setHasBeenSubmited( true );
        }
    };
//<---------------------------------------------------------------------------------------------------------<<<<<<<
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
        <div style={{float: "left"}}>
            {formMessage()}
        </div>
        <div style={{float: "right", filter: "blur(1000px)"}}>
            {formMessage()}
        </div>
        <form onSubmit={ createUser }>
            <div className="formcontainer">
                <div className="inputcontainer">
                    <label>First name &bull; &nbsp; </label>
                    <input required placeholder="First name . . ." spellCheck= "false" type="text" onChange={handlefirstName} value={firstName} /> <br/>
                    {
                        firstNameError ?
                        <span style={{color:'red'}}>{ firstNameError }</span> :
                        ''
                    }
                </div>
                <div className="inputcontainer">
                    <label>Last name &bull; &nbsp; </label>
                    <input placeholder="Last name . . ." spellCheck= "false" type="text" onChange={handlelastName} /> <br/>
                    {
                        lastNameError ?
                        <span style={{color:'red'}}>{ lastNameError }</span> :
                        ''
                    }
                </div>
                <div className="inputcontainer">
                    <label>email Address &bull; &nbsp; </label>
                    <input placeholder="Email ( Valid ) . . ." spellCheck= "false" type="text" onChange={handleEmail} /> <br/>
                    {
                        emailError ?
                        <span style={{color:'red'}}>{ emailError }</span> :
                        ''
                    }
                </div>
                <div className="inputcontainer">
                    <label>password &bull; &nbsp; </label>
                    <input placeholder="password . . ." type="password" onChange={handlePassword} /> <br/>
                    {
                        passwordError ?
                        <span style={{color:'red'}}>{ passwordError }</span> :
                        ''
                    }
                </div>
                <div className="inputcontainer">
                    <label>Confirm password &bull; &nbsp; </label>
                    <input placeholder="Confirm password . . ." type="password" onChange={handleConfirmPass} /> <br/>
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