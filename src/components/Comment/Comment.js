import './Comment.scss'
import userIcon from '../../assets/images/greyBackground.jpg'


function Comment (props) {
    return(
        <>
            <div class="new-comment">
                <div>
                    <img src={userIcon} alt="No User Icon" class="new-comment__userIcon" />
                </div>
                <div>
                    <div class="new-comment__userdetails">
                        <h3 class="new-comment__sub-heading">{props.userName}</h3>
                        <h3 class="new-comment__date">{props.date}</h3>
                    </div>
                    <div>
                        <p class="new-comment__content">{props.comment}</p>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Comment;