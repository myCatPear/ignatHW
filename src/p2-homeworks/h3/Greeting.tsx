import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e:ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    const inputClass = (error === '') ? s.valid : s.error // need to fix with (?:)

    return (
        <div className={s.greeting__form}>
            <div className={s.greeting__input}>
                <input value={name} onChange={setNameCallback} className={inputClass}/>
                <button className={inputClass} onClick={addUser}>Add</button>
            </div>
            <span className={s.greeting__error}>{error}</span>
            <span className={s.greeting__count}>Total users: {totalUsers}</span>
        </div>
    )
}

export default Greeting
