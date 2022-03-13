import React from 'react'
import {AffairType} from "./HW2";
import classes from "./Affairs.module.css";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (number: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix
    return (
        <div className={classes.affair}>
            <span className="affair__id">
                {props.affair._id}
            </span>
            <span className="affair__name">
                {props.affair.name}
            </span>
            <span className="affair__id">
              {props.affair.priority}
        </span>


            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
