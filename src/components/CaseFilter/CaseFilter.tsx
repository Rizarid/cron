import { FC } from "react";

import { Filters } from "../../store/filtersStore/interfaces";
import { CaseFilterItem } from "../CaseFilterItem/CaseFilterItem";

import styles from './CaseFilter.module.scss'

interface Props {
  title: string;
  filters: Filters[]
}

export const CaseFilter: FC<Props> = ({title, filters}) => {
  return (
    <div className={styles.CasesFilter}>
      <h3 className={styles.FilterTitle}>{title}</h3>
      <div className={styles.Separator}></div>
      <div className={styles.FilterContainer}>
        {filters.map(filter => (
          <CaseFilterItem filter={filter} key={filter} />
        ))}
      </div>
    </div>
  )
}