import './App.scss';
import Header from './components/Header/Header'
import VideoMain from './components/VideoMain/VideoMain'
import VideoInfo from './components/VideoInfo/VideoInfo';
import CommentSection from './components/CommentSection/CommentSection'
import VideoList from './components/VideoList/VideoList';
import {useState} from 'react';
import videoDetails from './data/video-details.json';

function App() {
  let currentTime = new Date();
  
  function dynamicTimeString(dynaimcTimeStamp) {
    dynaimcTimeStamp = new Date(dynaimcTimeStamp)
    let timeDifference = Math.round(currentTime.getFullYear() - dynaimcTimeStamp.getFullYear());
    if ( timeDifference >= 1){
        return timeDifference === 1 ? `${timeDifference} year ago` : `${timeDifference} years ago`;
    }
    else if (Math.round((currentTime.getMonth() + 1) - (dynaimcTimeStamp.getMonth() + 1)) > 0) {
        timeDifference = Math.round((currentTime.getMonth() + 1) - (dynaimcTimeStamp.getMonth() + 1))
        return timeDifference === 1 ? `${timeDifference} month ago` : `${timeDifference} months ago`;
    }
    else if (Math.round(currentTime.getDate()  - dynaimcTimeStamp.getDate()) >= 1) {
        timeDifference = Math.round(currentTime.getDate()  - dynaimcTimeStamp.getDate())
        return timeDifference === 1 ? `${timeDifference} day ago` : `${timeDifference} days ago`;
    }
    else if (Math.round((currentTime.getHours() + 1)  - (dynaimcTimeStamp.getHours() + 1)) >= 1) {
        timeDifference = Math.round((currentTime.getHours() + 1)  - (dynaimcTimeStamp.getHours() + 1))
        return timeDifference === 1 ? `${timeDifference} hour ago` : `${timeDifference} hours ago`;
    }
    else if (Math.round((currentTime.getMinutes() + 1)  - (dynaimcTimeStamp.getMinutes() + 1)) >= 1) {
        timeDifference = Math.round((currentTime.getMinutes() + 1)  - (dynaimcTimeStamp.getMinutes() + 1))
        return timeDifference === 1 ? `${timeDifference} minute ago` : `${timeDifference} minutes ago`;
    }
    else {
        timeDifference = Math.round((currentTime.getSeconds() + 1)  - (dynaimcTimeStamp.getSeconds()) + 1)
        return timeDifference === 1 ? `${timeDifference} second ago` : `${timeDifference} seconds ago`;
    }
  };

  const [activeVideo, setActiveVideo] = useState(videoDetails[0].id);

  const changeActiveVideo = (videoId) => {
      setActiveVideo(videoId)
  }

  let currentVideo = (videoDetails.filter(video => video.id === activeVideo))[0];

  const mediaQuery = window.matchMedia('(min-width: 1280px)')
  return (
    <div>
      <Header 
      />
      <VideoMain
        currentVideo = {currentVideo}
        dynamicTimeString = {dynamicTimeString}
      />
      <div className = "app__content">
        <div className="app__videoDetails">
          <VideoInfo  
            currentVideo = {currentVideo}
            dynamicTimeString = {dynamicTimeString}
          />
          <CommentSection 
            comments = {currentVideo.comments}
            dynamicTimeString = {dynamicTimeString}
          />
        </div>
        {mediaQuery.matches?<hr className="app__divider"/>:<></>}
        <div>
          <VideoList 
            activeVideo = {activeVideo}
            changeActiveVideo = {changeActiveVideo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
