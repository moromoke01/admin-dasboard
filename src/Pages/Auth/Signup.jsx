import { useContext, useState, useEffect } from 'react'
import { AuthContext } from './AuthContext';
import { useNavigate , Link} from 'react-router-dom';
import './Auth.scss';
import AppleIcon from '@mui/icons-material/Apple';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import googleIcon from "../../assets/google-logo.png"
import facebookIcon from "../../assets/facebook-icon.png"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Signup = () => {
    const [steps, setSteps] = useState(1);
    const [formData, setFormData] = useState({
        step1: { email: '', password: '' },
        step2: { fullName: '', gender: '', contact: '', birthday: '' },
        step3: {searchAddress: ''},
        step4: { address: '', apartment: '', city: '', state: '', zip: '' }

    });
    const [error, setError] = useState('');
    const { signUp } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const savedFormData = JSON.parse(localStorage.getItem('formData'));
        if (savedFormData) {
            setFormData(savedFormData);
        }
    }, []);

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 8;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData.step1;

        if (!email || !password) {
            setError("All fields are required");
            return;
        }
        if (!validateEmail(email)) {
            setError('Please enter a valid email');
            return;
        }
        if (!validatePassword(password)) {
            setError('Password must be at least 8 characters long');
            return;
        }

        try {
            await signUp(email, password);
            console.log('Form Data:', formData);
            alert('Account created successfully...!');
            navigate('/SuccessPage');

        } catch (error) {
            setError(error.message);
            alert('Account creation failed');
        }
    };

              
    const handleChange = (e) => {
        const { name, value } = e.target;
        const currentStepData = { ...formData[`step${steps}`], [name]: value };
        const newFormData = { ...formData, [`step${steps}`]: currentStepData };
        setFormData(newFormData);
        localStorage.setItem('formData', JSON.stringify(newFormData));
    };

    const handleNextStep = (e) => {
        e.preventDefault();
        if (steps < 4) {
            setSteps(steps + 1);
        } else {
            handleSubmit(e);
        }
    };

    const handleManualAddress = () =>{
        setSteps(4);
    }
    return (
        <div className='Auth-page'>
            <div className='Auth'>
                {steps === 1 && (
                    <>
                        <div className='Auth-head'>
                            <span className='active'>Register</span>

                            <Link to='/login' className='tab-link'>
                              <span>Login</span>
                            </Link>

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
                        <p className='auth-text'>or register with email</p>
                    </>
                )}

                {steps === 2 && (
                    <div className='Auth-head'>
                        <h2>Personal Information  <span className='green-text'>2 of 3</span></h2>
                    </div>
                )}

                {steps === 3 && (
                    <div className='Auth-head'>
                        <h2>Add Address<span className='green-text'>3 of 3</span></h2>
                    </div>
                )}

                {steps === 4 && (
                    <div className='Auth-head'>
                        <h2>Add Address<span className='green-text'>3 of 3</span></h2>
                    </div>
                )}
                <form onSubmit={handleNextStep}>
                    {steps === 1 && (
                        <>
                            <div className='form-group'>
                                <p>Email Address</p>
                                <input type="email"
                                    name='email'
                                    value={formData.step1.email}
                                    onChange={handleChange}
                                    className='input-field' />
                            </div>

                            <div className='form-group'>
                                <p>Password</p>
                                <input type="password"
                                    name="password"
                                    value={formData.step1.password}
                                    onChange={handleChange}
                                    className='input-field' />
                            </div>
                        </>
                    )}

                    {steps === 2 && (
                        <>
                            <input type="text"
                                name="fullName"
                                value={formData.step2.fullName}
                                onChange={handleChange}
                                className='input-special'
                                placeholder='Full name'
                                required />

                            <div className='on-flex'>
                                <p>Gender:</p>
                                <input type="radio"
                                    name="gender"
                                    value="Male"
                                    onChange={handleChange}
                                    required
                                    checked={formData.step2.gender === 'Male'}
                                />
                                <p>Male</p>
                                <input type="radio"
                                    name="gender"
                                    value="Female"
                                    onChange={handleChange}
                                    required
                                    checked={formData.step2.gender === 'Female'}
                                />
                                <p>Female</p>
                            </div>

                            <div>
                                <p className='text-desc'><b>The phone number and birthday are only visible to you</b></p>
                                <input type="text"
                                    name="contact"
                                    value={formData.step2.contact}
                                    onChange={handleChange}
                                    placeholder='Phone Number'
                                    required
                                    className='input-special' />
                            </div>

                            <div>
                                <input type="date"
                                    name="birthday"
                                    value={formData.step2.birthday}
                                    onChange={handleChange}
                                    required
                                    className='input-special-1' />
                                <p className='text-desc'>Let us know about your birthday so as not to miss a gift</p>
                            </div>
                        </>
                    )}

                     {steps === 3 && (
                        <>
                            <div className='form-group-search'>
                                <SearchOutlinedIcon />
                                 <input type="text" 
                                 name='searchAddress'
                                 value={formData.step3.searchAddress}
                                 onChange={handleChange}
                                 placeholder='Search for address'/>
                            </div>
                            <p className='text-fade'>Your address is not visible to other users</p>

                           <div className='location-btn'>
                                <button onClick={handleManualAddress}>Use current location</button>
                                <button onClick={handleManualAddress}>Add manually</button>
                           </div>

                           <div className='location-content'>
                                <h2><b>Sharing your address shows:</b></h2>
                                <span>
                                 <span><PeopleOutlineOutlinedIcon className="step3-icon"/></span>
                                <p>People near you</p>
                                </span>
                                 <span>
                                    <span><AccessTimeIcon className="step3-icon"/></span>
                                    <p>Estimated delivery time</p>
                                </span>
                                <span>
                                  <span><AttachMoneyIcon className="step3-icon"/></span>
                                  <p>Estimate shipping costs</p>
                                </span>
                                
                           </div>

                            
                        </>
                            )}

                    {steps === 4 && (
                        <>
                            <div className='form-group'>
                                <p>Street address</p>
                                <input type="text"
                                    name="address"
                                    value={formData.step4.address}
                                    onChange={handleChange}
                                    required
                                    className='input-field' />
                            </div>

                            <input type="text"
                                name="apartment"
                                value={formData.step4.apartment}
                                onChange={handleChange}
                                className='input-special'
                                required
                                placeholder='Apartment' />

                            <div className='form-group'>
                                <p>City</p>
                                <input type="text"
                                    name="city"
                                    value={formData.step4.city}
                                    onChange={handleChange}
                                    className='input-field'
                                    required
                                    placeholder='' />
                            </div>

                            <div className='on-flex'>
                                <div className='form-group'>
                                    <p>State</p>
                                    <input type="text"
                                        name="state"
                                        value={formData.step4.state}
                                        onChange={handleChange}
                                        className='input-field'
                                        required
                                        placeholder='' />
                                </div>

                                <div className='form-group'>
                                    <p>Zip code</p>
                                    <input type="text"
                                        name="zip"
                                        value={formData.step4.zip}
                                        onChange={handleChange}
                                        className='input-field'
                                        required
                                        placeholder='' />
                                </div>
                            </div>
                        </>
                    )}

                    {steps !== 3 && (
                        <button type='submit' className='submit-button' onClick={handleNextStep}>
                            {steps < 2 ? 'Create account' : 'Save Information'}
                        </button>

                    )}

                    {steps === 1 && (
                        <>
                            <p className='promo-text'>
                                <input type="checkbox" className='promo-checkbox' /> Send me news and promotions
                            </p>
                            <p className='text-bottom'>By continuing I agree with the <a>Terms & Conditions, Privacy policy </a></p>
                        </>
                    )}
                </form>
                {error && <p>{error}</p>}
            </div>
        </div>
    );
}

export default Signup;
