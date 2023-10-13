import './UploadForm.scss';
import videoThumbnail from '../../assets/images/Upload-video-preview.jpg';
import publishIcon from '../../assets/icons/publish.svg';

function UploadForm () {
    return (
        <div>
            <hr className="uploadForm__topHR"/>
            <h1 className="uploadForm__heading">Upload Video</h1>
            <form>
                <div>
                    <h4>VIDEO THUMBNAIL</h4>
                    <img src={videoThumbnail} alt="thumbnail"/>
                </div>
                <div>
                    <div>
                        <h4>TITLE YOUR VIDEO</h4>
                        <textarea id="videoTitle" name="videoTitle" placeholder="Add a title to your video"></textarea>
                    </div>
                    <div>
                        <h4>ADD A VIDEO DESCRIPTION</h4>
                        <textarea id="videoDesc" name="videoDesc" placeholder="Add a description to your video"></textarea>
                    </div>
                </div>
                <div>
                    <button className="uploadForm__publish-button"><img src={publishIcon} alt="Publish Logo" className="uploadForm__publish-image"/>PUBLISH</button>
                    <h4>CANCEL</h4>
                </div>
            </form>
        </div>
    )
}

export default UploadForm