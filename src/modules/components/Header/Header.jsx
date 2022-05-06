
import logo from '../../assets/logo.jpg';
import '../../../App.css';
import './Header.css'
import BasicDateRangePicker from './Date-Filter/Date.jsx';
import ManagerFilterContainer from './Manager-Filter/Manager-Filter-Container';

const Header = () => {

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className='filters__container'>
            <BasicDateRangePicker />
            <ManagerFilterContainer/>
            </div>
            
        </header>
    )
}

export default Header