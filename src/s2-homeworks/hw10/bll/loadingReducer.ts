type loadingInitType = {
    isLoading: boolean
}

const initState: loadingInitType = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: LoadingActionType): loadingInitType => {
    switch (action.type) {
        case 'CHANGE_LOADING': {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
