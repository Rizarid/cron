import { useEffect } from 'react'
import { $cases, getCasesFx } from './store/casesStore/casesStore'

import './App.css'
import { useUnit } from 'effector-react'
import { CasesFilters } from './components/CasesFilters/CasesFilters'

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
        <CasesFilters />
      </main>
    </>
  )
}

export default App
