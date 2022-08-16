import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.scss'
import { useState } from "react"
import { Link } from 'react-router-dom'

const ItemDetail = ({data, setShowModal}) => {
    const [quantitySelected, setQuantitySelected] = useState(0)
    return(
        <>
            <div className="item-detail-image" >
                <img 
                    src={`/assets/${data.image}`} 
                    alt="imagen" 
                    onClick={() => setShowModal(true)}
                />
            </div>
            <div className="item-detail-info">

                <h2>{data.title}</h2>
                <p className="detail-info__price">$ {data.price}</p>
           
            
                {console.log("quantitySelected: ", quantitySelected)}
    {
        quantitySelected > 0 ? <button><Link to="/cart">TERMINAR COMPRA</Link></button> : <ItemCount setQuantitySelected={setQuantitySelected} productData={data}/>
    }
                
                
            </div>
        </>
    )
}

export default ItemDetail