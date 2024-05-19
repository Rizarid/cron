import { FC, memo } from "react";

import telegram from '../../assets/telegram.svg'

import styles from './Footer.module.scss'

export const Footer: FC = memo(() => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.EmailContainer}>
        <div className={styles.FooterTitle}>Стать клиентом или партнером!</div>
        <div className={styles.Separator}></div>
        <div className={styles.Email}>hello@it-cron.ru</div>
      </div>
      <div className={styles.ContactsContainer}>
        <div className={styles.Address}>
          <div className={styles.City}>Россия, Москва</div>
          <div className={styles.Street}>119330, ул. Мосфильмовская, 35</div>
          <div className={styles.Phone}>+7 (495) 006-13-57</div>
        </div>
        <div className={styles.Request}>
          <div className={styles.RequestText}>Оставить заявку</div>
        </div>
        <div className={styles.AddressMobile}>
          <div className={styles.City}>Россия, Москва</div>
          <div className={styles.Street}>119330, ул. Мосфильмовская, 35</div>
          <div className={styles.Phone}>+7 (495) 006-13-57</div>
        </div>
        <div className={styles.TelegramContainer}>
          <div className={styles.TelegramTitle}>Связаться через</div>
          <img src={telegram} alt="telegram" className={styles.TelegramImage} />
        </div>
      </div>
    </footer>
  )
})