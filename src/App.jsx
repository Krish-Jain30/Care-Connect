import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Overview from './components/Overview';
import Inventory from './components/Inventory';
import Doctors from './components/Doctors';
import Patients from './components/Patients';
import { GlobalProvider } from './context/Context';


const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <div className="app">
          <Sidebar/>
          <div className='main-content'>
            <Routes>
              <Route path='/overview' element={<Overview/>} />
              <Route path='/inventory' element={<Inventory/>} />
              <Route path='/patients' element={<Patients/>} />
              <Route path='/doctors' element={<Doctors/>} />
            </Routes>
          </div>
        </div>
      </Router>
    </GlobalProvider>
    
  );
}

export default App;