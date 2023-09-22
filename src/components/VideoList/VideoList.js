import './VideoList.scss'
import videolist from '../../data/videos.json'
import Video from '../Video/Video'



function VideoList () {
    console.log(videolist)
    return(
        <section className="video-list">
            <h4 className="video-list__title">NEXT VIDEOS</h4>
            { videolist.map(video =>{
                return(
                    <Video
                        key={video.id}
                        id = {video.id}
                        title={video.title}
                        image={video.image}
                        channel={video.channel}
                    />
                )
            })}
        </section>
    )
}
export default VideoList;