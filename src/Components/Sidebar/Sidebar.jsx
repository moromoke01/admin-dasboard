import React, { useState } from 'react';
import "./Sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import TokenIcon from '@mui/icons-material/Token';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import user from '../../assets/jane.jpg'


const Sidebar = () => {
  const [dropdownState, setDropdownState] = useState({
    
    products:false,
    customers: false,
    Income:false,
    Promote: false,
    Help: false
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

 const toggleDropdown = (key) =>{
  setDropdownState(prevState => ({
    ...prevState,
    [key]: !prevState[key]
  }));
 };


   const toggleSidebar = () =>{
    setSidebarOpen(!sidebarOpen);
   }

  return (
    <>
      {/* <MenuIcon className='menu-icon' onClick={toggleSidebar} />
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}> */}
      {sidebarOpen ? (
        <CloseIcon className='menu-icon' onClick={toggleSidebar} />) : (
          <MenuIcon className='menu-icon' onClick={toggleSidebar} />
        )}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}> 
      <div className='top'>
        <span className='logo'>
          <TokenIcon />
        </span>
        <span className='logo-content'>Dashboard</span>
      </div>
      {/* <hr/> */}
      <div className='centre'>
        <ul>
          <li>
            <DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>

          {/*Users Dropdown */}

          <li onClick={() => toggleDropdown('Product')}>
            <PersonOutlineIcon className="icon"/>
            <span>Product</span>
            <KeyboardArrowRightIcon className="dropdown-icon"/>
          </li>
          {dropdownState.users && (
            <ul className="dropdown">
              <li><span>New Product</span></li>
              <li><span>Manage Product</span></li>
              <li><span>Product Reports</span></li>
            </ul>
          )}

          {/* Products Dropdown */}
          <li onClick={()=> toggleDropdown('Customers')}>
            <StoreIcon className="icon"/>
            <span>Customers</span>
            <KeyboardArrowRightIcon className="dropdown-icon" />
          </li>
          {dropdownState.products && (
            <ul className='dropdown'>
              <li><span>New Customers</span></li>
              <li><span>Manage Customers</span></li>
              <li><span>Customers Reports</span></li>
              <li><span>Customers Settings</span></li>
            </ul>
          )}


          {/* Income dropdown */}
          <li onClick={()=> toggleDropdown('Income')}>
            <CreditCardIcon className="icon"/>
            <span>Income</span>
            <KeyboardArrowRightIcon className='dropdown-icon'/>
          </li>
          {dropdownState.orders && (
            <ul className='dropdown'>
              <li><span>Expenses</span></li>
              <li><span>In-flow</span></li>
             
            </ul>
          )}

            {/* Promote dropdown */}
            <li onClick={()=> toggleDropdown('Promote')}>
            <SettingsSuggestIcon className="icon"/>
            <span>Promote</span>
            <KeyboardArrowRightIcon className='dropdown-icon'/>
          </li>
          {dropdownState.orders && (
            <ul className='dropdown'>
              <li><span>Promote sales</span></li>
              <li><span>Promote brand</span></li>
             
            </ul>
          )}

          {/* Help dropdown */}
            <li onClick={()=> toggleDropdown('Help')}>
            <LiveHelpIcon className="icon"/>
            <span>Help</span>
            <KeyboardArrowRightIcon className='dropdown-icon'/>
          </li>
          {dropdownState.orders && (
            <ul className='dropdown'>
              <li><span>Send Message</span></li>
              <li><span>Request a Call</span></li>
             
            </ul>
          )}

          
        </ul>
      </div>
      <div className='bottom'>
        <div className='bottom-ad'>
          <p>Upgrade to PRO to get access all Features!</p>
          <button><b>Get Pro Now!</b></button>
        </div>

       {/* user dropdown */}
       <li onClick={()=> toggleDropdown('user')}>
            <img src={user} alt="user" className='user' />
           <span>
              <h4>Evano</h4>
              <p>Project Manager</p>
            </span> 
            <KeyboardArrowDownIcon className='dropdown-icon'/>
          </li>
          
      </div>
    </div>
    </>
  )
}

export default Sidebar;
