import './App.css'
import Home from './components/Home'
import ManagementSignin from './components/ManagementSignin'
import About from './components/About'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import DoctorSignin from './components/DoctorSignin'
import StaffSignin from './components/StaffSignin'
import Overview from './components/Overview'
import { GlobalProvider } from './context/Context';
import Patients from './components/Patients'
import Doctors from './components/Doctors'
import Inventory from './components/Inventory'
function App(){
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Home/>
    },
    {
      path : '/Mangement-Login',
      element : <ManagementSignin/>
    },
    {
      path : '/Doctor-Login',
      element : <DoctorSignin/>
    },
    {
      path : '/Staff-Login',
      element : <StaffSignin/>
    },
    {
      path : '/About',
      element : <About/>
    },
    {
      path : '/Mangement-Login/Dashboard/overview',
      element : <Overview/>
    },
    {
      path : '/Mangement-Login/Dashboard/patients',
      element : <Patients/>
    },
    {
      path : '/Mangement-Login/Dashboard/doctors',
      element : <Doctors/>
    },
    {
      path : '/Mangement-Login/Dashboard/inventory',
      element : <Inventory/>
    },
    {
      path : '/',
      element : <Home/>
    },
  ])
  return(
    <GlobalProvider>
    
    <RouterProvider router={router}/>
    </GlobalProvider>
  )
}
export default App ;

