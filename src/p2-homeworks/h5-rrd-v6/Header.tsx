import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Pages";
import s from './Header.module.css'

type ObjectActiveClassName = {
    isActive: boolean
}


function Header() {
    const [isClick, setIsClick] = useState(false)

    const burgerChange = () => (isClick) ? setIsClick(false) : setIsClick(true)

    const isActive = ({isActive}: ObjectActiveClassName) => isActive ? `${s.active} ${s.menu__link}` : s.menu__link

    return (
        <div className="container">
            <ul className={`${s.menu} ${isClick ? s.right : s.left}`}>
                {/*add NavLinks*/}
                <li className={`${s.menu__item}`}>
                    <NavLink className={isActive} to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink>
                </li>
                <li className={s.menu__item}>
                    <NavLink className={isActive} to={PATH.JUNIOR}>Junior</NavLink>
                </li>
                <li className={s.menu__item}>
                    <NavLink className={isActive} to={PATH.JUNIOR__PLUS}>Junior+</NavLink>
                </li>
                <li className={`${s.menu__item}`}>
                    <div className={`${s.close} ${isClick ? s.change : ""}`} onClick={burgerChange}>
                        <div className={s.close1}></div>
                        <div className={s.close2}></div>
                        <div className={s.close3}></div>
                    </div>
                </li>
            </ul>
        </div>

    )
}

export default Header
