const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                cart: action.payload
            }
        case 'REMOVE_ITEM':
            return{
                ...state,
                cart: action.payload
            }
        case 'TOGGLE_PAUSE':
            return{
                ...state,
                pause: action.payload
            }
        default: 
            return state
    }
}

export default reducer