import './Comment.scss'
import userIcon from '../../assets/images/greyBackground.jpg'


function Comment (props) {
    const mediaQuery = window.matchMedia('(min-width: 1280px)')
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
            {mediaQuery.matches && (props.index === props.number)?<></>:<hr />}
        </>
    )
}

export default Comment;