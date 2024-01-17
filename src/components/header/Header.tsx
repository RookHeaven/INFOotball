import Button from "../button/Button.tsx";
import './header.scss';
import logo from '../../assets/svg/logo.svg';

function Header() {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__logo'>
          <a href='#'>
            <img src={logo} alt="logo INFOotball" width='36' height='36'/>
          </a>
          <div>
            <h1>INFOotball</h1>
            <p>football club information app</p>
          </div>
        </div>
        <Button/>
      </div>
    </div>
  )
}

export default Header;
