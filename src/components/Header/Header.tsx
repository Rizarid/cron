import { FC, memo } from "react";

export const Header: FC = memo(() => {
  return (
    <header className="header">
      <div className="avatar-container">
        <a href="/">
          <img src="../../assets/logo.svg" />
        </a>
      </div>

      
    </header>
  )
})