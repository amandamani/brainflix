import './App.scss';
import Header from './components/Header/Header'
import VideoMain from './components/VideoMain/VideoMain'
import CommentSection from './components/CommentSection/CommentSection'
import VideoList from './components/VideoList/VideoList';
import {useState} from 'react';
import videoDetails from './data/video-details.json';

function App() {
  
  const [activeVideo, setActiveVideo] = useState(videoDetails[0].id);

  const changeActiveVideo = (videoId) => {
      setActiveVideo(videoId)
  }

  let currentVideo = (videoDetails.filter(video => video.id === activeVideo))[0];


  return (
    <div>
      <Header />
      <VideoMain
        currentVideo = {currentVideo}/>
      <CommentSection 
        comments = {currentVideo.comments}
      />
      <VideoList 
        activeVideo = {activeVideo}
        changeActiveVideo = {changeActiveVideo}
      />
    </div>
  );
}

export default App;
