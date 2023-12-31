import './Header.scss'
import logo from '../../assets/logo/BrainFlix-logo.svg'
import userIcon from '../../assets/images/Mohan-muruge.jpg'
import uploadIcon from '../../assets/icons/upload.svg'
import {NavLink} from 'react-router-dom';


function Header () {
    return(
        <div>
            <header className="header">
                <div>
                    <NavLink to="/"><img src={logo} alt="BrainFlix Logo" className="header__logo"/></NavLink>
                </div>
                <div className="header__form">
                    <form>
                        <input type="text" placeholder="Search" name="search" className="header__searchBar"/>
                    </form>
                    <img className="header__userIcon display-mobile" src={userIcon} alt="mohanMuruge icon"/>
                </div>
                <div className="header__upload">
                <NavLink to="/upload"><button className="header__upload-button"><img src={uploadIcon} alt="Upload Logo" className="header__upload-image"/>UPLOAD</button></NavLink>
                    <img className="header__userIcon display-tablet" src={userIcon} alt="mohanMuruge icon"/>
                </div>
            </header>
            <hr className={window.location.href.includes('upload')?"header__uploadPage-displaybar":"header__uploadPage-hidebar"}/>
        </div>
    )
}

export default Header;