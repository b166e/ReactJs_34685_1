import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
//import './ItemDetailContainer.scss'
//import products from "../../utils/products.mock"
import { useParams } from 'react-router-dom'

//Firebase
import db from "../../firebaseConfig"
import { doc, getDoc } from "firebase/firestore"
import { async } from "@firebase/util"

const ItemDetailContainer = () => {
    const [productData, setProductData] = useState({})
    
    const { id } = useParams()

    useEffect( () => {
        getProduct()
        .then((res) => {
            setProductData(res)
        })
    }, [id])

    const getProduct = async () => {
        const docRef = doc(db, 'ProductosElit', id)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()
        product.id = docSnapshot.id
        product.img = product.imagenes[0]
        product.imgmin = product.miniaturas[0]
        
        product.precio = parseFloat(product.precio).toFixed(2);
      


       // product.product.imagenPrincipal = docSnapshot.product.imagenes[0]
      //  console.log('data con id:', product.product.imagenes[0])
      //  console.log('data con img:', docSnapshot.imagenes[0])
   
        console.log('data con img:', product)
    
        return product
    }

   
    



    return(
        <div className={`container-item-detail `}>
       
       <h1>ItemDetailContainer: Filtra Productos</h1>
            <ItemDetail data={productData} />
        
        </div>
    )
}

export default ItemDetailContainer











