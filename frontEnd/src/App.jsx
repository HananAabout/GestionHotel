import React from 'react';
import LoginPage from './LoginPage';
import PasswordResetPage from './PasswordResetPage';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from './DashboardPage';

function App() {
  

  return (
    <>
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/password' element={<PasswordResetPage/>}/>
        <Route path='/dashbord' element={<DashboardPage/>}/>
       </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
