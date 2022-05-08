
import './App.css';
import Header from './modules/components/Header/Header';
import MainContainer from './modules/components/Main/Main-Container';
import { TableTotalContainer } from './modules/components/Table/Table-Total-Container';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='table__container'>
     
        <MainContainer />
        <TableTotalContainer />
      </div>


    </div>
  );
}

export default App;
