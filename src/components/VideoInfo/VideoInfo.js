import './VideoInfo.scss'
import viewLogo from '../../assets/icons/views.svg'
import likeLogo from '../../assets/icons/likes.svg'

function VideoInfo (props) {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    return(
    <section>
        <h1 className="videoInfo__title">{props.currentVideo.title}</h1>
        {mediaQuery.matches?<></>:<hr></hr>}
        <div className="videoInfo__stats">
            <div className="videoInfo__content">
                <h4 className="videoInfo__creator">By {props.currentVideo.channel}</h4>
                <p className="videoInfo__date">{props.dynamicTimeString(props.currentVideo.timestamp)}</p>
            </div>
            <div className="videoInfo__content">
                <div className="videoInfo__numbers">
                    <img src={viewLogo} alt="viewLogo" />
                    <span> {props.currentVideo.views}</span>
                </div>
                <div className="videoInfo__numbers">
                    <img src={likeLogo} alt="likeLogo" />
                    <span> {props.currentVideo.likes}</span>
                </div>
            </div>
        </div>
        <hr></hr>
        <p className="videoInfo__desc">{props.currentVideo.description}</p>
    </section>
)}

export default VideoInfo;