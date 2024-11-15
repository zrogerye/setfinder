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
import Horror from './horror.js';
import ProductHSDT from './productHSDT.js';
import ProductH from './prodH.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/beach" element={<Beach />} />
        <Route path="/horror" element={<Horror />} />
        <Route path="/product-hsdt" element={<ProductHSDT />} />
        <Route path="/product-h" element={<ProductH />} />
      </Routes>
    </Router>
  );
}

export default App;