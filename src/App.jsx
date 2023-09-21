import { useState } from 'react'

import './App.css'
import { SuperprofList } from './components'
import { Routes, Route } from 'react-router-dom'
import { DetailSuperprof } from './screen'
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<SuperprofList/>}/>
        <Route path='/detail/:id' element={<DetailSuperprof/>}/>
      </Routes>
    </>
  )
}

export default App
