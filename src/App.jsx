import './styles/styles.scss'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components'
import { About, Contact, Home, Models, Team, Testimonial } from './pages'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/home' element={<Home />} />
        <Route path='/models' element={<Models />} />
        <Route path='/team' element={<Team />} />
        <Route path='/testimonials' element={<Testimonial />} />
      </Routes>
    </>
  )
}

export default App
