import './App.css';
import {Routes,Route} from 'react-router-dom'
import LandingPage from './LandingPage';
import VideoPlay from './components/VideoPlay';
import SearchList from './components/SearchList';
function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/watch' element={<VideoPlay/>}/>
    <Route path='/searchList' element={<SearchList/>}/>
    </Routes>
    </>
  );
}

export default App;
