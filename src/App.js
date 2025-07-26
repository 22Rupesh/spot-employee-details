"use client"

import { useState, useMemo } from "react"
import "./App.css"
import OfficeLayout from "./components/OfficeLayout"
import SearchBar from "./components/SearchBar"
import FilterPanel from "./components/FilterPanel"
import Header from "./components/Header"
import { employeeData } from "./data/employees"

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTeam, setSelectedTeam] = useState("")
  const [selectedJobTitle, setSelectedJobTitle] = useState("")
  const [highlightedEmployee, setHighlightedEmployee] = useState(null)

  // Get unique teams and job titles for filters
  const teams = useMemo(() => {
    return [...new Set(employeeData.map((emp) => emp.team))].sort()
  }, [])

  const jobTitles = useMemo(() => {
    return [...new Set(employeeData.map((emp) => emp.jobTitle))].sort()
  }, [])

  // Filter employees based on search and filters
  const filteredEmployees = useMemo(() => {
    return employeeData.filter((employee) => {
      const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesTeam = !selectedTeam || employee.team === selectedTeam
      const matchesJobTitle = !selectedJobTitle || employee.jobTitle === selectedJobTitle

      return matchesSearch && matchesTeam && matchesJobTitle
    })
  }, [searchTerm, selectedTeam, selectedJobTitle])

  const handleSearch = (term) => {
    setSearchTerm(term)
    // Highlight first matching employee
    if (term) {
      const firstMatch = employeeData.find((emp) => emp.name.toLowerCase().includes(term.toLowerCase()))
      setHighlightedEmployee(firstMatch?.id || null)
    } else {
      setHighlightedEmployee(null)
    }
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedTeam("")
    setSelectedJobTitle("")
    setHighlightedEmployee(null)
  }

  return (
    <div className="App">
      <Header />

      <div className="main-container">
        <div className="controls-panel">
          <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />

          <FilterPanel
            teams={teams}
            jobTitles={jobTitles}
            selectedTeam={selectedTeam}
            selectedJobTitle={selectedJobTitle}
            onTeamChange={setSelectedTeam}
            onJobTitleChange={setSelectedJobTitle}
            onClearFilters={clearFilters}
            filteredCount={filteredEmployees.length}
            totalCount={employeeData.length}
          />
        </div>

        <div className="office-container">
          <OfficeLayout
            employees={employeeData}
            filteredEmployees={filteredEmployees}
            highlightedEmployee={highlightedEmployee}
          />
        </div>
      </div>
    </div>
  )
}

export default App
