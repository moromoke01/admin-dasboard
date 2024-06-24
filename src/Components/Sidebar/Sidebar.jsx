import React, { useState } from 'react';
import "./Sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import InsertChartIcon from '@mui/icons-material/InsertChart';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Sidebar = () => {
  const [dropdownState, setDropdownState] = useState({
    
    products:false,
    customers: false,
    Income:false,
    Promote: false
  });

 const toggleDropdown = (key) =>{
  setDropdownState(prevState => ({
    ...prevState,
    [key]: !prevState[key]
  }));
 };

  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>Dashboard</span>
      </div>
      <hr/>
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
            <ArrowDropDownIcon className="dropdown-icon"/>
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
            <ArrowDropDownIcon className="dropdown-icon" />
          </li>
          {dropdownState.products && (
            <ul className='dropdown'>
              <li><span>New Customers</span></li>
              <li><span>Manage Customers</span></li>
              <li><span>Customers Reports</span></li>
              <li><span>Customers Settings</span></li>
            </ul>
          )}


          {/* Orders dropdown */}
          <li onClick={()=> toggleDropdown('Income')}>
            <CreditCardIcon className="icon"/>
            <span>Income</span>
            <ArrowDropDownIcon className='dropdown-icon'/>
          </li>
          {dropdownState.orders && (
            <ul className='dropdown'>
              <li><span>Expenses</span></li>
              <li><span>In-flow</span></li>
             
            </ul>
          )}

{/* Promote dropdown */}
<li onClick={()=> toggleDropdown('Promote')}>
            <CreditCardIcon className="icon"/>
            <span>Promote</span>
            <ArrowDropDownIcon className='dropdown-icon'/>
          </li>
          {dropdownState.orders && (
            <ul className='dropdown'>
              <li><span>Promote sales</span></li>
              <li><span>Promote brand</span></li>
             
            </ul>
          )}


          {/* <li>
            <LocalShippingIcon className="icon"/>
            <span>Delivery</span>
          </li>
          <li>
            <InsertChartIcon className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon"/>
            <span>Notifications</span>
          </li>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon"/>
            <span>System Health</span>
          </li> */}
        </ul>
      </div>
      <div className='bottom'>
        Color Option
      </div>
    </div>
  )
}

export default Sidebar;
