# Spot - Employee Seating & Project Tracker

A web application built for Tripo Saints company to track employees, their seating arrangements, and current projects in a visual and interactive interface.

## Features

### Core Requirements Met:
1. **Visual Office Layout**: Interactive seating chart showing employee positions
2. **Employee Details on Hover**: Detailed tooltips showing employee information and current projects
3. **Employee Search**: Search functionality to locate employees by name
4. **Team/Role Filters**: Filter employees by team or job title

### Additional Features:
- Responsive design for mobile and desktop
- Real-time visual feedback for search results
- Professional UI with smooth animations
- Employee status indicators
- Comprehensive employee information display

## Technology Stack

- **Frontend**: React.js (without TypeScript)
- **Styling**: CSS3 with modern features
- **Build Tool**: Create React App
- **No Backend Required**: Uses static employee data

## Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Steps to Run the Application

1. **Extract the project files** from the ZIP archive

2. **Navigate to the project directory**:
   \`\`\`bash
   cd spot-employee-tracker
   \`\`\`

3. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

4. **Start the development server**:
   \`\`\`bash
   npm start
   \`\`\`

5. **Open your browser** and navigate to \`http://localhost:3000\`

### Build for Production

To create a production build:
\`\`\`bash
npm run build
\`\`\`

## Project Structure

\`\`\`
src/
├── components/          # React components
│   ├── Header.js       # Application header
│   ├── SearchBar.js    # Employee search functionality
│   ├── FilterPanel.js  # Team and role filters
│   ├── OfficeLayout.js # Main office layout grid
│   ├── Seat.js         # Individual seat component
│   └── EmployeeTooltip.js # Employee details tooltip
├── data/
│   └── employees.js    # Static employee data
├── App.js              # Main application component
├── App.css             # Global styles
└── index.js            # Application entry point
\`\`\`

## How It Works

### 1. Office Layout
- Displays a grid-based office layout (8x6 seats)
- Each seat shows employee initials when occupied
- Empty seats are clearly marked
- Responsive design adapts to different screen sizes

### 2. Employee Search
- Real-time search as you type
- Highlights matching employees in the office layout
- Shows search results count
- Clear search functionality

### 3. Filtering System
- Filter by team (Development, Design, Management, etc.)
- Filter by job title (Developer, Designer, Manager, etc.)
- Visual indication of filtered results
- Shows filtered count vs total employees

### 4. Interactive Features
- Hover over occupied seats to see detailed employee information
- Smooth animations and transitions
- Visual feedback for user interactions
- Status indicators (Active, Away, In Meeting)

## Employee Data Structure

Each employee record contains:
- ID and name
- Job title and team
- Department
- Current project
- Status (Active/Away/In Meeting)
- Email address

## Design Decisions

### Visual Design
- Clean, professional interface suitable for corporate environment
- Color-coded seats for different states (occupied, empty, filtered, highlighted)
- Consistent spacing and typography
- Accessible color choices and contrast ratios

### User Experience
- Intuitive hover interactions
- Clear visual hierarchy
- Responsive design for all devices
- Fast, real-time search and filtering

### Technical Architecture
- Component-based React architecture
- Separation of concerns (data, components, styles)
- Efficient state management with React hooks
- CSS modules for component-specific styling

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

Potential improvements that could be added:
- Real-time updates via WebSocket connection
- Employee photo integration
- Booking system for empty seats
- Integration with calendar systems
- Export functionality for reports
- Admin panel for employee management

## Development Notes

This application was built following modern React best practices:
- Functional components with hooks
- Clean component separation
- Efficient re-rendering with useMemo
- Accessible HTML structure
- Mobile-first responsive design

The application meets all requirements specified in the Kvantum internship challenge and provides a solid foundation for future enhancements.
