const sortByKey = (list, key) => {
	return list.reduce((r, a) => {
        r[a[key]] = [...r[a[key]] || [], a];
            //if (!r[a[key]]) { r[a[key]] = []; }
		    //r[a[key]].push(x);
    return r;
  }, {});
}

const addItemToCart = (item, state, dispatch, uid) => {
    const product = {
        ...item,
        uid: uid()
    }
    const cartItems = [...state.cart, product]
    dispatch({type:'ADD_ITEM', payload: cartItems})

} 

export {
    addItemToCart,
    sortByKey
}