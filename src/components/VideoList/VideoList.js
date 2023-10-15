import './VideoList.scss'
import videolist from '../../data/videos.json'
import Video from '../Video/Video'
import { NavLink } from 'react-router-dom'



function VideoList (props) {
    return(
        <section className="video-list">
            <h4 className="video-list__title">NEXT VIDEOS</h4>
            { props.allVideos.filter(video => video.id !== props.activeVideo).map(video =>{
                return(
                    <NavLink to={"/video/"+ video.id} key={video.id}><Video
                        key={video.id}
                        id = {video.id}
                        title={video.title}
                        image={video.image}
                        channel={video.channel}
                        activeVideo = {props.activeVideo}
                    /></NavLink>
                )
            })}
        </section>
    )
}
export default VideoList;