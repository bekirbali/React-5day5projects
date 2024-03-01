import React from "react";
import Landing from "../components/Landing";
import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <Landing />
      <div>
        <h2>Our Services</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          suscipit, eros in varius congue, sapien arcu dictum elit, nec
          sollicitudin nunc odio nec nunc. Nullam vitae dui ac nunc lacinia
          aliquam. Nullam nec orci nec nunc tincidunt suscipit. Vivamus
          suscipit, eros in varius congue, sapien arcu dictum elit, nec
          sollicitudin nunc odio nec nunc. Nullam vitae dui ac nunc lacinia
          aliquam. Nullam nec orci nec nunc tincidunt suscipit.
        </p>
      </div>
      <div>
        <h2>Our Fleet</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          suscipit, eros in varius congue, sapien arcu dictum elit, nec
          sollicitudin nunc odio nec nunc. Nullam vitae dui ac nunc lacinia
          aliquam. Nullam nec orci nec nunc tincidunt suscipit. Vivamus
          suscipit, eros in varius congue, sapien arcu dictum elit, nec
          sollicitudin nunc odio nec nunc. Nullam vitae dui ac nunc lacinia
          aliquam. Nullam nec orci nec nunc tincidunt suscipit.
        </p>
      </div>
    </div>
  );
};

export default Home;
