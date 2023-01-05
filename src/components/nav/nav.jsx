import {React} from "react";

// Style
import style from './nav.module.scss'
import { NavLink } from 'react-router-dom';


const Nav = () => {

const setClass = navClass => navClass.isActive ? style.nav__link +' '+ style.active : style.nav__link;

    return (
    <nav className = {style.nav}>
        <div tabIndex={1} className={style.nav__item}>
            <NavLink to = '/profile' className = {setClass}>Профиль</NavLink>
        </div>
        <div tabIndex={2} className={style.nav__item}>
            <NavLink to = '/dialogs' className = {setClass}>Сообщения</NavLink>
        </div>
        <div tabIndex={3} className={style.nav__item}>
            <NavLink to = '/' className = {setClass}>Новости</NavLink>
        </div>
        <div tabIndex={4} className={style.nav__item}>
            <NavLink to = '/musics' className = {setClass}>Музыка</NavLink>
        </div>
        <div tabIndex={5} className={style.nav__item}>
            <NavLink to = '/settings' className = {setClass}>Настройки</NavLink>
        </div>
    </nav>
    )
}

export default Nav;