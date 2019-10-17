import React, { useState } from 'react';
import Styled from 'styled-components';
import nextId from 'react-id-generator';
import Modali, { useModali } from 'modali';

const StyledContact = Styled.div`
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
    padding: .575rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    cursor: pointer;

    @media (min-width: 768px) {
      width: 50%;
  }
`;

const RequiredFieldLabel = Styled.span`
    color: red;
`;

const Contact = function() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [issueType, setIssueType] = useState('');
  const [details, setDetails] = useState('');

  const nameId = nextId();
  const emailId = nextId();
  const phoneId = nextId();
  const reasonId = nextId();
  const detailsId = nextId();

  const [formSubmitted, toggleFormSubmitted] = useModali({
    animated: true,
    title: 'Submission Confirmation',
    message: ValidateForm(),
    buttons: [
      <Modali.Button
        key={0}
        label="OK"
        isStyleDefault
        onClick={() => toggleFormSubmitted()}
      />,
    ],
  });

  function ValidateForm() {
    if (name === '') {
      return 'Please enter your name.';
    } else if (email === '' && phone === '') {
      return 'Please enter a email or phone number.';
    } else if (details === '') {
      return 'Please provide details.';
    } else {
      return 'Thanks for contacting us. We will get back to you soon.';
    }
  }

  return (
    <>
      <StyledContact>
        <label htmlFor={nameId}>
          Name
          <RequiredFieldLabel>*</RequiredFieldLabel>
        </label>
        <StyledInputText
          id={nameId}
          name="name"
          placeholder="Your name"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <label htmlFor={emailId}>Email</label>
        <StyledInputText
          id={emailId}
          name="email"
          placeholder="Your email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <label htmlFor={phoneId}>Phone Number</label>
        <StyledInputText
          htmlFor={phoneId}
          name="phone"
          placeholder="Your number"
          value={phone}
          onChange={event => setPhone(event.target.value)}
        />
        <label htmlFor={reasonId}>
          Reason for Contact
          <RequiredFieldLabel>*</RequiredFieldLabel>
        </label>
        <select
          id={reasonId}
          name="reason"
          value={issueType}
          onChange={event => setIssueType(event.target.value)}
        >
          <option>Login</option>
          <option>Payment</option>
          <option>Technical</option>
          <option>Other</option>
        </select>
        <label htmlFor={detailsId}>
          More details
          <RequiredFieldLabel>*</RequiredFieldLabel>
        </label>
        <textarea
          id={detailsId}
          rows="3"
          value={details}
          onChange={event => setDetails(event.target.value)}
        />
        <StyledSubmitButton onClick={toggleFormSubmitted}>
          Submit Request
        </StyledSubmitButton>
      </StyledContact>
      <Modali.Modal {...formSubmitted} />
    </>
  );
};

export default Contact;
