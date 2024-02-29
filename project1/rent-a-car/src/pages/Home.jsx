import React from "react";
import Landing from "../components/Landing";
import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <Landing />
    </div>
  );
};

export default Home;
