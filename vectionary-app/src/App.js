import './App.css'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ position: 'absolute', top: '20px', textAlign: 'center', width: '100%' }}>Vectionary</h1>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <input 
            type="text" 
            placeholder="Enter text" 
            style={{ padding: '16px', fontSize: '18px', marginBottom: '20px', width: '400px' }} 
          />
          <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Submit</button>
        </div>
      </header>
    </div>
  );
}

export default App;
