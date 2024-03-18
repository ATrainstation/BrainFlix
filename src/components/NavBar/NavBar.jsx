import './NavBar.scss'
import LogoImage from '../../assets/Logo/BrainFlix-logo.svg';
import { ProfilePic } from '../Modules/ProfilePic/ProfilePic';
import { Button } from '../Modules/Button/Button';
import { NavLink } from "react-router-dom";

const name ="upload"

export function NavBar() {
return ( <header>
      
        <nav className="nav-bar">
          
          <div className="nav-bar__cont__logo">
            <NavLink to="/"><img className="nav-bar__logo" src={LogoImage} alt='BrainFlix Logo'/></NavLink>
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
            <NavLink to='/Upload'>
              <Button name={name} />
              </NavLink>
            </div>
          
  
        </nav>
  </header>
)
};
