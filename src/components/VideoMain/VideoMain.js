import './VideoMain.scss'




function VideoMain (props) {
    return(
    <div className="brainFlix__video">
        <video 
        poster={props.currentVideo.image} 
        controls
        className="brainFlix__video-content"
        >
        </video>
    </div>
    )
}

export default VideoMain;