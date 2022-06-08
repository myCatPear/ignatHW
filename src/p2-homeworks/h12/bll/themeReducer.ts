type StateType = {
    themesList:string[]
    currentTheme:string
}

const initState = {
    themesList: ['dark', 'red', 'some'],
    currentTheme: 'dark'
};

export const themeReducer = (state:StateType = initState, action: ActionsType): StateType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME_HW12": {
            return {
                ...state,
                currentTheme:action.color
            }
        }
        default:
            return state;
    }
};

type ChangeThemeACType = {
    type: 'CHANGE_THEME_HW12'
    color: string
}

export type ActionsType = ChangeThemeACType

export const changeThemeC = (color: string): ChangeThemeACType => {
    return {
        type: 'CHANGE_THEME_HW12',
        color
    }
};