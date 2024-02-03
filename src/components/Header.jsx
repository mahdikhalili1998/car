import React, { useContext, useState } from "react";
import logo from "../image/logo.png";
import styles from "../css/header.module.css";
import { FaBusinessTime } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { FaCarOn } from "react-icons/fa6";
import Search from "./Search";
import { InfoContext } from "../pages/homepage";

function Header() {
  const { searchHandler } = useContext(InfoContext);
  const [click, setClick] = useState(false);

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
                  <a href="#how-work">
                    <FaBusinessTime />
                  </a>
                </li>
                <li style={{ fontSize: "2.5rem" }}>
                  <a href="#why-us">
                    <FaQuestionCircle />
                  </a>
                </li>
                <li>
                  <Search click={click} setClick={setClick} />
                </li>

                <li>
                  <MdAccountCircle />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.startContainer}>
          <a className={styles.start} href="#car">
            Let's buy a car
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
