import React, {useContext} from 'react';
import Header from '../components/Header'
import {Context} from '../store/store'

export default function Cart() {
    const [state, dispatch] = useContext(Context)
    const removeItem = (item) => dispatch ({type: 'REMOVE_ITEM', payload: item})
   
    return(
        <div>
            <Header />
            <h1>Cart</h1>
            {state.cart.map((product, i) => {
                const key = `product--${i}`

                return(
                    <div key={key}>
                        <img src={product.image} alt={product.title} />
                        <h4>{product.title}</h4>
                        <p>{product.desc}</p>
                        <strong>Price: {product.price}</strong>
                        <button onClick={() => removeItem(product)}>Remove</button>
                    </div>
                )
            })}
        </div>
    )
}