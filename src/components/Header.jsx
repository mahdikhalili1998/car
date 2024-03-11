import React, { useContext, useState } from "react";
import logo from "../image/logo.png";
import styles from "../css/header.module.css";
import { FaBusinessTime } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { FaCarOn } from "react-icons/fa6";
import Search from "./Search";
import { IoMdMenu } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <div>
          <div className={styles.nav}>
            <div>
              <img src={logo} alt="logo" />
            </div>
            {isOpen ? (
              <div
                className={styles.icon}
                style={
                  !isOpen
                    ? { transform: "translate(0rem 120rem)" }
                    : { transform: "translate(0rem 0rem)" }
                }
              >
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
                    <Search />
                  </li>

                  <li>
                    <MdAccountCircle />
                  </li>
                  <li onClick={() => setIsOpen((open) => !open)}>
                    <IoIosCloseCircle />
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <span
                  onClick={() => setIsOpen((open) => !open)}
                  className={styles.menu}
                >
                  <IoMdMenu />
                </span>
              </div>
            )}
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
