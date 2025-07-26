import "./Header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <h1 className="app-title">Spot</h1>
          <span className="app-subtitle">Employee Seating & Project Tracker</span>
        </div>
        <div className="company-info">
          <span className="company-name">Tripo Saints</span>
        </div>
      </div>
    </header>
  )
}

export default Header
