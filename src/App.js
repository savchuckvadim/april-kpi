
import './App.css';
import GetSheetsContainer from './modules/components/Get-Sheets-Container';
// import BasicTable from './modules/components/Table/Table';
import Header from './modules/components/Header/Header';
import { TableTotalContainer } from './modules/components/Table/Table-Total-Container';

function App() {
  return (
    <div className="App">
     <Header/>
     <div className='table__container'>
     <GetSheetsContainer />
     <TableTotalContainer/>
     </div>
    
      {/* <BasicTable /> */}
    </div>
  );
}

export default App;
