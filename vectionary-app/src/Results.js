// src/Results.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Results.css'; // Import the CSS file for styling

function Results() {
  const location = useLocation();
  const inputText = location.state?.inputText; // Access the input text from the passed state

  useEffect(() => {
    if (inputText) {
      // Example of making a request with the inputText
      console.log('Making request with:', inputText);
      // You could make an API request here (this one uses fetch ex)
      // fetch(`/api/your-endpoint?query=${encodeURIComponent(inputText)}`)
      //   .then(response => response.json())
      //   .then(data => console.log(data))
      //   .catch(error => console.error('Error:', error));
    }
  }, [inputText]);

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
          marginTop: '150px' 
        }}>
          <h2 style={{ marginBottom: '50px' }}>Results</h2>
          <p style={{ textAlign: 'center', fontSize: '24px', color: 'black' }}>
            {/* Display the text submitted */}
            You submitted: <strong>{inputText}</strong>
          </p>

          <p style={{ textAlign: 'center', fontSize: '24px', color: 'black' }}>
            The golden&nbsp;
            <span className="tooltip" style={{ color: 'blue' }}>
              sunlight
              <span className="tooltip-text">A natural light from the sun</span>
            </span>
            &nbsp;filtered through the&nbsp;
            <span className="tooltip" style={{ color: 'green' }}>
              trees
              <span className="tooltip-text">Tall plants with branches and leaves</span>
            </span>
            .
          </p>
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

export default Results;