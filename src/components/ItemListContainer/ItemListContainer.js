import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.scss'
import products from '../../utils/products.mock'
import { collection, getDocs } from "firebase/firestore"
import db from "../../firebaseConfig"

//Funcion asincrona
// const getLog = async () => {
//     try {
//         const responseLog = await logPromise()
//         console.log("Respuesta desde async function" + responseLog)
//     }
//     catch(error) {
//         console.log(error)
//     }
// }
//getLog()
const ItemListContainer = ({section}) => {

    const [listProducts, setListProducts] = useState([])

    const getProducts = async () => {
        const productCollection = collection(db, 'productos')
        const productSnapshot = await getDocs(productCollection)
        const productList = productSnapshot.docs.map( (doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
    }



    useEffect(() => {
        getProducts()
        .then((res) => {
            setListProducts(res)
        })
        // getProducts
        //     .then( (res) => { // Respuesta OK
        //         //console.log("Productos: ", res)
        //         setListProducts(res)
        //     })
        //     .catch( (error) => { // Falla la respuesta
        //         console.log("la llama fallo")
        //     })
        //     .finally( () => { // Siempre que termina por OK o Fallo
        //     //setSpinner(false) 
        //     })
    }, [])




    return(
        <div className='list-products'>
            <h2>{section}</h2>
            <ItemList dataProducts={listProducts}/>
        </div>
    )
}

export default ItemListContainer