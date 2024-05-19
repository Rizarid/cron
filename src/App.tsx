import { useEffect } from 'react'
import { $filteredCases, getCasesFx } from './store/casesStore/casesStore'

import './App.css'
import { useUnit } from 'effector-react'
import { CasesFilters } from './components/CasesFilters/CasesFilters'
import { CaseTitle } from './components/CaseTitle/CaseTitle'
import { Cases } from './components/Cases/Cases'
import { Footer } from './components/Footer/Footer'

function App() {
  const [filteredCases, getCases] = useUnit([$filteredCases, getCasesFx]);

  useEffect(() => {
    getCases();
  }, [getCases]);

  console.log(filteredCases);

  return (
    <>
      <header></header>
      <main className="main">
        <CaseTitle />
        <CasesFilters />
        <Cases />
      </main>
      <Footer />
    </>
  )
}

export default App
