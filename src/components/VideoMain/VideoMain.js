import './VideoMain.scss'




function VideoMain (props) {
    return(
    <>
        <video 
        poster={props.currentVideo.image} 
        controls
        width="100%"
        height="40%"
        className="brainflix__video">
        </video>
    </>
    )
}

export default VideoMain;