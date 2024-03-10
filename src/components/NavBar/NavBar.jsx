import LogoImage from '../../assets/Logo/BrainFlix-logo.svg';
import { ProfilePic } from '../Modules/ProfilePic/ProfilePic';
import { Button } from '../Modules/Button/Button';
import './NavBar.scss'


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

          <div className="nav-bar__cont__profile-pic">
          <ProfilePic hasImage={true}/>
          </div>

          <Button isUpload={true}/>
          
  
        </nav>
  </header>
)
};
