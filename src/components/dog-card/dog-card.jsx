import { useState, useContext } from 'react';
import { Section } from './styles'
import { CartContext } from '../../context/cart-context'
function DogCard(props) {
    const { dog } = props;
    const {setAddToCart, setTotal} = useContext(CartContext)
    const [isAdded, setIsAdded] = useState(false);
    const handleAdded = () => {
        setIsAdded(true);
        const newItem = {
            name: dog.name,
            imageUrl: dog.imageUrl,
            price: dog.price,
        }
        setAddToCart(prev => [...prev, newItem]);
        setTotal(price => price += Number(dog.price));
    }
   
    return ( 
        <Section>
           <div className='dogs-info'>
                <p className='dogs-name'>{dog.name}</p>
                <p className='dogs-breed'>{dog.breed}</p>
           </div>
            <div className='dogs-img-container'>
                <img className='dogs-img' src={dog.imageUrl} alt={dog.name} /> 
            </div>
            <div className='dogs-desc'>{dog.description}</div>
            <div className='dogs-price'>{dog.price}$</div>
                {!isAdded ? (
                    <button className='dogs-btn' onClick={handleAdded}>ADD TO CART</button>
                ) : (
                    <button disabled className='dogs-btn-disabled'>ADDED TO CART</button>
                )}
            
        </Section> 
    );
}

export default DogCard;