import './Video.scss'

function Video (props) {
    return(
    <div className="video">
        <div>
            <img src={props.image} alt={props.title} className="video__image"/>
        </div>
        <div className="video__content">
            <h5 className="video__title">{props.title}</h5>
            <p className="video__channel">{props.channel}</p>
        </div>
    </div>
    )
}

export default Video;