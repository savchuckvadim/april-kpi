
import logo from '../../assets/logo.jpg';
import '../../../App.css';
import BasicDateRangePicker from './Date-Filter/Date.jsx';

const Header = () => {

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className='filters__container'>
            <BasicDateRangePicker />
            </div>
            
        </header>
    )
}

export default Header