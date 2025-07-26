import Seat from "./Seat"
import "./OfficeLayout.css"

const OfficeLayout = ({ employees, filteredEmployees, highlightedEmployee }) => {
  // Create office layout grid (8x6 grid for this example)
  const rows = 6
  const cols = 8

  // Create seat positions
  const seatPositions = []
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      seatPositions.push({ row, col, id: `${row}-${col}` })
    }
  }

  // Map employees to seats
  const seatsWithEmployees = seatPositions.map((position, index) => {
    const employee = employees[index] || null
    const isFiltered = employee ? filteredEmployees.some((emp) => emp.id === employee.id) : false
    const isHighlighted = employee ? employee.id === highlightedEmployee : false

    return {
      ...position,
      employee,
      isFiltered,
      isHighlighted,
    }
  })

  return (
    <div className="office-layout">
      <div className="office-title">
        <h2>Office Floor Plan</h2>
        <p>Hover over seats to see employee details</p>
      </div>

      <div className="office-grid">
        {seatsWithEmployees.map((seat) => (
          <Seat key={seat.id} seat={seat} />
        ))}
      </div>

      <div className="office-legend">
        <div className="legend-item">
          <div className="legend-color occupied"></div>
          <span>Occupied</span>
        </div>
        <div className="legend-item">
          <div className="legend-color empty"></div>
          <span>Empty</span>
        </div>
        <div className="legend-item">
          <div className="legend-color filtered"></div>
          <span>Filtered Result</span>
        </div>
        <div className="legend-item">
          <div className="legend-color highlighted"></div>
          <span>Search Result</span>
        </div>
      </div>
    </div>
  )
}

export default OfficeLayout
