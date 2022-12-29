import styles from "./Login.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import { useState, useEffect } from "react";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        enteredPassword.trim().length > 6 && enteredEmail.includes("@")
      );
    }, 1000);
    //clean up

    return () => {
      clearTimeout(identifier);
    };
  }, [enteredPassword, enteredEmail]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    //setFormIsValid(
    // event.target.value.includes("@") && enteredPassword.trim().length > 6
    //);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    //setFormIsValid(
    //   event.target.value.trim().length > 6 && enteredEmail.includes("@")
    // );
  };
  const emailBlurHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };
  const passwordBlurHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            emailIsValid === false ? styles.invalid : ""
          }`}
        >
          <label>Email</label>
          <input
            type="email"
            onChange={emailChangeHandler}
            value={enteredEmail}
            onBlur={emailBlurHandler}
          />
        </div>
        <div
          className={`${styles.control} ${
            passwordIsValid === false ? styles.invalid : ""
          }`}
        >
          <label>Password</label>
          <input
            type="password"
            onChange={passwordChangeHandler}
            value={enteredPassword}
            onBlur={passwordBlurHandler}
          />
        </div>
        <div className={styles.actions}>
          <Button type="submit" disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
