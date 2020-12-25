import React, { useContext } from "react";
import { SearchContext } from "../../contexts/AppContext";
import { Card } from "antd";

function Detail() {
  const { countryDetail } = useContext(SearchContext);
  return (
    <>
      <Card title="Country Details" bordered={false} style={{ width: 300 }}>
        {countryDetail && (
          <div>
            <div>Country Name:{countryDetail.name} </div>
            <div>Capital:{countryDetail.capital} </div>
            <div>
              Languages:
              {countryDetail.languages.map((language, i) => (
                <span key={i}>{language.name}</span>
              ))}
            </div>
            {/* <div>Country Name: </div> */}
          </div>
        )}
      </Card>
    </>
  );
}

export default Detail;
