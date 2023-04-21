import './App.css';

import img from './assets/cronometro.png';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './components/pages/Home';

function App() {

  

  return (
    <Router>
      
      

      <Routes>
        <Route exact path="/" element={<Home src={img} alt="image"></Home>} />
      </Routes>

    </Router>
  );
}

export default App;
