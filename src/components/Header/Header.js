import './Header.scss'
import logo from '../../assets/logo/BrainFlix-logo.svg'
import userIcon from '../../assets/images/Mohan-muruge.jpg'
import uploadIcon from '../../assets/icons/upload.svg'


function Header () {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    return(
        <header>
            <div>
                <img src={logo} alt="BrainFlix Logo"/>
            </div>
            <div>
                <form action="/action_page.php">
                    <input type="text" placeholder="Search.." name="search"/>
                </form>
                {!mediaQuery.matches?<img className="placeholder" src={userIcon} alt="mohanMuruge icon"/>:<></>}
            </div>
            <div>
                <button>
                    <img src={uploadIcon} alt="uploadLogo"/>
                    <span>UPLOAD</span>
                </button>
                {mediaQuery.matches?<img className="placeholder" src={userIcon} alt="mohanMuruge icon"/>:<></>}
            </div>
        </header>
    )
}

export default Header;