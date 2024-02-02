import React from "react";
import styles from "../css/why-us.module.css";
import time from "../image/why-us/time.jfif";
import money from "../image/why-us/money.jfif";
import fast from "../image/why-us/fast.png";
function WhyUs() {
  return (
    <div className={styles.container}>
      <div>
        <h1 id="why-us">Why us ?</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.contentContainer}>
          <img src={time} alt="time" />
          <h2>
            Saving Your <span>T</span>ime
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            aliquam modi amet eligendi soluta aperiam.
          </p>
        </div>
        <div className={styles.contentContainer}>
          <img src={money} alt="money" />
          <h2>
            Saving Your <span>M</span>oney
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            aliquam modi amet eligendi soluta aperiam.
          </p>
        </div>
        <div className={styles.contentContainer}>
          <img src={fast} alt="fast" />
          <h2>
            Fast <span>R</span>esponse
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            aliquam modi amet eligendi soluta aperiam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
