import { Card } from "antd";
import React, { useContext } from "react";
import { SearchContext } from "../../contexts/AppContext";
import "./Result.css";

function Result() {
  const { result, showDetail } = useContext(SearchContext);
  return (
    <Card title="Results" bordered={false} style={{ width: 300 }}>
      {result.map((country, i) => (
        <div
          key={i}
          onClick={() => showDetail(country)}
          className="result--list"
        >
          {country.name}
        </div>
      ))}
    </Card>
  );
}

export default Result;
