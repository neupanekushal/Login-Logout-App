import "./App.css";
import { Fragment } from "react";
import Login from "./Login/Login";
import Home from "./Home/Home";
import Header from "./Header/Header";
import { useState, useEffect } from "react";

function App() {
  const [loggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const localStorageData = localStorage.getItem("userLogState");
    if (localStorageData === "LOGGED_IN") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    console.log(email, password);
    localStorage.setItem("userLogState", "LOGGED_IN");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("userLogState");
    setIsLoggedIn(false);
  };

  return (
    <Fragment>
      <Header userLogin={loggedIn} onLogOut={logoutHandler} />
      <main>
        {!loggedIn ? (
          <Login onLogin={loginHandler} />
        ) : (
          <Home onLogOut={logoutHandler} />
        )}
      </main>
    </Fragment>
  );
}

export default App;
