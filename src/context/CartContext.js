import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const addProductToCart = (product,Quantity) => {
        let isInCart = cartProducts.find(cartItem => cartItem.id === product.id)
        if(!isInCart) {
            console.log("se agrego el producto:", product, "con cantidad:",Quantity)
            console.log("aca hay que encontrar cantidad ", cartProducts)
            
            setTotalProducts(totalProducts + 1)
            setTotalPrice(totalPrice + product.price)
            return setCartProducts(cartProducts => [...cartProducts, product])
      

        }
    }

    const deleteProduct = (product) => {
        console.log("Producto a eliminar:", product)
        setCartProducts(cartProducts.filter( (cartProduct) => cartProduct.id !== product.id) )
        setTotalProducts(totalProducts - 1)
       
        setTotalPrice(product.price )



    }

    const clear = () => {
        setCartProducts([])
        setTotalProducts(0)
        setTotalPrice(0)
    }

    const data = {
        cartProducts,
        setCartProducts,
        deleteProduct,
        clear,
        addProductToCart,
        totalProducts,
        totalPrice
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export { CartContext }