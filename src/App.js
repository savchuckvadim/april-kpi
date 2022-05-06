
import './App.css';
import GetSheetsContainer from './modules/components/Get-Sheets-Container';
import BasicTable from './modules/components/Table/Table';
import Header from './modules/components/Header/Header';

function App() {
  return (
    <div className="App">
     <Header/>
      <GetSheetsContainer />
      {/* <BasicTable /> */}
    </div>
  );
}

export default App;
