import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import Widget from '../../Components/widget/Widget';
import TableSection from '../../Components/Table/TableSection';
import "./Home.scss";
// import GroupIcon from '@mui/icons-material/Group';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';

const Home = () => {
  const widgetData = [
    {
      headline: 'Total Customers',
      count: '5,423',
      percentageCount: '18% this month',
      
    },
    {
      headline: 'New Users',
      count: '1,234',
      percentageCount: '12% this month',
 
    },
    {
      headline: 'Sales',
      count: '$45,423',
      percentageCount: '22% this month',
      
    }
  ];

  return (
    <div className='home'>
      <Sidebar />
      <div className="homecontainer">
        <Navbar />

        <div className='widgets'>
          {widgetData.map((widgetItem, index) => (
            <Widget
              key={index}
              headline={widgetItem.headline}
              count={widgetItem.count}
              percentage={widgetItem.percentageCount}
              Icon={widgetItem.icon}
            />
          ))}
        </div>

        <TableSection />
      </div>
    </div>
  );
};

export default Home;
