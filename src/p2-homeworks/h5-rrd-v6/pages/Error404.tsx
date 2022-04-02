import React from 'react'
import s from '../Header.module.css'

function Error404() {
    return (
        <div className={s.error}>
            <h1>404</h1>
            <h2>Page not found!</h2>
            <h3>—ฅ/ᐠ.̫ .ᐟ\ฅ—</h3>
            <img src="https://blog.vverh.digital/wp-content/uploads/2020/06/oblojka-404.png" alt="ss"/>
        </div>
    )
}

export default Error404
