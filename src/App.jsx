import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Resume from './Resume'
import './App.css'

export default function App(){
  return (
    // Remove the GitHub Pages basename so the app works when served at root (Vercel)
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  )
}
