import React, {useContext} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Context } from '../store/store'
import ShortUniqueId from 'short-unique-id'
import { addItemToCart } from '../utilities'
import { Link } from 'react-router-dom';

export default function Shop() {
    const [state, dispatch] = useContext(Context)
   
    const uid = new ShortUniqueId({length:10})
    


    return(
        <main className="shop">
            <Header />
            <h2 className="shop__heading">Featured Products</h2>
            <div className="shop__gallery-container">
                <section className="shop__gallery">
                    {state.products.map((product, i) => {
                        const key = `product--${i}`

                        return(
                            <div className="product" key={key}>
                                <img className="product__image" src={product.image} alt={product.title} />
                                <div className="product__details">
                                    <h4 className="product__title">{product.title}</h4>
                                    <p className="product__desc">Item No. {product.id}</p>
                                    <strong className="product__price">{product.price}</strong>
                                    <Link to="/cart" className="product__button" onClick={() => addItemToCart(product, state, dispatch, uid)}>Add to Cart</Link>
                                </div>
                            </div>
                        )
                    })}
                </section>
            </div>
            
            <Footer />
        </main>
    )
}