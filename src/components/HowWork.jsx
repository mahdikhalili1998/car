import React from "react";
import styles from "../css/howwork.module.css";
import select from "../image/select-car.png";
import sales from "../image/sales.png";
import giveKey from "../image/give-key.png";
function HowWork() {
  return (
    <div className={styles.allcontainer}>
      <div className={styles.header}>
        <h1>How work ?</h1>
        <p >For buying a car you should follow the three very simple steps :</p>
      </div>
      <div className={styles.container}>
        <img src={select} alt="select car" />
        <div className={styles.title}>
          <h2>1. Choose your car</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
            aperiam ipsa recusandae veritatis officia molestiae dolores iusto ad
            assumenda quod.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <img src={sales} alt="sales" />
        <div className={styles.title}>
          <h2>2. Contact our Consultants</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
            aperiam ipsa recusandae veritatis officia molestiae dolores iusto ad
            assumenda quod.
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <img src={giveKey} alt="give key" />
        <div className={styles.title}>
          <h2>3.Contract and delivery of the car</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
            aperiam ipsa recusandae veritatis officia molestiae dolores iusto ad
            assumenda quod.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowWork;
