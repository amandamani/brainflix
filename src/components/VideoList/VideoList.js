import './VideoList.scss'
import videolist from '../../data/videos.json'
import Video from '../Video/Video'



function VideoList (props) {
    return(
        <section className="video-list">
            <h4 className="video-list__title">NEXT VIDEOS</h4>
            { videolist.filter(video => video.id !== props.activeVideo).map(video =>{
                return(
                    <Video
                        key={video.id}
                        id = {video.id}
                        title={video.title}
                        image={video.image}
                        channel={video.channel}
                        activeVideo = {props.activeVideo}
                        changeActiveVideo = {props.changeActiveVideo}
                    />
                )
            })}
        </section>
    )
}
export default VideoList;