import ItemCount from "../ItemCount/ItemCount";
//import './ItemDetail.scss'
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ data }) => {
  const [quantitySelected, setQuantitySelected] = useState(0);

  const {
    img,
    detalle,
    descripcion,
    precio,
    marca,
    categoria,
    iva,
    rubro,
    subrubro,
    stock,
  } = data;

  return (
    <>
      <h1>ItemDetail</h1>

      <div class="my-4 flex items-center justify-between">
        <ol
          role="list"
          class="flex items-center overflow-hidden"
          aria-label="Breadcrumb"
        >
          <li class="flex items-center">
            <Link
              to={`/categoria/${categoria}`}
              className="text-xs font-medium text-gray-500 hover:text-gray-700 md:mr-4 md:text-sm"
            >
              {categoria}{" "}
            </Link>
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
            <Link
              to={`/rubro/${rubro}`}
              className="text-xs font-medium text-gray-500 hover:text-gray-700 md:mr-4 md:text-sm"
            >
              {rubro}
            </Link>
          </li>
        </ol>
      </div>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-12">
        <div class="order-2 overflow-hidden rounded-md border border-neutral-300 bg-white shadow-md md:order-1 md:col-span-7">
          <div class="text-center">
            <span>
              <span></span>
            </span>
          </div>
          <div class="p-6 pt-0">
            <img src={`${img}`} alt="imagen" />
            <div class="mt-10 mb-5 flex cursor-default gap-8 overflow-x-auto pb-5"></div>
          </div>
        </div>
        <div class="order-1 rounded-md border border-neutral-300 bg-white p-4 text-neutral-700 shadow-md md:order-2 md:col-span-5">
          <div class="flex flex-row items-center gap-3">
            <h4 class="text-lg font-bold">{detalle}</h4>
          </div>
          <h3 className="mt-4 text-sm text-gray-700">{descripcion}</h3>
          <hr class="my-3" />

          <hr class="my-3" />
          <div class="flex">
            <div class="flex-1">
              <p class="text-xs font-medium">Precio unitario:</p>
              <h5 class="text-xsl font-bold text-secondary-500"> $ {precio}</h5>
              <p class="text-xs font-medium text-neutral-500">
                Impuestos incluídos
              </p>
            </div>
          </div>
          <hr class="my-3" />

          {quantitySelected > 0 ? (
            <button>
              <div class="flex flex-col gap-2 xl:flex-row">
                <div class="text-md flex items-center rounded-full border-0 primary font-medium text-white transition-all hover:bg-secondary-600 hover:shadow-md">
                  
                  
                  <button class="cursor-pointer items-center py-2.5 px-10 text-center text-sm font-medium">
                    <Link to="/cart">Terminar Compra </Link>
                  </button>
                </div>
              </div>
            </button>
          ) : (
            <ItemCount
              setQuantitySelected={setQuantitySelected}
              productData={data}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
