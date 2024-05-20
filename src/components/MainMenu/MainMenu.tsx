import React, { FC, memo, useCallback } from "react";

import styles from './MainMenu.module.scss';
import { NavLink } from "react-router-dom";

type NavLinkRenderProps = {
  isActive: boolean;
  isPending: boolean;
  isTransitioning: boolean;
};

interface Props extends React.MenuHTMLAttributes<HTMLMenuElement> {
  additionalClass?: string;
}

export const MainMenu: FC<Props> = memo(({...restProps}) => {
  const getClassName = useCallback((props: NavLinkRenderProps) => 
    `${styles.MenuItem} ${props.isActive && styles.Active}`, 
  [])

  return (
    <menu className={styles.MainMenu} {...restProps}>
      <NavLink to={'/'} className={getClassName}>Кейсы</NavLink>
      <NavLink to={'/company'} className={getClassName}>Компания</NavLink>
      <NavLink to={'/services'} className={getClassName}>Услуги</NavLink>
      <NavLink to={'/contacts'} className={getClassName}>Контакты</NavLink>
    </menu>
  )
})