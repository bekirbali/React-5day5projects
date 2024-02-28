import React from "react";
import styles from "../styles/Landing.module.scss";

const Landing = () => {
  return (
    <main className={styles.landing}>
      <div className={styles["top-bar"]}>
        <h1>Easy car renting</h1>
        <div>
          <p>TRY 🟥⬜</p>
          <p>Manage Reservation</p>
        </div>
      </div>
      <div className={styles.navbar}>
        <ul>
          <li>Home</li>
          <li>Car</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className={styles.hero}>
        <div className={styles["hero-text"]}>
          <h1>Rent a car</h1>
          <p>Find the perfect car for your next trip</p>
          <form action="">
            <input type="text" placeholder="Enter location" />
            <input type="text" placeholder="Pick up date" />
            <input type="text" placeholder="Drop off date" />
            <input type="submit" value="Search" />
          </form>
        </div>
      </div>
    </main>
  );
};

export default Landing;
