const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            const cartItems = [...state.cart, action.payload]
            return {
                ...state,
                cart: cartItems
            }
        case 'REMOVE_ITEM':
            console.log(action.payload)
            const removedCartItems = state.cart.filter((item) => item.id !== action.payload.id)
            return{
                ...state,
                cart: removedCartItems
            }
        default: 
            return state
    }
}

export default reducer