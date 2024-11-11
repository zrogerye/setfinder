// import React from 'react';
// import Landing from './landing.js'; // Ensure the import matches the file name exactly

// function App() {
//   return (
//     <Landing />
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './landing.js';
import SearchResults from './searchResults.js';
import Beach from './beach.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/beach" element={<Beach />} />
      </Routes>
    </Router>
  );
}

export default App;