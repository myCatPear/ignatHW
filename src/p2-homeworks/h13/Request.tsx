import React, {ChangeEvent, useState} from 'react';
import {RequestAPI} from "./RequestAPI";

const Request = () => {
    const [state, setState] = useState('')
    const [isCheked, setIsChecked] = useState(false)


    const onClickHandler = () => {
        RequestAPI.testPost({success:isCheked})
            .then((res) => {
                setState(res.data.errorText)
            })
            .catch((rej) => {
                setState(rej.message)
            })
    }

    const onChangeCheckedHadler = (e:ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.currentTarget.checked)
    }

    return (
        <div>
            <input type="checkbox" onChange={onChangeCheckedHadler}/>
            <button onClick={onClickHandler}>+</button>
            {state}
        </div>
    );
};

export default Request;