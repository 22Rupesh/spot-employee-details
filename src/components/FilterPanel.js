"use client"
import "./FilterPanel.css"

const FilterPanel = ({
  teams,
  jobTitles,
  selectedTeam,
  selectedJobTitle,
  onTeamChange,
  onJobTitleChange,
  onClearFilters,
  filteredCount,
  totalCount,
}) => {
  return (
    <div className="filter-panel">
      <h3>Filters</h3>

      <div className="filter-group">
        <label htmlFor="team-filter">Team:</label>
        <select
          id="team-filter"
          value={selectedTeam}
          onChange={(e) => onTeamChange(e.target.value)}
          className="filter-select"
        >
          <option value="">All Teams</option>
          {teams.map((team) => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="job-filter">Job Title:</label>
        <select
          id="job-filter"
          value={selectedJobTitle}
          onChange={(e) => onJobTitleChange(e.target.value)}
          className="filter-select"
        >
          <option value="">All Positions</option>
          {jobTitles.map((title) => (
            <option key={title} value={title}>
              {title}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-results">
        Showing {filteredCount} of {totalCount} employees
      </div>

      {(selectedTeam || selectedJobTitle) && (
        <button className="clear-filters" onClick={onClearFilters}>
          Clear All Filters
        </button>
      )}
    </div>
  )
}

export default FilterPanel
