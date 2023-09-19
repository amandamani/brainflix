import './App.scss';
import Header from './components/Header/Header'
import Video from './components/Video/Video'

function App() {
  return (
    <div>
      <Header />
      <Video
        currentVideo = "https://i.imgur.com/l2Xfgpl.jpg"
        videoTitle = "BMX Rampage: 2021 Highlights"
        videoCreator = "Ray Crow"
        videoDate = "07/12/2021"
        videoViews =  "110,223"
        videoLikes =  "110,786"
        videoDesc =  "On a gusty day in Southern Utah, a group of 25
        daring mountain bikers blew the doors off what
        is possible on two wheels, unleashing some of
        the biggest moments the sport has ever seen.
        While mother nature only allowed for one full run
        before the conditions made it impossible to ride,
        that was all that was needed for event veteran
        Kyle Strait, who won the event for the second
        time -- eight years after his first Red Cow
        Rampage title"
      />
    </div>
  );
}

export default App;
