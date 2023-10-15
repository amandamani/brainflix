import './Home.scss';
import Header from '../../components/Header/Header'
import VideoMain from '../../components/VideoMain/VideoMain'
import VideoInfo from '../../components/VideoInfo/VideoInfo';
import CommentSection from '../../components/CommentSection/CommentSection'
import VideoList from '../../components/VideoList/VideoList';
import {useState, useEffect} from 'react';
import videoDetails from '../../data/video-details.json';
import {useParams} from 'react-router-dom';
import axios from 'axios';


function Home () {  
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

  let apiKey = "23342553-3fcb-43e9-86f4-9034c97d1bb3"

  const {videoid} = useParams();

  const [allVideos, setAllVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState({});
  const [activeVideo, setActiveVideo] = useState(null);

  const changeActiveVideo = (videoId) => {
    setActiveVideo(videoId)
}


  useEffect (() => {
    if (videoid){
      axios.get(`https://project-2-api.herokuapp.com/videos/${videoid}?api_key=${apiKey}`)
      .then((res) => {
        setCurrentVideo(res.data)
        console.log(currentVideo)
      })
      changeActiveVideo(videoid)
    }
    else {
      axios.get(`https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=${apiKey}`)
      .then((res) => {
        setCurrentVideo(res.data)
        console.log(res.data)
        changeActiveVideo(res.data.id)
      });
    }
 },[videoid]);

  const mediaQuery = window.matchMedia('(min-width: 1280px)');
  if (!currentVideo){
    console.log("loading")
  }
  // else{
  return(
    <div>
      <Header 
      />
      {/* <VideoMain
        currentVideo = {currentVideo}
        dynamicTimeString = {dynamicTimeString}
      />
      <div className = "home__content">
        <div className="home__videoDetails">
          <VideoInfo  
            currentVideo = {currentVideo}
            dynamicTimeString = {dynamicTimeString}
          />
          {currentVideo.comments && <CommentSection 
            currentVideo = {currentVideo}
            dynamicTimeString = {dynamicTimeString}
          />}
        </div>
        {mediaQuery.matches?<hr className="home__divider"/>:<></>}
        <div>
          <VideoList 
            activeVideo = {activeVideo}
            allVideos = {allVideos}
          />
        </div>
      </div> */}
    </div>
  )
  // }
}


export default Home