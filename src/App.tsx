import { Route, Routes } from 'react-router-dom'

import { Footer } from './components/Footer/Footer'
import { CasesPage } from './Pages/CasesPage'
import { EmptyPage } from './Pages/EmptyPage'
import { Header } from './components/Header/Header'

import './App.scss'

function App() {
    return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CasesPage />} />
        <Route path="/company" element={<EmptyPage />} />
        <Route path="/services" element={<EmptyPage />} />
        <Route path="/contacts" element={<EmptyPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
