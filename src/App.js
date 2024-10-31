import './App.css';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import FourthPage from './pages/FourthPage';
import FifthPage from './pages/FifthPage';
import SixthPage from './pages/SixthPage';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className='content'>
        <Routes>
          <Route path="/useState" element={<FirstPage />} />
          <Route path="/useEffect" element={<SecondPage />} />
          <Route path="/useContext" element={<ThirdPage />} />
          <Route path="/useRef" element={<FourthPage />} />
          <Route path="/useReducer" element={<FifthPage />} />
          <Route path="/useMemo" element={<SixthPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
