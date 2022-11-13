import './App.css';
import SearchPage from './pages/SearchPage/SearchPage';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<SearchPage/>} />
            <Route exact path='/:id' element={<DetailsPage/>} />
        </Routes>
    </Router>
  );
}

export default App;
