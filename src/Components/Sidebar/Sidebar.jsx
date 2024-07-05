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

  // const toggleDropdown = (key) => {
  //   setDropdownState((prevState) => ({
  //     ...prevState,
  //     [key]: !prevState[key],
  //   }));
  // };

  const toggleDropdown = (key) => {
    setDropdownState((prevState) => {
      const newState = { ...prevState, [key]: !prevState[key] };
      Object.keys(newState).forEach(k => {
        if (k !== key) newState[k] = false;
      });
      return newState;
    });
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
              <span className='menu'>Dashboard</span>
            </li>

            {/* Product Dropdown */}
            <li onClick={() => toggleDropdown('products')}>
              <PersonOutlineIcon className="icon" />
              <span className='menu'>Products</span>
              {dropdownState.products ? <KeyboardArrowDownIcon className="dropdown-icon" /> : <KeyboardArrowRightIcon className="dropdown-icon" />}
            </li>
            {dropdownState.products && (
              <div className="dropdown-div">
                <ul className="dropdown">
                  <li><span>New Product</span></li>
                  <li><span>Manage Product</span></li>
                  <li><span>Product Reports</span></li>
                </ul>
              </div>
            )}

            {/* Customers Dropdown */}
            <li onClick={() => toggleDropdown('customers')}>
              <StoreIcon className="icon" />
              <span className='menu'>Customers</span>
              {dropdownState.customers ? <KeyboardArrowDownIcon className="dropdown-icon" /> : <KeyboardArrowRightIcon className="dropdown-icon" />}
            </li>
            {dropdownState.customers && (
              <div className="dropdown-div">
                <ul className="dropdown">
                  <li><span>New Customers</span></li>
                  <li><span>Manage Customers</span></li>
                  <li><span>Customers Reports</span></li>
                  <li><span>Customers Settings</span></li>
                </ul>
              </div>
            )}

            {/* Income Dropdown */}
            <li onClick={() => toggleDropdown('income')}>
              <CreditCardIcon className="icon" />
              <span className='menu'>Income</span>
              {dropdownState.income ? <KeyboardArrowDownIcon className="dropdown-icon" /> : <KeyboardArrowRightIcon className="dropdown-icon" />}
            </li>
            {dropdownState.income && (
              <div className="dropdown-div">
                <ul className="dropdown">
                  <li><span>Expenses</span></li>
                  <li><span>In-flow</span></li>
                </ul>
              </div>
            )}

            {/* Promote Dropdown */}
            <li onClick={() => toggleDropdown('promote')}>
              <SettingsSuggestIcon className="icon" />
              <span className='menu'>Promote</span>
              {dropdownState.promote ? <KeyboardArrowDownIcon className="dropdown-icon" /> : <KeyboardArrowRightIcon className="dropdown-icon" />}
            </li>
            {dropdownState.promote && (
              <div className="dropdown-div">
                <ul className="dropdown">
                  <li><span>Promote sales</span></li>
                  <li><span>Promote brand</span></li>
                </ul>
              </div>
            )}

            {/* Help Dropdown */}
            <li onClick={() => toggleDropdown('help')}>
              <LiveHelpIcon className="icon" />
              <span className='menu'>Help</span>
              {dropdownState.help ? <KeyboardArrowDownIcon className="dropdown-icon" /> : <KeyboardArrowRightIcon className="dropdown-icon" />}
            </li>
            {dropdownState.help && (
              <div className="dropdown-div">
                <ul className="dropdown">
                  <li><span>Send Message</span></li>
                  <li><span>Request a Call</span></li>
                </ul>
              </div>
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
            {dropdownState.user ? <KeyboardArrowDownIcon className="dropdown-icon" /> : <KeyboardArrowRightIcon className="dropdown-icon" />}
          </li>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
