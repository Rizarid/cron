import { FC, memo } from "react";

import { CaseResult } from "../../api/interfaces";
import { getContrastRatio } from "../../helpers/contrastRatioCalculation";

import styles from './Case.module.scss';

interface Props {
  caseProp: CaseResult
}

const WHITE = '#FFFFFF';
const CONTRAST_RATIO_THRESHOLD = 1.5;

export const Case: FC<Props> = memo(({caseProp}) => {
  const {CaseColor = WHITE, FriendlyURL, Image, Title, Filters} = caseProp;

  const filtersList = Filters?.join(', ') || '';

  const contrastRatio = getContrastRatio(CaseColor, WHITE);
  const isLightBackground = contrastRatio < CONTRAST_RATIO_THRESHOLD;

  return (
    <a href={FriendlyURL}>
      <div className={styles.Case} style={{backgroundColor: CaseColor}}>
        <img src={Image} alt={Title} className={styles.Image} />
        <div className={styles.Description}>
          <div className={`${styles.Title} ${isLightBackground && styles.Dark}`}>{Title}</div>
          <div className={`${styles.Filters} ${isLightBackground && styles.Dark}`}>{filtersList}</div>
        </div>
      </div>
    </a>
  )
})