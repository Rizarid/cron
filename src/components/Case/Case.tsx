import { FC, memo } from "react";
import { CaseResult } from "../../api/getCases";

import styles from './Case.module.scss';

interface Props {
  caseProp: CaseResult
}

export const Case: FC<Props> = memo(({caseProp}) => {
  const {CaseColor, FriendlyURL, Image, Title, Filters} = caseProp;

  const filtersList = Filters.join(', ');

  return (
    <a href={FriendlyURL}>
      <div className={styles.Case} style={{backgroundColor: `#${CaseColor}`}}>
        <img src={Image} alt={Title} className={styles.Image} />
        <div className={styles.Description}>
          <div className={`${styles.Title} Dark`}>{Title}</div>
          <div className={`${styles.Filters} Dark`}>{filtersList}</div>
        </div>
      </div>
    </a>
  )
})