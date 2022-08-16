import { useState, useEffect, useContext } from 'react'
import './ItemProduct.scss'

import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';

const ItemProduct = ({data, action}) => {
    const { handleClick, name } = useContext(CartContext)


    const [contador, setContador] = useState(1)
    const {title, image, price, stock, id} = data

    const addNumber = () => {
        setContador(contador + 1)
    }
    const removeNumber = () => {
        setContador(contador - 1)
    }

    useEffect( () => {
        console.log("Actualizacion")
        // setContador(1)
    }, [contador])

    const addToCart = (e) => {
        console.log("click Producto", e)
        e.preventDefault();
    }


    return(
        <div className="item-product">
            <Link to={`/productos/${id}`}> 
                <h1>{name}</h1>
 
                <img src={`/assets/${image}`} alt="Imagen producto" />
                <div className='detail-product'>
                    <p>{title}</p>

                    <span onClick={addToCart}>$ {price}</span>
                    <button onClick={addToCart}>AÑADIR AL CARRITO</button>
                </div>
            </Link>
        </div> 
    )
}

export default ItemProduct