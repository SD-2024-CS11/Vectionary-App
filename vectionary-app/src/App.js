import './App.css';
// import vectionaryImage from './public/vectionaryLogo.png'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ position: 'absolute', top: '20px', textAlign: 'center', width: '100%' }}>Vectionary</h1>
        {/* <img 
          src={'vectionary_logo.png'} 
          alt="Vectionary Logo" 
          style={{ marginTop: '60px', width: '200px', height: 'auto' }} // Adjust size as needed
        />*/ }
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <input 
            type="text" 
            placeholder="Enter text" 
            style={{ padding: '16px', fontSize: '18px', marginBottom: '20px', width: '400px' }} 
          />
          <button 
            style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', color: 'white', backgroundColor: '#00008b', transition: 'background-color 0.3s'}}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#486Cff'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#00008b'}
          >
            Submit
          </button>
        </div>

        <a 
          // put filler link of a cute puppy
          href="https://i.etsystatic.com/40798348/r/il/235c22/4607038596/il_fullxfull.4607038596_dznd.jpg"
          className="api-info"
          target="_blank" // Opens the link in a new tab
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

export default App;
