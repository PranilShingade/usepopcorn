🍿 usePopcorn - Movie Tracking App
A modern, responsive React application for discovering movies, tracking what you've watched, and managing your personal movie collection. Built with component composition and reusability in mind.
Show Image
✨ Features
🎬 Movie Discovery

Browse and search through movie collections
View movie posters, titles, and release years
Interactive movie selection with smooth hover effects

📊 Personal Movie Tracking

Track movies you've watched with ratings and runtime
Visual statistics dashboard showing:

Total movies watched
Average IMDb ratings
Average personal ratings
Total runtime watched


Remove movies from your watched list

🎨 Modern UI/UX

Dark theme with purple accent colors
Collapsible sections for better space management
Smooth animations and hover effects
Clean, minimal scrollbars (hidden by default)
Responsive design with CSS Grid and Flexbox

🛠️ Technologies & Architecture
Frontend Stack

React 18+ with modern Hooks (useState)
JavaScript ES6+ with arrow functions and destructuring
CSS3 with CSS Custom Properties (variables)
Component Composition pattern for reusability

Architecture Highlights

11 reusable components following single responsibility principle
Props-based composition for flexible UI layouts
Controlled components for form inputs and state management
Custom CSS with design system approach (color variables, spacing)

🏗️ Component Architecture
App (State Management)
├── NavBar (Layout Container)
│   ├── Logo (Branding)
│   ├── Search (Input Component)
│   └── NumResults (Display Component)
└── Main (Layout Container)
    ├── Box (Collapsible Container)
    │   └── MovieList (List Container)
    │       └── Movie (List Item) × N
    └── Box (Collapsible Container)
        ├── WatchedSummary (Statistics)
        └── WatchedMoviesList (List Container)
            └── WatchedMovie (List Item) × N
🚀 Getting Started
Prerequisites

Node.js (v16 or higher)
npm or yarn package manager

Installation

Clone the repository
bashgit clone https://github.com/yourusername/usepopcorn-app.git
cd usepopcorn-app

Install dependencies
bashnpm install
# or
yarn install

Start development server
bashnpm start
# or
yarn start

Open in browser
Navigate to http://localhost:3000

📱 How to Use
Discovering Movies

Use the search bar to find movies (functionality ready for API integration)
Browse the movie list in the left panel
Click on any movie to select it (extensible for movie details)

Managing Your Watched List

View your watched movies in the right panel
See statistics: total count, average ratings, total runtime
Remove movies by clicking the red ❌ button
Collapse/expand sections using the toggle buttons

Understanding the Interface

Left Panel: Movie search and discovery
Right Panel: Your personal watched movies and statistics
Toggle Buttons: Collapse/expand each section
Statistics Bar: Shows your watching habits at a glance

🎯 Key Components
ComponentPurposePropsAppMain state management and coordination-NavBarTop navigation layoutchildrenLogoBranding with customizable emoji/titleemoji, titleSearchSearch input with controlled statequery, onSetQuery, placeholderBoxCollapsible content containerchildren, isOpen, onToggleMovieListRenders list of search resultsmovies, onSelectMovieWatchedSummaryStatistics dashboardwatchedWatchedMoviesListRenders watched movieswatched, onDeleteWatched
🔧 Development Features
Code Quality

JSDoc documentation for all components
PropTypes ready structure (easily extendable)
Consistent naming conventions and file organization
Clean, readable code with proper separation of concerns

Performance Optimizations

Functional components with hooks for optimal re-renders
Efficient state updates using functional updates
Minimal re-renders through proper prop drilling
CSS-only animations for smooth performance

Extensibility

Modular component structure for easy feature additions
Ready for API integration (OMDB, TMDB, etc.)
Prepared for routing (movie details, user accounts)
Theme system with CSS custom properties

🎨 Design System
Color Palette
css--color-primary: #6741d9        /* Primary purple */
--color-primary-light: #7950f2  /* Lighter purple */
--color-text: #dee2e6           /* Light gray text */
--color-background-900: #212529 /* Dark background */
--color-red: #fa5252            /* Delete button */
Typography Scale

Base font size: 62.5% (10px)
Scale: 1.4rem, 1.6rem, 1.8rem, 2.4rem, 3.2rem

🚧 Future Enhancements
Planned Features

 Movie Details Page with full information, cast, reviews
 Real API Integration (OMDB/TMDB API)
 User Authentication and cloud sync
 Advanced Search with filters (genre, year, rating)
 Watchlist Feature (want to watch vs watched)
 Movie Recommendations based on watched history
 Export/Import functionality for movie lists
 Social Features (share lists, follow friends)

Technical Improvements

 TypeScript conversion for better type safety
 React Router for navigation and deep linking
 Context API for global state management
 React Query for server state management
 Unit Testing with Jest and React Testing Library
 Progressive Web App (PWA) features
 Accessibility improvements (ARIA labels, keyboard nav)

🧪 Testing
bash# Run tests (when implemented)
npm test

# Run tests with coverage
npm run test:coverage
🤝 Contributing
Contributions are welcome! This project follows clean code principles and component-based architecture.
Development Guidelines

Component Structure: Each component should have a single responsibility
Props Interface: Use descriptive prop names with JSDoc comments
State Management: Keep state as close to where it's used as possible
Styling: Use CSS custom properties and follow the existing design system
Documentation: Add JSDoc comments for all new components

Getting Started with Contributions

Fork the repository
Create a feature branch (git checkout -b feature/amazing-feature)
Make your changes following the established patterns
Commit your changes (git commit -m 'Add amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request
