import './CommentSection.scss'
import commentIcon from '../../assets/icons/add_comment.svg'
import userIcon from '../../assets/images/Mohan-muruge.jpg'
import Comment from '../Comment/Comment'


function CommentSection (props) {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const comments = props.comments;
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
                    {!mediaQuery.matches?<button type="submit" className="comment-section__button"><img src={commentIcon} alt="commentIcon" className="comment-section__image"/>COMMENT</button>:<></>}
                </div>
                <div>
                {mediaQuery.matches?<button type="submit" className="comment-section__button"><img src={commentIcon} alt="commentIcon" className="comment-section__image"/>COMMENT</button>:<></>}
                </div>
            </form>
            <div id="comment-section">
            </div>
            <hr />
            {
                comments.map( comment => {
                    return(
                    <Comment
                        key = {comment.id}
                        userName = {comment.name}
                        date = {new Intl.DateTimeFormat('en-US', {day: "2-digit", month: "2-digit", year:"numeric"}).format(comment.timestamp)}
                        comment = {comment.comment}
                    />
                )})
            }
        </section>
    )
}

export default CommentSection;