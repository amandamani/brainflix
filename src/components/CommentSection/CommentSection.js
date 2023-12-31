import './CommentSection.scss'
import commentIcon from '../../assets/icons/add_comment.svg'
import userIcon from '../../assets/images/Mohan-muruge.jpg'
import Comment from '../Comment/Comment'


function CommentSection (props) {
    const comments = props.currentVideo.comments;
    return(
        <section className="comment-section">
            <h4 className="comment-section__title">{comments.length} Comments</h4>
            <form id="comment-section__form" className="comment-section__form">
                <div>
                    <img className="comment-section__userIcon" src={userIcon} alt="mohanMuruge icon" />
                </div>
                <div className="comment-section__add">
                    <h5 className="comment-section__heading">JOIN THE CONVERSATION</h5>
                    <textarea id="userComment" name="userComment" placeholder=" Add a new comment" className="comment-section__input"></textarea>
                    <button type="submit" className="comment-section__button display-mobile"><img src={commentIcon} alt="commentIcon" className="comment-section__image"/>COMMENT</button>
                </div>
                <div>
                    <button type="submit" className="comment-section__button display-tablet"><img src={commentIcon} alt="commentIcon" className="comment-section__image"/>COMMENT</button>
                </div>
            </form>
            <div id="comment-section">
            </div>
            <hr />
            {
                comments.map( (comment, index) => {
                    return(
                    <Comment
                        key = {comment.id}
                        userName = {comment.name}
                        date = {props.dynamicTimeString(comment.timestamp)}
                        comment = {comment.comment}
                        index = {index}
                        number = {comments.length - 1}
                    />
                )})
            }
        </section>
    )
}

export default CommentSection;