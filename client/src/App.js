import React from 'react'
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
const App = () => {
  return (
    <div>
      <center>
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
      </Router>
      </center>
    </div>
  )
}

export default App