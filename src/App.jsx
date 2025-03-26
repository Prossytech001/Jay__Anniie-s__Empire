import { useState ,useEffect} from 'react'
import Viewcart from '../src/components/Viewcart/Viewcart'
import Nav from './components/Navbar/Nav';
import './App.css'
import Scrolltop from './components/Scrolltotop.jsx';
import ContactUs from './pages/Contactpage';
import Homepage from './pages/Homepage'
import Productpage from './pages/Productpage'
import Cartpage from './pages/Cartpage'
import {feature} from '../src/components/feature/Featurefile'
import Shoppingpage from './pages/Shoppingpage'
import { BrowserRouter , Routes ,Route} from 'react-router-dom'
import Footer from './components/Footer/Footer'
function App() {
  
    const [cart, setCart] = useState(() => {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    });

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
      // Save cart to local storage whenever it changes
      localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
  
    const handleAddToCart = (product) => {
      setCart([...cart, product]);
     
    };
    const products = feature;

  return (
    <BrowserRouter>
    <Scrolltop/>
    <Nav searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    <Viewcart setCart={setCart}  cart={cart} />
<Routes>
<Route path='/' element={<Homepage/>}/>
<Route path='/product/:id' element={<Productpage products={products} onAddToCart={handleAddToCart} cart={cart} />}/>
<Route path="/cart" element={<Cartpage cart={cart} setCart={setCart}  />} />
<Route path='/Shop' element={<Shoppingpage searchTerm={searchTerm} setSearchTerm={setSearchTerm}  onAddToCart={handleAddToCart} />} />
<Route path='/contact' element={<ContactUs/>} />



</Routes>
<Footer/>
</BrowserRouter>
  )
}

export default App
