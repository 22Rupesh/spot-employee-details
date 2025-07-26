"use client"
import "./SearchBar.css"

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div className="search-bar">
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search for an employee..."
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          className="search-input"
        />
        <div className="search-icon">🔍</div>
      </div>
      {searchTerm && (
        <button className="clear-search" onClick={() => onSearch("")}>
          Clear
        </button>
      )}
    </div>
  )
}

export default SearchBar
