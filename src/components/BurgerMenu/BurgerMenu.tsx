import { FC, memo, useState } from "react";

import { MainMenu } from "../MainMenu/MainMenu";
import burger from '../../assets/burger.svg'

import styles from './BurgerMenu.module.scss'

export const BurgerMenu: FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false)
  }

  const openMenu = () => {
    setIsOpen(true)
  }

  if (!isOpen) return (
    <img src={burger} onClick={openMenu} />
  )
  return (
    <div className={styles.BurgerMenu}>
      <img src={burger} className={styles.CloseButton} onClick={closeMenu} />
      <MainMenu />
    </div>
  )
})