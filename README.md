# IPL Dashboard App

## Introduction

The **IPL Dashboard App** is a dynamic and interactive platform designed to provide users with comprehensive insights into the Indian Premier League (IPL). This application allows users to explore match details, team performances, and historical IPL statistics with a user-friendly interface.

---

## Features

- **Home Page:**
  - Displays IPL team list with logos and statistics.
  - Allows navigation to individual team pages.

- **Team Page:**
  - Shows team performance for each IPL season.
  - Displays match details and win/loss statistics.

- **Match Details Page:**
  - Provides detailed information about each match.
  - Highlights key players and match summaries.

- **Search and Filters:**
  - Users can filter matches based on seasons.
  - Search for specific teams or matches.

- **Responsive UI:**
  - Optimized for mobile and desktop screens.

- **Dark Mode:**
  - Toggle between light and dark themes for a better viewing experience.

- **Error Handling:**
  - Displays meaningful error messages for API failures.

---

## Project Structure

```
ipl-dashboard-app/
├── public/                     # Static assets (icons, manifest, images, etc.)
├── src/
│   ├── assets/                 # Images, team logos, and static resources
│   ├── components/             # Reusable UI components
│   │   ├── Header/             # Navigation bar
│   │   ├── Footer/             # Footer section
│   │   ├── TeamCard/           # Team preview card component
│   │   ├── MatchCard/          # Individual match card component
│   ├── pages/                  # Main application pages
│   │   ├── Home/               # Home page displaying all teams
│   │   ├── TeamDetails/        # Detailed page for a specific team
│   │   ├── MatchDetails/       # Individual match details page
│   │   ├── NotFound/           # 404 error page
│   ├── context/                # Context API for state management
│   │   ├── IPLContext.js       # Manages IPL data and user preferences
│   ├── services/               # API interaction and backend services
│   │   ├── iplService.js       # Fetches IPL match data from API
│   ├── utils/                  # Utility functions and helpers
│   ├── styles/                 # Global styles and themes
│   ├── App.js                  # Main app component, routing, and providers
│   ├── index.js                # Application entry point
├── .env                        # Environment variables
├── .gitignore                  # Files and directories to ignore in Git
├── package.json                # Dependencies and scripts
├── README.md                   # Project documentation
```

---

## How to Install

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/ipl-dashboard-app.git
   ```

2. Navigate to the project folder:
   ```sh
   cd ipl-dashboard-app
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Start the application:
   ```sh
   npm start
   ```

---

## How to Use

1. **Home Page:**
   - Click on any team to view its performance.
   - Use the search bar to find a specific team.

2. **Team Page:**
   - View the list of matches the team has played.
   - Click on a match to see detailed statistics.

3. **Match Details Page:**
   - Get detailed information about a specific match.
   - View team scores, top players, and match highlights.

---

## API Information

The app fetches IPL match data from:
```
https://api.example.com/ipl-matches
```
- **Method:** GET
- **Response:** List of IPL matches with details like `id`, `team1`, `team2`, `venue`, `score`, and `result`.

---

## Tools Used

- **React**: For building the UI.
- **React Router**: For page navigation.
- **Axios**: For API calls.
- **Styled Components**: For component-level styling.

---

## Future Enhancements

- Add player profiles and statistics.
- Implement real-time match updates.
- Improve UI with animations and better visualizations.

---
