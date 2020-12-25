import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../contexts/AppContext";
import { Card } from "antd";
import moment from "moment";

function Detail() {
  const [dateTime, setDateTime] = useState(null);
  const { countryDetail } = useContext(SearchContext);

  useEffect(() => {
    if (!!countryDetail) {
      setInterval(() => {
        setDateTime(
          moment.utc().utcOffset(countryDetail.timezones[0]).format("LL LTS")
        );
      }, 1000);
    }
  });

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
            <div>
              Time:
              {dateTime}
            </div>
          </div>
        )}
      </Card>
    </>
  );
}

export default Detail;
