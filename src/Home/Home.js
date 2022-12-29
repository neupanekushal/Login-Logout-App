import styles from "./Home.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

const Home = (props) => {
  return (
    <Card className={styles.home}>
      <h1> Welcome User</h1>
      <Button onClick={props.onLogOut}>Logout</Button>
    </Card>
  );
};

export default Home;
