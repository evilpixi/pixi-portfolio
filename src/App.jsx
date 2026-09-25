import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Work from './pages/Work.jsx'
import Contact from './pages/Contact.jsx'
import Legal from './pages/Legal.jsx'
import './App.css'

const PAGES = [
  { path: '/about', element: <About /> },
  { path: '/work', element: <Work /> },
  { path: '/contact', element: <Contact /> },
  { path: '/legal', element: <Legal /> },
]

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/en" replace />} />
          {['en', 'es'].map((lang) => [
            <Route key={lang} path={`/${lang}`} element={<Home />} />,
            ...PAGES.map((page) => (
              <Route key={lang + page.path} path={`/${lang}${page.path}`} element={page.element} />
            )),
          ])}
          <Route path="*" element={<Navigate to="/en" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
