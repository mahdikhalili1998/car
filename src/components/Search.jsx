import React, { useContext, useState } from "react";
import { IoSearchCircle } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";
import { InfoContext } from "../pages/homepage";
function Search({ click, setClick }) {
  const { searchHandler, searchValue, setSearchValue } =
    useContext(InfoContext);
  return (
    <div>
      {!click ? (
        <span onClick={() => setClick(true)}>
          <IoSearchCircle style={{ fontSize: "3.5rem" }} />
        </span>
      ) : (
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <input
            style={{ padding: "0.7rem 1rem" }}
            type="text"
            placeholder=" search ..."
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
          <span onClick={() => setClick(false)}>
            <IoMdCloseCircle style={{ marginTop: ".4rem" }} />
          </span>
        </div>
      )}
    </div>
  );
}

export default Search;
