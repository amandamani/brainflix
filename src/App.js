import './App.scss';
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/video/:videoid" element={<Home/>}/>
        <Route path="/upload" element={<Upload/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
