
import logo from '../../assets/logo.jpg';
import '../../../App.css';
import './Header.css'
import ManagerFilterContainer from './Manager-Filter/Manager-Filter-Container';
import DateContainer from './Date-Filter/Date-Container';
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