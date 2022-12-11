const initState = {
    themeId: 1,
}

type changeThemeIdActionType = {
    type: 'SET_THEME_ID'
    id: number
}

type themeReducerStateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: changeThemeIdActionType): themeReducerStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return {...state,
                themeId: action.id}
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdActionType => ({type: 'SET_THEME_ID', id}) // fix any
