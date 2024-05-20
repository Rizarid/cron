import { FC, memo } from "react"
import { useUnit } from "effector-react";

import { languageFilters, platformFilters, sectoralFilters, servicesFilters } from "./filters"
import { CaseFilter } from "../CaseFilter/CaseFilter"
import { $filtersIsOpen } from "../../store/filtersStore/filtersStore";

import styles from './CaseFilters.module.scss';

export const CasesFilters: FC = memo(() => {
  const [filtersIsOpen] = useUnit([$filtersIsOpen])
  return (
    <div className={styles.CasesFilters}>
      <div className={styles.Rhomb}></div>
      <div 
        className={filtersIsOpen 
          ? styles.CaseFiltersContainer
          : `${styles.CaseFiltersContainerClose} ${styles.CaseFiltersContainerCloseAnimate}`
      }>
        <CaseFilter 
          title={sectoralFilters.title} 
          filters={sectoralFilters.filters} 
        />
        <CaseFilter 
          title={platformFilters.title} 
          filters={platformFilters.filters} 
        />
        <CaseFilter 
          title={servicesFilters.title} 
          filters={servicesFilters.filters} 
        />
        <CaseFilter 
          title={languageFilters.title} 
          filters={languageFilters.filters} 
        />
      </div>
    </div>
  )
})