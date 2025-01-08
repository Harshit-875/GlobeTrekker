import './App.css';
import About from './components/About';
import Background from './components/Background';
import Body from './components/Body';
import Discover from './components/Discover';
import Navbar from './components/Navbar';
import Places from './components/Places';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherApp from './components/Weather'
import CurrencyConverter from './components/CurrencyConverter';
import Subscribe from './components/Subscribe';
import Place from './components/Place';

function App() {
  return (
    <Router>
      <div className="container" style={{ width: "100%" }}>
        
        <Background />
        <Navbar />
        <Routes>
          {/* Define a single route for the home page */}
          <Route path='/weather' element={<WeatherApp/>}/>
          <Route path='/currency' element={<CurrencyConverter/>}/>
          <Route path='/places' element={<Place/>}/>

          <Route
            path="/"
            element={
              <>
                <Body />
                <About />
                <Discover />
                <Places />
                <Subscribe/>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
