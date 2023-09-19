import './VideoInfo.scss'
import viewLogo from '../../assets/icons/views.svg'
import likeLogo from '../../assets/icons/likes.svg'


function VideoInfo (props) {
    // const mediaQuery = window.matchMedia('(min-width: 768px)')
    return(
    <section>
        <h1 className="videoInfo__title">{props.videoTitle}</h1>
        <hr></hr>
        <div className="videoInfo__stats">
            <div className="videoInfo__content">
                <h4 className="videoInfo__creator">By {props.videoCreator}</h4>
                <p className="videoInfo__date">{props.videoDate}</p>
            </div>
            <div className="videoInfo__content">
                <div className="videoInfo__numbers">
                    <img src={viewLogo} alt="viewLogo" />
                    <span> {props.videoViews}</span>
                </div>
                <div className="videoInfo__numbers">
                    <img src={likeLogo} alt="likeLogo" />
                    <span> {props.videoLikes}</span>
                </div>
            </div>
        </div>
        <hr></hr>
        <p className="videoInfo__desc">{props.videoDesc}</p>
    </section>
)}

export default VideoInfo;