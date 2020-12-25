import { Input } from "antd";
import React, { useContext } from "react";
import { SearchContext } from "../../contexts/AppContext";

function Search() {
  const { searchCapital, handleOnChange, searchCountry } = useContext(
    SearchContext
  );
  return (
    <div>
      <Input
        className="text-input"
        autoFocus={true}
        placeholder="Search by Capital"
        name="searchCapital"
        onChange={(e) => handleOnChange(e.target.value)}
        onPressEnter={searchCountry}
        value={searchCapital}
      />
    </div>
  );
}

export default Search;
