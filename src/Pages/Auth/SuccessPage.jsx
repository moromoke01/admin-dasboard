import React from 'react'
import man from '../../assets/excited-man.png'
import './SuccessPage.scss';
import {Link} from 'react-router-dom';

const SuccessPage = () => {

    
  return (
    <div className='success-page'>
      <div className='img-div'>
        <img src={man} alt="excited-man" />
      </div>

      <div  className='success-text'>
        <h1>You are successfully regisered!</h1>
        <button>
        <Link to='/login' className='tab-link'>
             <span>Go to Login</span>
        </Link>
        </button>
        
      </div>
    </div>
  )
}

export default SuccessPage
