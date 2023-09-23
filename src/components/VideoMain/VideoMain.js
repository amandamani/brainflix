import './VideoMain.scss'
import VideoInfo from '../VideoInfo/VideoInfo'



function VideoMain (props) {
    return(
    <>
        <video 
        poster={props.currentVideo.image} 
        width="100%" height="40%" controls 
        className="brainflix__video">
        </video>
        <VideoInfo  
            videoTitle = {props.currentVideo.title}
            videoCreator = {props.currentVideo.channel}
            videoDate = {new Intl.DateTimeFormat('en-US', {day: "2-digit", month: "2-digit", year:"numeric"}).format(props.currentVideo.timestamp)}
            videoViews =  {props.currentVideo.views}
            videoLikes =  {props.currentVideo.likes}
            videoDesc =  {props.currentVideo.description}
        />
    </>
    )
}

export default VideoMain;