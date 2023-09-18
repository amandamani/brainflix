import './Header.scss'
import logo from '../../assets/logo/BrainFlix-logo.svg'
import userIcon from '../../assets/images/Mohan-muruge.jpg'
import uploadIcon from '../../assets/icons/upload.svg'


function Header () {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    return(
        <header className="header">
            <div>
                <img src={logo} alt="BrainFlix Logo" className="header__logo"/>
            </div>
            <div className="header__form">
                <form>
                    <input type="text" placeholder="Search" name="search" className="header__searchBar"/>
                </form>
                {!mediaQuery.matches?<img className="header__userIcon" src={userIcon} alt="mohanMuruge icon"/>:<></>}
            </div>
            <div className="header__upload">
                {mediaQuery.matches?<img className="header__userIcon" src={userIcon} alt="mohanMuruge icon"/>:<></>}
                <img src={uploadIcon} alt="Upload Logo" className="header__upload-image"/>
                <button className="header__upload-button">UPLOAD</button>
            </div>
        </header>
    )
}

export default Header;