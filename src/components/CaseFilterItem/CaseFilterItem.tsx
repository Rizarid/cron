import { FC, memo } from "react";
import { Filters } from "../../store/filtersStore/interfaces";
import { $filters, switchFilterEvent } from "../../store/filtersStore/filtersStore";
import styles from './CaseFilterItem.module.scss'
import { useUnit } from "effector-react";

interface Props {
  filter: Filters
}

export const CaseFilterItem: FC<Props> = memo(({filter}) => {
  const [filters] = useUnit([$filters])
  const onClick = () => {
    switchFilterEvent(filter);
  }

  const active = filters.includes(filter)

  return (
    <span className={`${styles.CaseFilterItem} ${active && styles.CaseFilterItemSelected}` } onClick={onClick}>{filter}</span>
  )
})