import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (

    <>
      <div className="search">
        <img src="../../public/search.svg" alt="search" />
        <input
          type="text"
          placeholder="Searching through thousand of movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </>
  );
};

export default Search;
