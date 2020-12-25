import React, { useContext } from "react";
import { SearchContext } from "../../contexts/AppContext";

function Detail() {
  const { countryDetail } = useContext(SearchContext);
  return (
    <>
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
    </>
  );
}

export default Detail;
