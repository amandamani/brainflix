import './UploadForm.scss';
import videoThumbnail from '../../assets/images/Upload-video-preview.jpg';
import publishIcon from '../../assets/icons/publish.svg';
import { useNavigate } from 'react-router-dom';

function UploadForm () {
    let navigate = useNavigate();
    const submitHandler = (event) =>{
        alert(`Your video with title : ${event.target.videoTitle.value} and description: ${event.target.videoDesc.value} has been uploaded. Reverting to homepage.`);
        navigate("/")
    }
    
    return (
        <section className="uploadForm">
            <h1 className="uploadForm__heading">Upload Video</h1>
            <hr className="uploadForm__desktopDisplay"/>
            <form onSubmit={submitHandler}>
                <div className="uploadForm__videoDetails">
                    <div>
                        <h4 className="uploadForm__subHeading">VIDEO THUMBNAIL</h4>
                        <img src={videoThumbnail} alt="thumbnail" className="uploadForm__thumbnail"/>
                    </div>
                    <div>
                        <div>
                            <h4 className="uploadForm__subHeading">TITLE YOUR VIDEO</h4>
                            <textarea id="videoTitle" name="videoTitle" placeholder="Add a title to your video" className="uploadForm__input"></textarea>
                        </div>
                        <div>
                            <h4 className="uploadForm__subHeading">ADD A VIDEO DESCRIPTION</h4>
                            <textarea id="videoDesc" name="videoDesc" placeholder="Add a description to your video" className="uploadForm__input uploadForm__desc"></textarea>
                        </div>
                    </div>
                </div>
                <hr className="uploadForm__desktopDisplay"/>
                <div className="uploadForm__publish">
                    <button className="uploadForm__publish-button"><img src={publishIcon} alt="Publish Logo" className="uploadForm__publish-image"/>PUBLISH</button>
                    <h4 className="uploadForm__publish-cancel">CANCEL</h4>
                </div>
            </form>
        </section>
    )
}

export default UploadForm