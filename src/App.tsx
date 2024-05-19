import { useEffect } from 'react'
import { useUnit } from 'effector-react'
import { Route, Routes } from 'react-router-dom'

import { $filteredCases, getCasesFx } from './store/casesStore/casesStore'
import { Footer } from './components/Footer/Footer'
import { CasesPage } from './Pages/CasesPage'

import './App.scss'
import { EmptyPage } from './Pages/EmptyPage'
import { Header } from './components/Header/Header'


function App() {
  const [filteredCases, getCases] = useUnit([$filteredCases, getCasesFx]);

  useEffect(() => {
    getCases();
  }, [getCases]);

  console.log(filteredCases);

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
