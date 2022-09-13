import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const [contador, setContador] = useState(1);
 // const [totalProducts, setTotalProducts] = useState(0);
//  const [totalPrice, setTotalPrice] = useState(0);


  /*

  const addProductToCart = (product, Quantity) => {
    let isInCart = cartProducts.find((cartItem) => cartItem.id === product.id);
    if (!isInCart) {
      
      
      

      setTotalProducts(totalProducts + 1);
      setTotalPrice(totalPrice + product.price);

      
 
      return setCartProducts((cartProducts) => [...cartProducts, product]);

      
    }
  };

*/

const addProductToCart = (product, Quantity) => {
  let newCart;
  let isInCart = cartProducts.find((cartItem) => cartItem.id === product.id);
  console.log("se agrego el producto:", product, "con cantidad:", Quantity);
  if (isInCart) {
    isInCart.quantity += Quantity;
    newCart = [...cartProducts];
    setTotalProducts();
    setTotalPrice();

  }else {
    setTotalProducts();
    setTotalPrice();
    isInCart = {...product,quantity: Quantity};
    newCart = [...cartProducts,isInCart];
  }
  setCartProducts(newCart)
   // return setCartProducts((cartProducts) => [...cartProducts, product]);

    
 
};

const setTotalPrice = () => {
 return cartProducts.reduce((prev, act) => prev + act.precio * act.quantity,0).toFixed(2);
}

const setTotalProducts = () => {
  return cartProducts.length


 }




  const deleteProduct = (product) => {
    console.log("Producto a eliminar:", product);
    setCartProducts(
      cartProducts.filter((cartProduct) => cartProduct.id !== product.id)
    );
    setTotalProducts();

    setTotalPrice();
  };

  const clear = () => {
    setCartProducts([]);
    setTotalProducts(0);
    setTotalPrice(0);
  };

  const data = {
    cartProducts,
    setCartProducts,
    setContador,
    deleteProduct,
    clear,
    addProductToCart,
    setTotalProducts,
    setTotalPrice,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartProvider;

export { CartContext };
