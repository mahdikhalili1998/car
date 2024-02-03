import React, { useContext, useState } from "react";
import { IoSearchCircle } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";
import { InfoContext } from "../pages/homepage";
import styles from "../css/search.module.css";
function Search() {
  const {
    searchHandler,
    click,
    setClick,
    searchValue,
    setSearchValue,
    closeHandler,
  } = useContext(InfoContext);

  return (
    <div>
      {!click ? (
        <span onClick={() => setClick(true)}>
          <IoSearchCircle style={{ fontSize: "3.5rem" }} />
        </span>
      ) : (
        <div className={styles.container}>
          <input
            style={{ padding: "0.7rem 1rem" }}
            type="text"
            placeholder=" Type car name"
            value={searchValue}
            onChange={(e) =>
              setSearchValue(e.target.value.toLocaleLowerCase().trim())
            }
          />
          <a href="#searchCar">
            <IoSearchCircle
              onClick={searchHandler}
              style={{ fontSize: "3.5rem" }}
            />
          </a>
          <span onClick={closeHandler}>
            <IoMdCloseCircle style={{ marginTop: ".4rem" }} />
          </span>
        </div>
      )}
    </div>
  );
}

export default Search;
