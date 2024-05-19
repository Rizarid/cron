import { useUnit } from "effector-react";
import { FC, memo } from "react";

import { $filteredCases } from "../../store/casesStore/casesStore";
import { Case } from "../Case/Case";

import styles from './Cases.module.scss';

export const Cases: FC = memo(() => {
  const [filteredCases] = useUnit([$filteredCases]);

  const kolCases = filteredCases.length;

  const halfIndex = kolCases % 2 === 0
    ? kolCases / 2
    : kolCases / 2 + 1;

  const leftPart = filteredCases.slice(0, halfIndex);
  const rightPart = filteredCases.slice(halfIndex);

  return (
    <div className={styles.Cases}>
      <div className={styles.CaseColumn}>
        {leftPart.map((item) => (
          <Case caseProp={item} key={item.Id} />
        ))}
      </div>

      <div className={styles.CaseColumn}>
        {rightPart.map((item) => (
          <Case caseProp={item} key={item.Id} />
        ))}
      </div>
    </div>
  )
})