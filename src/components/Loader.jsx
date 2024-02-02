import React from "react";
import { Hourglass } from "react-loader-spinner";
import styles from "../css/loader.module.css";
function Loader() {
  return (
    <div className={styles.container}>
      <Hourglass
        visible={true}
        height="150"
        width="150"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["var(--mainColor)", " #fbd3d5"]}
      />
    </div>
  );
}

export default Loader;
