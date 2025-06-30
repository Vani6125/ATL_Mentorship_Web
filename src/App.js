import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header.js';
import HomePage from './HomePage.js';
import Support from './Support.js';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Router>
        <Header />
      
        <Routes>
          <Route path="/" element={<HomePage /> }/>
          <Route path="/Support" element={<Support /> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
