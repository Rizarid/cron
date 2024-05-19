import { FC, memo, useCallback } from "react";
import { NavLink } from "react-router-dom";

import logo from '../../assets/logo.svg'
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

import styles from './Header.module.scss'

type NavLinkRenderProps = {
  isActive: boolean;
  isPending: boolean;
  isTransitioning: boolean;
};

export const Header: FC = memo(() => {
  const getClassName = useCallback((props: NavLinkRenderProps) => 
    `${styles.MenuItem} ${props.isActive && styles.Active}`, 
  [])

  return (
    <>
      <div className={styles.Placeholder}></div>
      <header className={styles.Header}>
        <NavLink to="/">
          <img src={logo} />
        </NavLink>

        <div className={styles.MainMenu}>
          <NavLink to={'/'} className={getClassName}>Кейсы</NavLink>
          <NavLink to={'/company'} className={getClassName}>Компания</NavLink>
          <NavLink to={'/services'} className={getClassName}>Услуги</NavLink>
          <NavLink to={'/contacts'} className={getClassName}>Контакты</NavLink>
        </div>

        <div className={styles.BurgerContainer}>
          <BurgerMenu />
        </div>
      </header>
      <div className={styles.RhombContainer}>
        <div className={styles.Rhomb} />
      </div>
    </>
  )
})