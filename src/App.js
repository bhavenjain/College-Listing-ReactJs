import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Components/Landing'
import Page from './Components/Page'
import './App.css'

function App () {
  return (
    <Router>
      <div className='app-container'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <Landing />
              </>
            }
          />
          <Route
            path='/:college/page'
            element={
              <>
                <Page />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
