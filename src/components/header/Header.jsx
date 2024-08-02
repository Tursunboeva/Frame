import '../header/Header.css';
import logo from '../../images/logo.svg';
import arrow from '../../images/arrow-down.svg';
import search from '../../images/search-normal.svg';
import bag from '../../images/bag.svg';
import login from '../../images/login.svg';

function Header ()  {
  return (
    <header>
      <div className="container">
        <div className="header_wrapper">
          <img src={logo} alt="" />
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Menu <img src={arrow} alt="" /></a></li>
            <li><a href="#">Help</a></li>
          </ul>
          <ul className='ul'>
            <li>
                <a href="">
                   <img src={search} alt="" />
                </a>
            </li>
            <li>
                <a href="">
                   <img src={bag} alt="" />
                </a>
            </li>
            <li>
                <a href="">
                   <button className='header_btn'>
                    <img src={login} alt="" />Login
                   </button>
                </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header