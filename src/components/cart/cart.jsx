import { Cart } from './styles'
import { useContext } from 'react'
import { CartContext } from '../../context/cart-context'
import { useNavigate } from 'react-router-dom'
function MyCart() {
    const { myCart, total, setAddToCart, setTotal } = useContext(CartContext)
    const navigate = useNavigate();
    const handleCheckout = () => {
        setAddToCart([]);
        setTotal(0);
        window.alert('Successful, see you soon!')
    }
    return ( 
        <Cart>
            <div className='cart-header'>CHECKOUT: </div>
                {myCart.length > 1 ? (
                    <div className='cart-items'>
                        {myCart.slice(1).map((item)=>(
                            <div className="cart-item">
                                <img src={item.imageUrl} className="cart-item-img" alt={item.name} />
                                {item.name}: {item.price}$
                            </div>
                        ))}
                        <h4 className={myCart.length > 1 ? 'cart-total' : 'cart-total-hide' }> TOTAL: {total}$</h4>
                        <button className='cart-done' onClick={handleCheckout}>Take your dog home</button>
                    </div>
                ) : (
                    <>
                        <h4>Your shopping cart is empty</h4>
                        <button className='cart-gohome' onClick={()=>navigate('/')}>Back to shop</button>
                    </>
                )

                }
        </Cart> 
    );
}

export default MyCart;