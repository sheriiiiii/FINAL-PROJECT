import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCreditCard, faMobileAlt, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const RetailerSidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <Link to="/retailer-homepage" className="sidebar-link">
        <FontAwesomeIcon icon={faHome} className="sidebar-icon" />
        <span className="sidebar-text">Home</span>
      </Link>
      <Link to="/pay-credit-balance" className="sidebar-link">
        <FontAwesomeIcon icon={faCreditCard} className="sidebar-icon" />
        <span className="sidebar-text">Pay Credit Balance</span>
      </Link>
      <Link to="/manage-imsi-credits" className="sidebar-link">
        <FontAwesomeIcon icon={faMobileAlt} className="sidebar-icon" />
        <span className="sidebar-text">Manage IMSI Credits</span>
      </Link>
      <Link to="/application-request" className="sidebar-link">
        <FontAwesomeIcon icon={faFileAlt} className="sidebar-icon" />
        <span className="sidebar-text">Application Request</span>
      </Link>
      <Link to="/edit-profile" className="sidebar-link">
        <FontAwesomeIcon icon={faUser} className="sidebar-icon" />
        <span className="sidebar-text">Edit Profile</span>
      </Link>
    </div>
  );
};

export default RetailerSidebar;
