import './Video.scss'
import VideoInfo from '../VideoInfo/VideoInfo'



function Video (props) {
    return(
    <>
        <video 
        poster={props.currentVideo} 
        width="100%" height="40%" controls 
        className="brainflix__video">
        </video>
        <VideoInfo  
            videoTitle = {props.videoTitle}
            videoCreator = {props.videoCreator}
            videoDate = {props.videoDate}
            videoViews =  {props.videoViews}
            videoLikes =  {props.videoLikes}
            videoDesc =  {props.videoDesc}
        />
        {/* <VideoComment /> */}
    </>
    )
}

export default Video;