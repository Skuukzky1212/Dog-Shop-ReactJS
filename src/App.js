import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/nav-bar/';
import Home from './components/home';
import Dogs from './components/dogs';
import Cart from './components/cart'  ;
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CartContext } from './context/cart-context/cart-context'

function App() {
  const [dogs, setDogs] = useState([]);
  const [myCart, setAddToCart] = useState([{}]);
  const [total, setTotal] = useState(0);
  

  useEffect(()=>{
    async function getData() {
      const res = await axios.get('/v1/dogs');
      return res; // return promise
    }

    getData().then((res)=>{
      setDogs(res.data);
    })

    getData().catch((err)=>{
      console.log(err);
    })
  }, []);
  return (
  <CartContext.Provider value={{myCart, setAddToCart, total, setTotal}}>
      <Router> 
        <NavBar /> 
        <div className='page-container'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/shop' element={<Dogs dogs={dogs}/>}/>
            <Route path='/cart' element={<Cart />}/>
          </Routes>
        </div>
      </Router>
  </CartContext.Provider>
  );
}

export default App;
