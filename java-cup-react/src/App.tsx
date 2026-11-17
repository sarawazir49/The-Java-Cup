import { useEffect } from 'react'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import './css/variables.css'
import './css/reset.css'
import './css/main.css'
import './css/header.css'
import './css/footer.css'
import './css/responsive.css'
import './css/hero.css'
import './css/about.css'
import './css/products.css'
import './css/contact.css'
import './css/home.css'
import Home from './pages/home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'

export default function App(){
  useEffect(()=>{
    const t = document.getElementById('themeToggle')
    if(!t) return
    const s = localStorage.getItem('theme')
    if(s === 'light'){
      document.body.classList.add('light')
      t.textContent = '☀️'
    }
    const onClick = () => {
      document.body.classList.toggle('light')
      const l = document.body.classList.contains('light')
      localStorage.setItem('theme', l ? 'light' : 'dark')
      t.textContent = l ? '☀️' : '🌙'
    }
    t.addEventListener('click', onClick)
    return ()=> t.removeEventListener('click', onClick)
  },[])

  return (
    <HashRouter>
      <header>
        <nav className="navbar">
          <Link to="/" className="logo">The JAVA<span>CUP</span></Link>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/products">Menu</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="nav-right">
            <button id="themeToggle">🌙</button>
            <div className="hamburger">☰</div>
          </div>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>

      <footer>
        <div className="footer-content">
          <div className="logo">The JAVA<span>CUP</span></div>
          <p>© 2026 The Java Cup</p>
        </div>
      </footer>
    </HashRouter>
  )
}