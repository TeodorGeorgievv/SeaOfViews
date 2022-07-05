import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./SearchBar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const filterHandler = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.country.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInputHandler = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchInputs}>
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={filterHandler}
        />
        <div className={classes.searchIcon}>
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon
              onClick={clearInputHandler}
              className={classes.clearBtn}
            />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className={classes.dataResult}>
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <Link onClick={clearInputHandler} className={classes.dataItem} to={`/travel/${value.country.toLowerCase()}`}>
                <p>{value.country}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
