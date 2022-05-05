import logo from './modules/assets/logo.jpg';
import './App.css';
import GetSheetsContainer from './modules/components/Get-Sheets-Container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <GetSheetsContainer />
    </div>
  );
}

export default App;
