import './styles/styles.scss'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components'
import { Home } from './pages'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
