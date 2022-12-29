import styles from "./Header.module.css";
import Navigation from "../Navigation/Navigation";

const Header = (props) => {
  return (
    <header className={styles["main-header"]}>
      <h1>Auth App</h1>
      <Navigation logged={props.userLogin} onLogOut={props.onLogOut} />
    </header>
  );
};

export default Header;
