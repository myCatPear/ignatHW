import React, {ChangeEvent} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";


function HW12() {
    
    const themesList = useSelector<AppStoreType, string[]>(state => state.themes.themesList)
    const currentTheme = useSelector<AppStoreType, string>(state => state.themes.currentTheme)

   const dispatch = useDispatch()

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeThemeC(e.currentTarget.value))
    }

    return (
        <div className={s[currentTheme]}>
            <hr/>
            <span className={s[currentTheme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperSelect options={themesList} onChange={onChangeCallback}/>

            <hr/>
        </div>
    );
}

export default HW12;
