import LogoImage from '../../assets/Logo/BrainFlix-logo.svg';
import { ProfilePic } from '../Modules/ProfilePic/ProfilePic';
import { Button } from '../Modules/Button/Button';
import './NavBar.scss'


export function NavBar() {

return ( <header>
      
        <nav className="nav-bar">
          
          <div className="nav-bar__cont__logo">
            <a href="#"><img className="nav-bar__logo" src={LogoImage} alt='BrainFlix Logo'/></a>
          </div>
  
          <div className="nav-bar__cont__search">
            <form className="nav-bar__search__form">
              <input className="nav-bar__search-box" placeholder='Search'/>
            </form>
          </div>

          <div className="nav-bar__cont__profile-pic">
          <ProfilePic hasImage={true}/>
          </div>

          <div className='nav-bar__cont__button'>
            <Button isUpload={true}/>
            </div>
          
  
        </nav>
  </header>
)
};
