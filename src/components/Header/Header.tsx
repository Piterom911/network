import React from "react"
import s from "./Header.module.css"
import AuthContainer from "./Auth/AuthContainer";

export function Header() {
    return (
        <header className={s.header}>
            <img className={s.logoImg}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Marvel%27s_The_Avengers_logo.svg/2560px-Marvel%27s_The_Avengers_logo.svg.png"
                alt="Logo"/>
            <AuthContainer />
        </header>
    )
}