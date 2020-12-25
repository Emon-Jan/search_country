import { Input } from "antd";
import React, { useContext } from "react";
import { SearchContext } from "../../contexts/AppContext";

import { Card } from "antd";

function Search() {
  const { searchCapital, handleOnChange, searchCountry } = useContext(
    SearchContext
  );
  return (
    <Card title="Search with Capital" bordered={false} style={{ width: 300 }}>
      <Input
        className="text-input"
        autoFocus={true}
        placeholder="Search by Capital"
        name="searchCapital"
        onChange={(e) => handleOnChange(e.target.value)}
        onPressEnter={searchCountry}
        value={searchCapital}
      />
    </Card>
  );
}

export default Search;
