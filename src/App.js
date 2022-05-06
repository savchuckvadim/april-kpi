
import './App.css';
import GetSheetsContainer from './modules/components/Get-Sheets-Container';
// import BasicTable from './modules/components/Table/Table';
import Header from './modules/components/Header/Header';

function App() {
  return (
    <div className="App">
     <Header/>
     <div className='table__container'>
     <GetSheetsContainer />
     </div>
    
      {/* <BasicTable /> */}
    </div>
  );
}

export default App;
