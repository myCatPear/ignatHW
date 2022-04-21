import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType, action: ActionType): UserType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') return [...state].sort((a,b) => a.name > b.name ? 1 : -1)
            if (action.payload === 'down') return [...state].sort((a,b) => a.name < b.name ? 1 : -1)
            return state
        }
        case 'check': {
            return state.filter(i => i.age >= action.payload)
        }
        default: return state
    }
}

type ActionType = sortUpACType | sortDownACType | checkAgeACType
type sortUpACType = ReturnType<typeof sortUpAC>
type sortDownACType = ReturnType<typeof sortDownAC>
type checkAgeACType = ReturnType<typeof checkAgeAC>

const sortUpAC = () => {
    return {
        type:"sort",
        payload: 'up'
    }as const
}

const sortDownAC = () => {
    return {
        type:"sort",
        payload: 'down'
    }as const
}

const checkAgeAC = () => {
    return {
        type:'check',
        payload:18
    }as const
}