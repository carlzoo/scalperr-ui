import React, {useState, useEffect} from 'react'
import Styled from 'styled-components';

const StyledLogin = Styled.div`
    display:grid;
    grid-gap: 1.5rem;
`;

const StyledInputText = Styled.input`
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box:
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    
    @media (min-width: 768px) {
        max-width: 50%;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const StyledRememberMe = Styled.div`
    width: 100%;
    position: relative;
    padding-left: 1.25rem;

    input {
        box-sizing: border-box;
        padding: 0;
        margin-top: .3rem;
        margin-left: -1.25rem;
    }

    label {
        padding-top: 7.5px;
        margin-bottom: 0;
    }
`;

const StyledSubmitButton = Styled.button`
    color : #fff;
    background-color: #007bff;
    border-color: #007bff;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    cursor: pointer;

    @media (min-width: 768px) {
        max-width: 50%;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const StyledErrorMessage = Styled.div`
    color: #ff3342;
`;

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formError, setFormError] = useState("");
    const [loginSubmitted, setLoginSubmitted] = useState(false);

    useEffect(() => {
        if (loginSubmitted)
        {
            setLoginSubmitted(false);
            if(!validateEmail(email)){
                setFormError("Please enter a valid email address.");
            }
            else if (!validatePassword(password)){
                setFormError("Password cannot be blank.");
            }
            else
            {
                setFormError("Invalid username and/or password.");
            }
        }
    });

    function validateEmail(emailValue){
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(emailValue);
    }

    function validatePassword(passValue){
        return passValue.length > 0;
    }

    return (
        <StyledLogin>
            <StyledInputText 
                type="email" 
                id="email" 
                placeholder="Enter email" 
                value={email}
                onChange = {event => setEmail(event.target.value)}
            />
            <StyledInputText 
                type="password" 
                id="password" 
                placeholder="Enter Password" 
                value={password}
                onChange = {event => setPassword(event.target.value)}
            />
            <StyledRememberMe>
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Remember me</label>
            </StyledRememberMe>
            <StyledSubmitButton 
                type="submit" 
                id="loginSubmit"
                onClick = {() => setLoginSubmitted(true)}
            >
                Submit
            </StyledSubmitButton>
            <StyledErrorMessage>{formError}</StyledErrorMessage>
        </StyledLogin>

    )
}


export default Login;