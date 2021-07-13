import React, { useContext } from "react";
import { QuizContext } from "../Helpers/context";

const Register = () => {
  const {
    values,
    setValues,
    submitted,
    setSubmitted,
    valid,
    setValid,
  } = useContext(QuizContext);
  const handleChangeFirstName = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      firstName: event.target.value,
    }));
  };
  const handleChangeLastName = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      lastName: event.target.value,
    }));
  };
  const handleChangeEmail = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };
  const handleChangePassword = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      password: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.email && values.password) {
      setValid(true);
    }
    setSubmitted(true);
  };
  return (
    <div className="register">
      <form className="register-form">
        <label>First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={values.firstName}
          onChange={handleChangeFirstName}
        />
        {submitted && !values.firstName && (
          <span id="first-name-error">Please enter your First Name!</span>
        )}
        <label>Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={values.lastName}
          onChange={handleChangeLastName}
        />
        {submitted && !values.lastName && (
          <span id="email-error">Please enter your last name!</span>
        )}
        <label>Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChangeEmail}
        />
        {submitted && !values.email && (
          <span id="email-error">Please enter an Email!</span>
        )}
        <label for="password">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChangePassword}
        />
        {submitted && !values.password && (
          <span id="password-error">Please enter a password</span>
        )}
        <button onClick={handleSubmit}>Register</button>
      </form>
      {valid && <div className="success-message">Success!!</div>}
    </div>
  );
};

export default Register;
