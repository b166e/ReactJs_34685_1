import { useEffect, useState ,Fragment} from "react";
import { useParams } from "react-router-dom";
import db from "../../firebaseConfig";

import { Popover, Transition } from '@headlessui/react'





import {
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import ItemList from "../ItemList/ItemList";



const solutions = [
  { name: 'Blog', description: 'Learn about tips, product updates and company culture.', href: '#' },
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums of contact support.',
    href: '#',
  },
  ]


const ItemDetailRubro = ({ section }) => {
  const [listProducts, setListProducts] = useState([]);
  const { Rubro } = useParams();

  const getProducts = async () => {
    const productCollection = query(
      collection(db, "ProductosElit")
      , where("rubro", "==",Rubro )
    );
 

    const productSnapshot = await getDocs(productCollection);
    const productList = productSnapshot.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      product.img = product.imagenes[0];
      product.imgmin = product.miniaturas[0];
      product.precio = parseFloat(product.precio).toFixed(2);
      const categoria = product.categoria

      return product;
    });
    return productList;
  };

  useEffect(() => {
    getProducts().then((res) => {
      setListProducts(res);
    });
  }, [Rubro]);

  

  return (
    







<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">

<div class="grid grid-cols-1 gap-6 lg:grid-cols-4">
  <div class="hidden pt-4 md:col-span-1 lg:block">
    <h3 class=" text-2xl font-semibold text-primary-500">
{section} {[Rubro]}
    </h3>

    <div class="mt-4 text-neutral-700"></div>
    <div>
      <div class="mb-2">
        <label
          for="sortBy"
          class="w-full border-b-2 border-b-neutral-300 pb-1 text-sm font-semibold leading-10"
        >
          Ordenar por
        </label>
        <select
          id="sortBy"
          name="sortBy"
          class="mt-1 block w-full rounded-md border-0 bg-transparent p-0 text-base focus:border-0 focus:outline-none focus:ring-0 sm:text-sm"
        >
          <option value="stock:desc" selected="">
            Stock: mayor a menor
          </option>
          <option value="price:desc">Precio: mayor a menor</option>
          <option value="price:asc">Precio: menor a mayor</option>
          <option value="price:asc">Marca: A-Z</option>
          <option value="price:asc">Producto: A-Z</option>
        </select>
      </div>
    </div>
 
    <div class="mt-2 mb-4 text-neutral-700"></div>
  </div>
  <div class="md:col-span-3">
    <div class="grid grid-cols-2 gap-4 py-5 md:grid-cols-3 lg:grid-cols-4">

    <ItemList dataProducts={listProducts} />
    </div>
  
  </div>
</div>








</div>


  


  );
};

export default ItemDetailRubro;

