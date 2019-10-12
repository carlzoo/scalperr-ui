import React, {useState, useEffect} from 'react'
import Styled from 'styled-components';
import nextId from "react-id-generator";

const StyledContact = Styled.div`
    display:grid;
    grid-gap: 1.5rem;

    @media (min-width: 768px) {
        max-width: 50%;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
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
`;

const RequiredFieldLabel = Styled.span`
    color: red;
`;


const nameId = nextId();
const emailId = nextId();
const phoneId = nextId();
const reasonId = nextId();
const detailsId = nextId();

const Contact = () =>
(
    <StyledContact>
        <label htmlFor={nameId}>
            Name
            <RequiredFieldLabel>*</RequiredFieldLabel>
        </label>
        <StyledInputText id={nameId} name="name" placeholder="Your name" />
        <label htmlFor={emailId}>Email</label>
        <StyledInputText id={emailId} name="email" placeholder="Your email" />
        <label htmlFor={phoneId}>Phone Number</label>
        <StyledInputText htmlFor={phoneId} name="phone" placeholder="Your number" />
        <label htmlFor={reasonId}>
            Reason for Contact
            <RequiredFieldLabel>*</RequiredFieldLabel>
        </label>
        <select id={reasonId}>
            <option>Login</option>
            <option>Payment</option>
            <option>Technical</option>
            <option>Other</option>
        </select>
        <label htmlFor={detailsId}>More details</label>
        <textarea id={detailsId} rows="3" />
        <StyledSubmitButton />
    </StyledContact>
);

export default Contact;