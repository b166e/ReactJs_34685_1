//import './App.scss';

import './assets/main.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Category from './pages/Category'
import Productos from './pages/Products'
import Rubro from './pages/Rubro'

import Detail from './pages/Detail';
import Checkout from './pages/Checkout';
import CartProvider from './context/CartContext'

function App() {

  return (
    //JSX
    <CartProvider >
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contacto" element={<Contact />}/>

          <Route path="/Rubro/:Rubro" element={<Rubro />}/>
          <Route path="/productos" element={<Productos />}/>
          <Route path="/productos/:id" element={<Detail />} />
          <Route path="/categoria/:categoryId" element={<Category />} />
          <Route path='/cart' element={<Checkout />}/>
          <Route path="*" element={<h1>ERROR 404 -  pagina no encontrada</h1>}/>
        </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
