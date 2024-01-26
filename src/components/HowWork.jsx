import React from "react";
import styles from "../css/howwork.module.css";
import select from "../image/select-car.png";
import sales from "../image/sales.png";
import giveKey from "../image/give-key.png";
function HowWork() {
  return (
    <div className={styles.allcontainer}>
      <h1>How work ?</h1>
      <div className={styles.container}>
        <img src={select} alt="select car" />

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
          aperiam ipsa recusandae veritatis officia molestiae dolores iusto ad
          assumenda quod.
        </p>
      </div>
      <div className={styles.container}>
        <img src={sales} alt="sales" />

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
          aperiam ipsa recusandae veritatis officia molestiae dolores iusto ad
          assumenda quod.
        </p>
      </div>
      <div className={styles.container}>
        <img src={giveKey} alt="give key" />

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
          aperiam ipsa recusandae veritatis officia molestiae dolores iusto ad
          assumenda quod.
        </p>
      </div>
    </div>
  );
}

export default HowWork;
