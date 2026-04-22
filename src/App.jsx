import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './css/App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/home'
import {Routes, Route} from 'react-router-dom'
import Favorites from './pages/favorites'
import NavBar from './components/NavBar'
import { MovieProvider } from './contexts/MovieContext'

function App() {

  return (
    <MovieProvider>
    <div>
      <NavBar />
    
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </main>
    </div>
    </MovieProvider>
  )
}

export default App
