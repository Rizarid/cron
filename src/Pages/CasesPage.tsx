import { FC, memo } from "react";
import { CaseTitle } from "../components/CaseTitle/CaseTitle";
import { CasesFilters } from "../components/CasesFilters/CasesFilters";
import { Cases } from "../components/Cases/Cases";

export const CasesPage: FC = memo(() => {
  return (
    <main className="main">
      <CaseTitle />
      <CasesFilters />
      <Cases />
    </main>
  )
})