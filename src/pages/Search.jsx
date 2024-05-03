import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import SearchTable from "../components/SearchTable";

const Search = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <SearchTable />
    </div>
  );
};

export default Search;
