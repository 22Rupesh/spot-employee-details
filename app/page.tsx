"use client"

import { useState, useMemo } from "react"
import { Search, Users, Filter, MapPin } from "lucide-react"

// Mock employee data for preview
const employeeData = [
  {
    id: "EMP001",
    name: "John Smith",
    jobTitle: "Senior Developer",
    team: "Development",
    department: "Engineering",
    currentProject: "E-commerce Platform",
    status: "Active",
    email: "john.smith@triposaint.com",
  },
  {
    id: "EMP002",
    name: "Sarah Johnson",
    jobTitle: "UI/UX Designer",
    team: "Design",
    department: "Creative",
    currentProject: "Mobile App Redesign",
    status: "Active",
    email: "sarah.johnson@triposaint.com",
  },
  {
    id: "EMP003",
    name: "Mike Chen",
    jobTitle: "Project Manager",
    team: "Management",
    department: "Operations",
    currentProject: "Client Portal",
    status: "In Meeting",
    email: "mike.chen@triposaint.com",
  },
  {
    id: "EMP004",
    name: "Emily Davis",
    jobTitle: "Frontend Developer",
    team: "Development",
    department: "Engineering",
    currentProject: "Dashboard Analytics",
    status: "Active",
    email: "emily.davis@triposaint.com",
  },
  {
    id: "EMP005",
    name: "David Wilson",
    jobTitle: "Backend Developer",
    team: "Development",
    department: "Engineering",
    currentProject: "API Integration",
    status: "Away",
    email: "david.wilson@triposaint.com",
  },
  {
    id: "EMP006",
    name: "Lisa Anderson",
    jobTitle: "Graphic Designer",
    team: "Design",
    department: "Creative",
    currentProject: "Brand Guidelines",
    status: "Active",
    email: "lisa.anderson@triposaint.com",
  },
]

export default function SpotPreview() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTeam, setSelectedTeam] = useState("")
  const [hoveredSeat, setHoveredSeat] = useState(null)
  const [showTooltip, setShowTooltip] = useState(false)

  const teams = [...new Set(employeeData.map((emp) => emp.team))].sort()

  const filteredEmployees = useMemo(() => {
    return employeeData.filter((employee) => {
      const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesTeam = !selectedTeam || employee.team === selectedTeam
      return matchesSearch && matchesTeam
    })
  }, [searchTerm, selectedTeam])

  // Create a 6x8 grid for office layout
  const createOfficeGrid = () => {
    const grid = []
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 8; col++) {
        const seatIndex = row * 8 + col
        const employee = employeeData[seatIndex] || null
        const isFiltered = employee ? filteredEmployees.some((emp) => emp.id === employee.id) : false
        const isHighlighted = employee && searchTerm && employee.name.toLowerCase().includes(searchTerm.toLowerCase())

        grid.push({
          id: `${row}-${col}`,
          row,
          col,
          employee,
          isFiltered,
          isHighlighted,
        })
      }
    }
    return grid
  }

  const officeGrid = createOfficeGrid()

  const getSeatClassName = (seat) => {
    let className =
      "w-16 h-16 border-2 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all duration-300 text-xs relative"

    if (seat.employee) {
      if (seat.isHighlighted) {
        className += " bg-amber-100 border-amber-400 shadow-lg animate-pulse"
      } else if (seat.isFiltered) {
        className += " bg-blue-100 border-blue-400"
      } else if (filteredEmployees.length < employeeData.length && !seat.isFiltered) {
        className += " bg-gray-100 border-gray-300 opacity-40"
      } else {
        className += " bg-green-100 border-green-400"
      }
    } else {
      className += " bg-gray-50 border-gray-200"
    }

    return className
  }

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "active":
        return "bg-green-500"
      case "away":
        return "bg-yellow-500"
      case "in meeting":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold mb-2">Spot</h1>
              <p className="text-indigo-100">Employee Seating & Project Tracker</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">Tripo Saints</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Controls Panel */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search Bar */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Search className="w-5 h-5" />
                Search Employee
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for an employee..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                />
                <Search className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
              </div>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="mt-3 text-sm text-indigo-600 hover:text-indigo-800"
                >
                  Clear search
                </button>
              )}
            </div>

            {/* Filter Panel */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filters
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Team:</label>
                  <select
                    value={selectedTeam}
                    onChange={(e) => setSelectedTeam(e.target.value)}
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none"
                  >
                    <option value="">All Teams</option>
                    {teams.map((team) => (
                      <option key={team} value={team}>
                        {team}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-sm text-gray-600">
                    Showing {filteredEmployees.length} of {employeeData.length} employees
                  </p>
                </div>

                {(selectedTeam || searchTerm) && (
                  <button
                    onClick={() => {
                      setSelectedTeam("")
                      setSearchTerm("")
                    }}
                    className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Office Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Seats:</span>
                  <span className="font-semibold">48</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Occupied:</span>
                  <span className="font-semibold text-green-600">{employeeData.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Available:</span>
                  <span className="font-semibold text-blue-600">{48 - employeeData.length}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Office Layout */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
                  <MapPin className="w-6 h-6" />
                  Office Floor Plan
                </h2>
                <p className="text-gray-600">Hover over seats to see employee details</p>
              </div>

              {/* Office Grid */}
              <div className="grid grid-cols-8 gap-3 max-w-4xl mx-auto mb-6">
                {officeGrid.map((seat) => (
                  <div
                    key={seat.id}
                    className={getSeatClassName(seat)}
                    onMouseEnter={() => {
                      if (seat.employee) {
                        setHoveredSeat(seat.employee)
                        setShowTooltip(true)
                      }
                    }}
                    onMouseLeave={() => {
                      setShowTooltip(false)
                      setHoveredSeat(null)
                    }}
                  >
                    <div className="text-xs text-gray-500 absolute top-1 left-1">
                      {seat.row + 1}-{seat.col + 1}
                    </div>
                    {seat.employee && (
                      <>
                        <div className="font-bold text-gray-700">
                          {seat.employee.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div
                          className={`w-2 h-2 rounded-full absolute bottom-1 right-1 ${getStatusColor(seat.employee.status)}`}
                        ></div>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex justify-center gap-6 flex-wrap text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-100 border-2 border-green-400 rounded"></div>
                  <span>Occupied</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-50 border-2 border-gray-200 rounded"></div>
                  <span>Empty</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-100 border-2 border-blue-400 rounded"></div>
                  <span>Filtered Result</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-amber-100 border-2 border-amber-400 rounded animate-pulse"></div>
                  <span>Search Result</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Employee Tooltip */}
        {showTooltip && hoveredSeat && (
          <div className="fixed top-20 right-6 bg-white border border-gray-200 rounded-lg shadow-xl p-4 min-w-80 z-50 animate-in slide-in-from-right-2">
            <div className="border-b border-gray-200 pb-3 mb-3">
              <h4 className="text-lg font-semibold text-gray-800">{hoveredSeat.name}</h4>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">ID: {hoveredSeat.id}</span>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <strong className="text-gray-600">Position:</strong>
                <span>{hoveredSeat.jobTitle}</span>
              </div>
              <div className="flex justify-between">
                <strong className="text-gray-600">Team:</strong>
                <span>{hoveredSeat.team}</span>
              </div>
              <div className="flex justify-between">
                <strong className="text-gray-600">Department:</strong>
                <span>{hoveredSeat.department}</span>
              </div>
              <div className="flex justify-between">
                <strong className="text-gray-600">Current Project:</strong>
                <span className="text-right max-w-40">{hoveredSeat.currentProject}</span>
              </div>
              <div className="flex justify-between items-center">
                <strong className="text-gray-600">Status:</strong>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${getStatusColor(hoveredSeat.status)}`}></div>
                  <span>{hoveredSeat.status}</span>
                </div>
              </div>
              <div className="flex justify-between">
                <strong className="text-gray-600">Email:</strong>
                <span className="text-blue-600 text-xs">{hoveredSeat.email}</span>
              </div>
            </div>
          </div>
        )}

        {/* Demo Instructions */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">Interactive Demo Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700">
            <div>
              <strong>Try these features:</strong>
              <ul className="mt-2 space-y-1 ml-4">
                <li>• Search for "John" or "Sarah"</li>
                <li>• Filter by "Development" team</li>
                <li>• Hover over occupied seats (green)</li>
                <li>• Notice the status indicators</li>
              </ul>
            </div>
            <div>
              <strong>Visual Elements:</strong>
              <ul className="mt-2 space-y-1 ml-4">
                <li>• Color-coded seat states</li>
                <li>• Real-time search highlighting</li>
                <li>• Detailed employee tooltips</li>
                <li>• Responsive grid layout</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
