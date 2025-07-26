"use client"

import { useState } from "react"
import EmployeeTooltip from "./EmployeeTooltip"
import "./Seat.css"

const Seat = ({ seat }) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })

  const handleMouseEnter = (e) => {
    if (seat.employee) {
      setShowTooltip(true)
      setTooltipPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }
  }

  const handleMouseLeave = () => {
    setShowTooltip(false)
  }

  const handleMouseMove = (e) => {
    if (showTooltip) {
      setTooltipPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }
  }

  const getSeatClass = () => {
    let className = "seat"

    if (seat.employee) {
      className += " occupied"

      if (seat.isHighlighted) {
        className += " highlighted"
      } else if (seat.isFiltered) {
        className += " filtered"
      } else if (!seat.isFiltered && seat.employee) {
        className += " dimmed"
      }
    } else {
      className += " empty"
    }

    return className
  }

  return (
    <>
      <div
        className={getSeatClass()}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        title={seat.employee ? seat.employee.name : "Empty seat"}
      >
        <div className="seat-number">
          {seat.row + 1}-{seat.col + 1}
        </div>
        {seat.employee && (
          <div className="seat-initials">
            {seat.employee.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
        )}
      </div>

      {showTooltip && seat.employee && <EmployeeTooltip employee={seat.employee} position={tooltipPosition} />}
    </>
  )
}

export default Seat
