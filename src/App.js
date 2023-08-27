import React from 'react'
import { Route, Routes } from 'react-router'
import LoginPage from './pages/LoginPage'
import RootLayOut from './components/RootLayOut'
import HomePage from './pages/HomePage'
import NotFound from './components/NotFound'
import AddForm from './components/AddForm'
import UpdateForm from './components/UpdateForm'



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayOut />} >
        <Route index element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='add/user' element={<AddForm />} />
        <Route path='user/update/:id' element={<UpdateForm />} />

        <Route path='*' element={<NotFound />} />


      </Route>


    </Routes>
  )
}

export default App
