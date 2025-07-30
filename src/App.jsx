import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greet from './component/Greet'
import Counter from './component/Counter'
import Dashboard from './Dashboard/Dashboard'

function App() {
  

  return (
    <>
    <Dashboard />
     <Greet />
     <Counter />
    </>
  )
}

export default App
