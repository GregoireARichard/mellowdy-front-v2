
import './App.css';
import GeneratePlaylist from './Components/GeneratePlaylist/GeneratePlaylist';
import Homepage from './Components/Homepage/Homepage';
import About from './Components/About/About';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';  
import FrontToken from './Components/FrontToken';

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar/>
          <Routes>
              <Route path="/" element={<Homepage />}/>
              <Route path="/about" element={<About />}/>
              <Route path='/generate-playlist' element={<GeneratePlaylist/>}/>
              <Route path='/frontToken' element={<FrontToken/>}/>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
