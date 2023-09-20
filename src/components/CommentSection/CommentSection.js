import './CommentSection.scss'
import commentIcon from '../../assets/icons/add_comment.svg'
import userIcon from '../../assets/images/Mohan-muruge.jpg'



function CommentSection (props) {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    return(
        <section className="comment-section">
            <h4 className="comment-section__title">{props.numberOfComments} Comments</h4>
            <form id="comment-section__form" className="comment-section__form">
                <div>
                    <img className="comment-section__userIcon" src={userIcon} alt="mohanMuruge icon" />
                </div>
                <div className="comment-section__add">
                    <h5 className="comment-section__heading">JOIN THE CONVERSATION</h5>
                    <textarea id="userComment" name="userComment" placeholder=" Add a new comment" className="comment-section__input"></textarea>
                    <button type="submit" className="comment-section__button"><img src={commentIcon} alt="commentIcon" className="comment-section__image"/>COMMENT</button>
                </div>
            </form>
            <div id="comment-section">
            </div>
            <hr />
            {/* <Comment
                id=""
            /> */}
        </section>
    )
}

export default CommentSection;