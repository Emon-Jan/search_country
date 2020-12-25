import React, { Component, createContext } from "react";
import axios from "axios";

export const SearchContext = createContext();

class AppContext extends Component {
  state = { searchCapital: "", result: [], countryDetail: null };

  handleOnChange = (val) => {
    this.setState({ searchCapital: val });
  };

  searchCountry = async () => {
    try {
      const searchResponse = await axios.get(
        `https://restcountries.eu/rest/v2/capital/${this.state.searchCapital}`
      );
      console.log(searchResponse);
      if (searchResponse.status === 200) {
        this.setState({
          result: searchResponse.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  showDetail = (country) => {
    this.setState({ countryDetail: country });
  };

  render() {
    return (
      <SearchContext.Provider
        value={{
          ...this.state,
          handleOnChange: this.handleOnChange,
          searchCountry: this.searchCountry,
          showDetail: this.showDetail,
        }}
      >
        {this.props.children}
      </SearchContext.Provider>
    );
  }
}

export default AppContext;
