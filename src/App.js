import React from 'react'
import Garage from './Garage'
import LoginForm from './LoginForm'
import  Dashboard from './Dashboard/Admin'
import UserManagement from './Dashboard/users' 
import CarList from './Dashboard/Voiture';
import Reservation from './user/Reservation'
import DriverList from './Dashboard/chauffeur'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
      <> 
      {/* <Garage/>
      <LoginForm/>
      <Reservation/> */}
        <BrowserRouter>
        <Dashboard/>
        </BrowserRouter>
     
      </>
  )
}
export default App
/////