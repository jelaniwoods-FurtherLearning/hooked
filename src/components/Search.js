import React, { useState } from "react";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (event) => {
    setSearchValue(event.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const calalSearchFunction = (event) => {
    event.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input onClick={calalSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
};

export default Search;
