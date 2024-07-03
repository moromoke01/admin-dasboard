import './Navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WavingHandIcon from '../../assets/clapping-emoji.png';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div><p>Hello Evano
         <img src={WavingHandIcon} alt="WavingHandIcon"  className="WavingHandIcon"/>
        </p>
        </div>

        <div className='search'>
        <SearchOutlinedIcon />
           <input type="text" placeholder='Search...'/>
           
        </div>

      </div>
    </div>
  )
}

export default Navbar
