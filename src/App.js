import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Catalog from './components/Catalog.js';


function Home() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <button style={{alignSelf:"center",justifySelf:"center"}} onClick={() => navigate('/catalog')}>Go to Catalog</button>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </Router>
  );
}

export default App;
