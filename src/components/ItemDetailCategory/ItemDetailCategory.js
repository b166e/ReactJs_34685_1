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


const ItemDetailCategory = ({ section }) => {
  const [listProducts, setListProducts] = useState([]);
  const { categoryId } = useParams();

  const getProducts = async () => {
    const productCollection = query(
      collection(db, "ProductosElit")
    , where("categoria", "==", categoryId)
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
  }, [categoryId]);

  

  return (


   

      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="mt-4 flex w-full items-center justify-between gap-2">
        <ol
          role="list"
          class="flex items-center overflow-hidden"
          aria-label="Breadcrumb"
        >
          <li class="flex items-center">
            <a
              class="text-xs font-medium text-gray-500 hover:text-gray-700 md:mr-4 md:text-sm"
              href="/c/computos"
            >
              Computos
            </a>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              class="h-5 w-5 flex-shrink-0 text-gray-400"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </li>
          <li class="flex items-center">
            <a
              class="text-xs font-medium text-gray-500 hover:text-gray-700 md:mx-4 md:text-sm"
              href="/c/computos/computadoras"
            >
              Computadoras
            </a>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              class="h-5 w-5 flex-shrink-0 text-gray-400"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </li>
          <li class="flex items-center">
            <a
              class=" text-xs  text-gray-500 hover:text-gray-700 md:mx-4 md:text-sm"
              href="/c/computos/computadoras/all-in-one"
            >
              All In One
            </a>
          </li>
        </ol>
        <div class="flex items-center justify-end gap-2">
          <div class="relative inline-flex rounded-md shadow-sm">
            <button class="border-neutral-300 bg-white text-neutral-500 hover:bg-neutral-100 relative inline-flex items-center rounded-l-md border border-r-0 px-2 py-2 text-sm font-medium transition-all focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="bars"
                class="svg-inline--fa fa-bars fa-fw "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
                ></path>
              </svg>
            </button>
            <button class="border-primary-600 bg-primary-500 text-white hover:bg-primary-600 relative inline-flex items-center rounded-r-md border border-l-0 px-2 py-2 text-sm font-medium transition-all focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="grid-2"
                class="svg-inline--fa fa-grid-2 fa-fw "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M192 176C192 202.5 170.5 224 144 224H48C21.49 224 0 202.5 0 176V80C0 53.49 21.49 32 48 32H144C170.5 32 192 53.49 192 80V176zM192 432C192 458.5 170.5 480 144 480H48C21.49 480 0 458.5 0 432V336C0 309.5 21.49 288 48 288H144C170.5 288 192 309.5 192 336V432zM256 80C256 53.49 277.5 32 304 32H400C426.5 32 448 53.49 448 80V176C448 202.5 426.5 224 400 224H304C277.5 224 256 202.5 256 176V80zM448 432C448 458.5 426.5 480 400 480H304C277.5 480 256 458.5 256 432V336C256 309.5 277.5 288 304 288H400C426.5 288 448 309.5 448 336V432z"
                ></path>
              </svg>
            </button>
          </div>
          <div class="relative block lg:hidden">
            <button
              class="border-neutral-300 bg-white text-neutral-500 hover:bg-neutral-100 relative inline-flex items-center rounded-md border px-2 py-2 text-sm font-medium transition-all focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              id="headlessui-popover-button-:r3e:"
              type="button"
              aria-expanded="false"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="filter"
                class="svg-inline--fa fa-filter fa-fw "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M3.853 54.87C10.47 40.9 24.54 32 40 32H472C487.5 32 501.5 40.9 508.1 54.87C514.8 68.84 512.7 85.37 502.1 97.33L320 320.9V448C320 460.1 313.2 471.2 302.3 476.6C291.5 482 278.5 480.9 268.8 473.6L204.8 425.6C196.7 419.6 192 410.1 192 400V320.9L9.042 97.33C-.745 85.37-2.765 68.84 3.854 54.87L3.853 54.87z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-4">
        <div class="hidden pt-4 md:col-span-1 lg:block">
          <h3 class=" text-2xl font-semibold text-primary-500">
          {section}
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
          <div>
            <label
              for="sortBy"
              class="w-full border-b-2 border-b-neutral-300 pb-1 text-sm font-semibold leading-10"
            >
              Marcas
            </label>
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

export default ItemDetailCategory;

