import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './views/home';
import WatchPage from './views/watchPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch" element={<WatchPage />} />
      </Routes>
    
    </div>
  );
}

export default App;
