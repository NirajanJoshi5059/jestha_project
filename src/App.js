import React from 'react'
import { Route, Routes } from 'react-router'
import LoginPage from './pages/LoginPage'
import RootLayOut from './components/RootLayOut'
import HomePage from './pages/HomePage'
import NotFound from './components/NotFound'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayOut />} >
        <Route index element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='*' element={<NotFound />} />


      </Route>


    </Routes>
  )
}

export default App
