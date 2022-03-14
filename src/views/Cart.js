import React, {useContext} from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Context} from '../store/store'
import { sortByKey, addItemToCart } from '../utilities';
import ShortUniqueId from 'short-unique-id'

export default function Cart() {
    const [state, dispatch] = useContext(Context)

    const uid = new ShortUniqueId({length:10})

    const removeItem = (item) => {
        const removedCartItems = state.cart.filter((i) => i.uid !== item.uid)
        dispatch ({type: 'REMOVE_ITEM', payload: removedCartItems})
    }

    const visualCart = sortByKey(state.cart, 'title')
    console.log(visualCart)
   
    return(
        <div>
            <Header />
            <h2 className="shop__heading">Cart</h2>
            <div className="shop__gallery-container">
                <section className="shop__gallery">
                    {Object.entries(visualCart).map((p, i) => {
                        const key = `cart-item--${i}`
                        const product = p[1][0]
                        return (
                            <div className="product" key={key}>
                                <img className="product__image" src={product.image} alt={product.title} />
                                <div className="product__details">
                                    <h4 className="product__title">{product.title}</h4>
                                    <p className="product__desc">Item No. {product.id}</p>
                                    <strong className="product__price">{product.price}</strong>
                                    <div className="product__controls">
                                        <button className="product__remove" onClick={() => removeItem(product)}>-</button>
                                        <span className="product__num">x{p[1].length}</span>
                                        <button className="product__add" onClick={() => addItemToCart(product, state, dispatch, uid)}>+</button>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    })}
                </section>
            </div>
            <Footer />
            

        </div>
    )
}


/* 
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
})} */