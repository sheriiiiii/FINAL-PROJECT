import '../styles/PageHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export function PageHeader() {
  return (
    <header className="header">
      <div className="header-left">
        <button>
          <img src="./src/components/images/LOGO.jpg" alt="Left Image" className="left-image" />
        </button>
      </div>
      <div className="header-spacer"></div>
      <div className="header-right">
        <button className="logout-button">
          <FontAwesomeIcon icon={faSignOutAlt} className="logout-icon" />
          <span className="logout-text">Logout</span>
        </button>
      </div>
    </header>
  );
}
