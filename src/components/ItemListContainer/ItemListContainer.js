import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

//import './ItemListContainer.scss'
//import products from '../../utils/products.mock'
import { collection, getDocs, where } from "firebase/firestore";
import db from "../../firebaseConfig";
import { async } from "@firebase/util";

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

const ItemListContainer = ({ section }) => {
  const [listProducts, setListProducts] = useState([]);

  const getProducts = async () => {
    const productCollection = collection(db, "ProductosElit");
    const productSnapshot = await getDocs(productCollection);
    const productList = productSnapshot.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      product.img = product.imagenes[0];
      product.imgmin = product.miniaturas[0];
      product.precio = parseFloat(product.precio).toFixed(2);
      console.log("firestore ", product);

      return product;
    });
    return productList;
  };

  useEffect(() => {
    getProducts().then((res) => {
      setListProducts(res);
    });
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
  }, []);

  return (
    <div className="">
      <h2 className="">{section}</h2>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
     
        <ItemList dataProducts={listProducts} />
      </div>
    </div>
  );
};

export default ItemListContainer;
