
import logo from '../../assets/logo.jpg';
import '../../../App.css';
import './Header.css'
import BasicDateRangePicker from './Date-Filter/Date.jsx';
import ManagerFilterContainer from './Manager-Filter/Manager-Filter-Container';
import DateContainer from './Date-Filter/Date-Container';
import StatisticsButton from './Statistics-Button.jsx/Statistics-Button';
import { StatisticsButtonContainer } from './Statistics-Button.jsx/Statistics-Button-Container';

const Header = () => {

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            
            <div className='filters__container'>
              
            <DateContainer />
            <ManagerFilterContainer/>
            <StatisticsButtonContainer />
            </div>
            
        </header>
    )
}

export default Header