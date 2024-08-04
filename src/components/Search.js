import React, { useState } from "react";

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term)
    onSearch(term)
  }


  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearchChange}
        value={searchTerm}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}
export default Search