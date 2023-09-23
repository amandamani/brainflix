import './VideoMain.scss'




function VideoMain (props) {
    return(
    <>
        <video 
        poster={props.currentVideo.image} 
        width="100%" height="40%" controls 
        className="brainflix__video">
        </video>
    </>
    )
}

export default VideoMain;