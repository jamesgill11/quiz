import React, { useContext } from "react";
import { QuizContext } from "../Helpers/context";

const Login = () => {
  const {
    values,
    setValues,
    submitted,
    setSubmitted,
    valid,
    setValid,
  } = useContext(QuizContext);

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
    <div className="login">
      <form className="login-form">
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
        <button onClick={handleSubmit}>login</button>
      </form>
      {valid && <div className="success-message">Success!!</div>}
    </div>
  );
};

export default Login;
