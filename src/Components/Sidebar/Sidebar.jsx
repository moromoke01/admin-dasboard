import React, { useState } from 'react';
import './Sidebar.scss';
import {
  Dashboard as DashboardIcon,
  PersonOutline as PersonOutlineIcon,
  Store as StoreIcon,
  CreditCard as CreditCardIcon,
  Token as TokenIcon,
  SettingsSuggest as SettingsSuggestIcon,
  LiveHelp as LiveHelpIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import user from '../../assets/jane.jpg';

const Sidebar = () => {
  const [dropdownState, setDropdownState] = useState({
    products: false,
    customers: false,
    income: false,
    promote: false,
    help: false,
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDropdown = (key) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="menu-icon" onClick={toggleSidebar}>
        {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="top">
          <span className="logo">
            <TokenIcon />
          </span>
          <span className="logo-content">Dashboard</span>
        </div>
        <div className="centre">
          <ul>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>

            {/* Product Dropdown */}
            <li onClick={() => toggleDropdown('products')}>
              <PersonOutlineIcon className="icon" />
              <span>Products</span>
              <KeyboardArrowRightIcon className="dropdown-icon" />
            </li>
            {dropdownState.products && (
              <ul className="dropdown">
                <li><span>New Product</span></li>
                <li><span>Manage Product</span></li>
                <li><span>Product Reports</span></li>
              </ul>
            )}

            {/* Customers Dropdown */}
            <li onClick={() => toggleDropdown('customers')}>
              <StoreIcon className="icon" />
              <span>Customers</span>
              <KeyboardArrowRightIcon className="dropdown-icon" />
            </li>
            {dropdownState.customers && (
              <ul className="dropdown">
                <li><span>New Customers</span></li>
                <li><span>Manage Customers</span></li>
                <li><span>Customers Reports</span></li>
                <li><span>Customers Settings</span></li>
              </ul>
            )}

            {/* Income Dropdown */}
            <li onClick={() => toggleDropdown('income')}>
              <CreditCardIcon className="icon" />
              <span>Income</span>
              <KeyboardArrowRightIcon className="dropdown-icon" />
            </li>
            {dropdownState.income && (
              <ul className="dropdown">
                <li><span>Expenses</span></li>
                <li><span>In-flow</span></li>
              </ul>
            )}

            {/* Promote Dropdown */}
            <li onClick={() => toggleDropdown('promote')}>
              <SettingsSuggestIcon className="icon" />
              <span>Promote</span>
              <KeyboardArrowRightIcon className="dropdown-icon" />
            </li>
            {dropdownState.promote && (
              <ul className="dropdown">
                <li><span>Promote sales</span></li>
                <li><span>Promote brand</span></li>
              </ul>
            )}

            {/* Help Dropdown */}
            <li onClick={() => toggleDropdown('help')}>
              <LiveHelpIcon className="icon" />
              <span>Help</span>
              <KeyboardArrowRightIcon className="dropdown-icon" />
            </li>
            {dropdownState.help && (
              <ul className="dropdown">
                <li><span>Send Message</span></li>
                <li><span>Request a Call</span></li>
              </ul>
            )}
          </ul>
        </div>
        <div className="bottom">
          <div className="bottom-ad">
            <p>Upgrade to PRO to get access all Features!</p>
            <button><b>Get Pro Now!</b></button>
          </div>

          {/* User Dropdown */}
          <li onClick={() => toggleDropdown('user')}>
            <img src={user} alt="user" className="user" />
            <span>
              <h4>Evano</h4>
              <p>Project Manager</p>
            </span>
            <KeyboardArrowDownIcon className="dropdown-icon" />
          </li>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
