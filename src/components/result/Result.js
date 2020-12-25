import { Card } from "antd";
import React, { useContext } from "react";
import { SearchContext } from "../../contexts/AppContext";

function Result() {
  const { result, showDetail } = useContext(SearchContext);
  return (
    <Card title="Card title" bordered={false} style={{ width: 300 }}>
      {result.map((country, i) => (
        <div key={i} onClick={() => showDetail(country)}>
          {country.name}
        </div>
      ))}
    </Card>
  );
}

export default Result;
