import React, { useState, useEffect, useContext } from 'react';
import './Auth.scss';
import AppleIcon from '@mui/icons-material/Apple';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import googleIcon from "../../assets/google-logo.png"
import facebookIcon from "../../assets/facebook-icon.png"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData) {
      setEmail(savedFormData.step1.email);
      setPassword(savedFormData.step1.password);
    }
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      alert('Login successful');
      navigate('/Home');

    } catch (error) {
      setError(error.message);
      alert('Login failed');
    }
  };

  return (
    <div className='Auth-page'>
      <div className='Auth'>
        <div className='Auth-head'>
          <Link to='/signup' className='tab-link'>
            <span>Register</span>
          </Link>
          <span className='active'>Login</span>
        </div>
        <div className='icons'>
        <span className='auth-head-icons'> <AppleIcon /></span>
          <span className='auth-head-icons-fb'>
            <img src={facebookIcon} alt="facebook-icon" />
             {/* <FacebookIcon /> */}
          </span>
         
          {/* <GoogleIcon /> */}
          <span className='auth-head-icons'>
          <img src={googleIcon} alt="googleIcon" />
          </span>
        </div>
        <p className='auth-text'>or login with email</p>

        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <p>Email Address</p>
            <input
              type='email'
              value={email}
              onChange={handleEmailChange}
              className='input-field'
            />
          </div>

          <div>
            <div className='form-group'>
              <p>Password</p>
              <input
                type='password'
                value={password}
                onChange={handleChangePassword}
                className='input-field'
              />
            </div>
            <span className='password-hint'>8+ characters</span>
          </div>

          <button type='submit' className='submit-button'>Login to Dashboard</button>
          <p className='promo-text'>
            <input type='checkbox' className='promo-checkbox' /> Remember me
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
