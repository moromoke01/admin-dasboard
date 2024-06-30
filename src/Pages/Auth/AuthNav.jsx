import React from 'react';

const AuthNav = ({ activeTab, setActiveTab }) => {
  return (
    <div className='Auth-head'>
      <span
        className={activeTab === 'register' ? 'active' : ''}
        onClick={() => setActiveTab('register')}
      >
        Register
      </span>
      <span
        className={activeTab === 'login' ? 'active' : ''}
        onClick={() => setActiveTab('login')}
      >
        Login
      </span>
    </div>
  );
};

export default AuthNav;
