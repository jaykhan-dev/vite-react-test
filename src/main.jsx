import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Music from './pages/Music'
import Projects from './pages/Projects'
import Resume from './pages/Resume'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/music' element={<Music />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/projects' element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
