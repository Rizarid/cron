import { useUnit } from "effector-react";
import { FC } from "react";
import { $filters, $filtersIsOpen, cleanFiltersEvent, switchFiltersEvent } from "../../store/filtersStore/filtersStore";
import styled from './CaseTitle.module.scss';

export const CaseTitle: FC = () => {
  const [filtersIsOpen, filters, switchFilters, cleanFilters] = useUnit([$filtersIsOpen, $filters, switchFiltersEvent, cleanFiltersEvent]);

  return (
    <div className={styled.CaseTitle}>
      <h1 className={styled.Title}>Кейсы</h1>
      <div className={styled.FiltersSwitcher}>
        {!!filters.length && <div className={styled.Cleaner} onClick={cleanFilters}>Отчистить</div>}
        {!!filters.length && <div className={styled.LeftSeparator}></div>}
        <div className={`${styled.Rhomb} ${filtersIsOpen && styled.FiltersOpenRhomb} ${!!filters.length && styled.FilteredRhomb}`}></div>
        <div className={`${styled.RightSeparator} ${filtersIsOpen && styled.RightSeparatorHidden} `}></div>
        <div className={`${styled.Switcher} ${filtersIsOpen && styled.FilterOpenSwitcher}`} onClick={switchFilters}>Фильтры</div>
      </div>
    </div>
  )
} 