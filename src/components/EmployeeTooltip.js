import "./EmployeeTooltip.css"

const EmployeeTooltip = ({ employee, position }) => {
  return (
    <div
      className="employee-tooltip"
      style={{
        left: position.x + 10,
        top: position.y - 10,
        position: "fixed",
        zIndex: 1000,
      }}
    >
      <div className="tooltip-header">
        <h4>{employee.name}</h4>
        <span className="employee-id">ID: {employee.id}</span>
      </div>

      <div className="tooltip-content">
        <div className="tooltip-row">
          <strong>Position:</strong> {employee.jobTitle}
        </div>
        <div className="tooltip-row">
          <strong>Team:</strong> {employee.team}
        </div>
        <div className="tooltip-row">
          <strong>Department:</strong> {employee.department}
        </div>
        <div className="tooltip-row">
          <strong>Current Project:</strong> {employee.currentProject}
        </div>
        <div className="tooltip-row">
          <strong>Status:</strong>
          <span className={`status ${employee.status.toLowerCase()}`}>{employee.status}</span>
        </div>
        <div className="tooltip-row">
          <strong>Email:</strong> {employee.email}
        </div>
      </div>
    </div>
  )
}

export default EmployeeTooltip
