import logo from './modules/assets/logo.jpg';
import './App.css';
import GetSheets from './modules/components/GetSheets';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <GetSheets />
    </div>
  );
}

export default App;
