import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Results from './Results';

function App() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/results');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ position: 'absolute', top: '20px', textAlign: 'center', width: '100%' }}>Vectionary</h1>
        <p style={{ position: 'absolute', top: '100px', textAlign: 'center', fontSize: 'calc(1px + 2vmin)', color: 'black', fontFamily: 'Helvetica, Arial, sans-serif' }}>Project of Parsimony</p>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          marginTop: '-500px' // Adjusted margin to move the input and button closer to the top
        }}>
          <input 
            type="text" 
            placeholder="Enter text" 
            style={{ padding: '16px', fontSize: '18px', marginBottom: '20px', width: '400px' }} 
          />
          <button 
            style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', color: 'white', backgroundColor: '#00008b', transition: 'background-color 0.1s'}}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#486Cff'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#00008b'}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>

        <a 
          href="https://i.etsystatic.com/40798348/r/il/235c22/4607038596/il_fullxfull.4607038596_dznd.jpg"
          className="api-info"
          target="_blank"
          rel="noopener noreferrer"
        >
          Looking for the API?
        </a>

        <a
          href="https://www.pangeon.com/parsimony"
          className="p7y-info"
          target="_blank"
          rel="noopener noreferrer"
        >
          P7Y
        </a>
      </header>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;
