import './index.scss'
import { Link, NavLink } from 'react-router-dom';
import mkLogo from '../../assets/images/mkLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faX } from '@fortawesome/free-solid-svg-icons';
import { faGit, faGithub, faLinkedin, faTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link to='/'>
            <img className='logo' src={mkLogo} alt='Logo' />
        </Link>
        <nav>
            <NavLink exact="true" activeClassName="active" className="NavLinkHome" to='/'>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"  />
            </NavLink>
            <NavLink exact="true" activeClassName="active" className="NavLinkAbout" to='/about'>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"  />
            </NavLink>
            <NavLink exact="true" activeClassName="active" to='/contact' className="NavLinkContact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"  />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a href='https://www.linkedin.com/in/michael-koch-6378831a2/' target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"  />
                </a>
            </li>
            <li>
                <a href='https://twitter.com/MichaelKochDev' target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faXTwitter} color="#4d4d4e"  />
                </a>
            </li>
            <li>
                <a href='https://github.com/mikekochh' target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"  />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar