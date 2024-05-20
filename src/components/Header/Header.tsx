import { FC, memo } from "react";
import { NavLink } from "react-router-dom";

import logo from '../../assets/logo.svg'
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

import styles from './Header.module.scss'
import { MainMenu } from "../MainMenu/MainMenu";

export const Header: FC = memo(() => {
  return (
    <>
      <div className={styles.Placeholder}></div>
      <header className={styles.Header}>
        <NavLink to="/">
          <img src={logo} />
        </NavLink>

        <div className={styles.MenuContainer}>
          <MainMenu />
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