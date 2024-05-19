import { FC, memo, useCallback, useState } from "react";
import { NavLink } from "react-router-dom";

import burger from '../../assets/burger.svg'

import styles from './BurgerMenu.module.scss'

type NavLinkRenderProps = {
  isActive: boolean;
  isPending: boolean;
  isTransitioning: boolean;
};

export const BurgerMenu: FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const getClassName = useCallback((props: NavLinkRenderProps) => 
    `${styles.MenuItem} ${props.isActive && styles.Active}`, 
  [])

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
      <div className={styles.MainMenu}>
        <NavLink to={'/'} className={getClassName}>Кейсы</NavLink>
        <NavLink to={'/company'} className={getClassName}>Компания</NavLink>
        <NavLink to={'/services'} className={getClassName}>Услуги</NavLink>
        <NavLink to={'/contacts'} className={getClassName}>Контакты</NavLink>
      </div>
    </div>
  )
})