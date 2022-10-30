import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Video from './pages/Video';
import Home from './pages/Home';
import Playlist from './pages/Playlist';
import PlaylistListing from './components/playlistListing/index.js';
import Watch from './pages/Watch';
import NotFound from './components/404';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/allvideos' element={<Video/>}/>
          <Route path='/playlist' element={<Playlist/>}>
            <Route path="list" element={<PlaylistListing />} />
          </Route>
          <Route path='/watch' element={<Watch/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
