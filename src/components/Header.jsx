import React from "react";
import carImage from "../image/bg.jpg";
import logo from "../image/logo.png";
import styles from "../css/header.module.css";
import { FaBusinessTime } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";
import { IoSearchCircle } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { FaCarOn } from "react-icons/fa6";
function Header() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <div className={styles.nav}>
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className={styles.icon}>
              <ul>
                <li className={styles.mainIcon}>
                  <a href="#car">
                  
                    <FaCarOn
                      style={{
                        fontSize: "2.5rem",
                      }}
                    />
                  </a>
                </li>
                <li>
                  <MdDarkMode />
                </li>
                <li>
                  <FaBusinessTime />
                </li>
                <li style={{ fontSize: "2.5rem" }}>
                  <FaQuestionCircle />
                </li>
                <li>
                  <IoSearchCircle style={{ fontSize: "3.5rem" }} />
                </li>

                <li>
                  <MdAccountCircle />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.startContainer}>
          <a className={styles.start} href="#car">Let's buy a car</a>
        </div>
      </div>
    </>
  );
}

export default Header;
