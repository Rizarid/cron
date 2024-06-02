import { FC, memo } from "react";

import { CaseResult } from "../../api/interfaces";

import styles from './Case.module.scss';

interface Props {
  caseProp: CaseResult
}

const WHITE = 'FFFFFF';

export const Case: FC<Props> = memo(({caseProp}) => {
  const {CaseColor, FriendlyURL, Image, Title, Filters} = caseProp;

  const filtersList = Filters?.join(', ') || '';

  const isWhiteBackground = CaseColor === WHITE;

  return (
    <a href={FriendlyURL}>
      <div className={styles.Case} style={{backgroundColor: `#${CaseColor}`}}>
        <img src={Image} alt={Title} className={styles.Image} />
        <div className={styles.Description}>
          <div className={`${styles.Title} ${isWhiteBackground && styles.Dark}`}>{Title}</div>
          <div className={`${styles.Filters} ${isWhiteBackground && styles.Dark}`}>{filtersList}</div>
        </div>
      </div>
    </a>
  )
})