const CHANGE_LOADING = 'CHANGE_LOADING'

export type StateType = {
    loading:boolean
}

const initState = {
    loading: false
}

export const loadingReducer = (state:StateType = initState, action: loadingACType): StateType => { // fix any
    switch (action.type) {
        case "CHANGE_LOADING":{
            return {
                ...state,
                loading:action.value
            }
        }
        default:
            return state
    }
}

type loadingACType = {
    type:typeof CHANGE_LOADING
    value:boolean
}

export const loadingAC = (value:boolean): loadingACType => {
    return {
        type:CHANGE_LOADING,
        value
    }
} // fix any