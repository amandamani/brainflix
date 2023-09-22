import './CommentSection.scss'
import commentIcon from '../../assets/icons/add_comment.svg'
import userIcon from '../../assets/images/Mohan-muruge.jpg'
import Comment from '../Comment/Comment'
import {v4 as uuid} from 'uuid'

const comments = [
    {
        userName: "Micheal Lyons",
        date: "08/09/2021",
        comment: "They BLEW the ROOF off at their last event, once everyone started figuringout they were going. This is still simplythe greatest opening of an event I have EVER witnessed.",
        id: uuid()
    },
    {
        userName: "Gary Wong",
        date: "07/15/2021",
        comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        id: uuid()
    },
    {
        userName: "Theodore Duncan",
        date: "07/11/2021",
        comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
        id: uuid()
    }
]

function CommentSection (props) {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
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
                        userName = {comment.userName}
                        date = {comment.date}
                        comment = {comment.comment}
                    />
                )})
            }
        </section>
    )
}

export default CommentSection;