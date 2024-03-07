import LogoImage from '../../assets/Logo/BrainFlix-logo.svg';
import { ProfilePic } from '../ProfilePic/ProfilePic';
import './NavBar.scss'
import { Button } from '../Button/Button';
import uploadIcon from '../../assets/Icons/upload.svg';


export function NavBar() {

return ( <header>
      
        <nav className="nav-bar">
          
          <div className="nav-bar__cont__logo">
            <img className="nav-bar__logo" src= {LogoImage} alt='BrainFlix Logo'/>
          </div>
  
          <div className="nav-bar__cont__search">
            <form className="nav-bar__search__form">
              <input className="nav-bar__search-box" placeholder='Search'/>
            </form>
          </div>
  
          <ProfilePic />
          <Button uploadIcon={uploadIcon}/>
          
  
        </nav>
  </header>
)
};
