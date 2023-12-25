import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import MainContainer from './Components/MainContainer/MainContainer';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route exact path='/' element={<MainContainer />} />
        </Routes>
    </div>
  );
}

export default App;
