import './App.scss';
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

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
