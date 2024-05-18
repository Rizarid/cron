import { useEffect } from 'react'
import { $cases, getCasesFx } from './store/casesStore/casesStore'

import './App.css'
import { useUnit } from 'effector-react'
import { CasesFilters } from './components/CasesFilters/CasesFilters'
import { CaseTitle } from './components/CaseTitle/CaseTitle'

function App() {
  const [cases, getCases] = useUnit([$cases, getCasesFx]);

  useEffect(() => {
    getCases();
  }, [getCases]);

  console.log(cases);

  return (
    <>
      <header></header>
      <main className="main">
        <CaseTitle />
        <CasesFilters />
      </main>
    </>
  )
}

export default App
