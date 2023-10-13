import './UploadForm.scss';
import videoThumbnail from '../../assets/images/Upload-video-preview.jpg';
import publishIcon from '../../assets/icons/publish.svg';

function UploadForm () {
    return (
        <section className="uploadFrom">
            <hr className="uploadForm__topHR"/>
            <h1 className="uploadForm__heading">Upload Video</h1>
            <form>
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
                <div className="uploadForm__publish">
                    <button className="uploadForm__publish-button"><img src={publishIcon} alt="Publish Logo" className="uploadForm__publish-image"/>PUBLISH</button>
                    <h4 className="uploadForm__publish-cancel">CANCEL</h4>
                </div>
            </form>
        </section>
    )
}

export default UploadForm