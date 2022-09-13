import { useState, useEffect, useContext } from "react";
//import './ItemProduct.scss'

import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemProduct = ({ data, action }) => {
  const { handleClick, name } = useContext(CartContext);

  const [contador, setContador] = useState(1);

  //const {  product, id } = data;

  const addNumber = () => {
    setContador(contador + 1);
  };
  const removeNumber = () => {
    setContador(contador - 1);
  };

  useEffect(() => {
    console.log("Actualizacion");
    // setContador(1)
  }, [contador]);

  const addToCart = (e) => {
    console.log("click Producto", e);
    e.preventDefault();
  };

  return (
    <Link to={`/productos/${data.id}`} className="group">
  


  

      <div class="border-neutral-300 mx-0 my-0 rounded-md border bg-white shadow-md transition-all hover:border-primary-500 hover:shadow-lg">
        <div class="absolute z-10 mt-2 ml-2 flex gap-1"></div>
        <div class="flex justify-end border-b border-neutral-300 p-3">
          <div class="absolute z-10 -mr-3 -mt-1 flex cursor-default flex-col items-center justify-start gap-0.5 rounded-bl bg-white/20 pl-1 pb-2 pr-2 transition-all hover:bg-white/90 hover:px-3 hover:shadow-lg hover:backdrop-blur-sm">
            <div>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="heart"
                class="svg-inline--fa fa-heart text-red-400/[50%] transition-all hover:text-red-400"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"
                ></path>
              </svg>
            </div>
            <div>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="bell"
                class="svg-inline--fa fa-bell text-neutral-600/[50%] transition-all hover:text-neutral-600"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M256 32V49.88C328.5 61.39 384 124.2 384 200V233.4C384 278.8 399.5 322.9 427.8 358.4L442.7 377C448.5 384.2 449.6 394.1 445.6 402.4C441.6 410.7 433.2 416 424 416H24C14.77 416 6.365 410.7 2.369 402.4C-1.628 394.1-.504 384.2 5.26 377L20.17 358.4C48.54 322.9 64 278.8 64 233.4V200C64 124.2 119.5 61.39 192 49.88V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32V32zM216 96C158.6 96 112 142.6 112 200V233.4C112 281.3 98.12 328 72.31 368H375.7C349.9 328 336 281.3 336 233.4V200C336 142.6 289.4 96 232 96H216zM288 448C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288z"
                ></path>
              </svg>
            </div>
            <div class="hidden justify-center lg:block">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="square"
                class="svg-inline--fa fa-square text-neutral-600/[50%] transition-all hover:text-neutral-600"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 80H64C55.16 80 48 87.16 48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80z"
                ></path>
              </svg>
            </div>
            <div>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="badge-dollar"
                class="svg-inline--fa fa-badge-dollar text-neutral-600/[50%] transition-all hover:text-neutral-600"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M276.1 158.2C284.2 159.4 296.8 161.9 302 163.3C312.7 166.2 319.1 177.1 316.2 187.8C313.4 198.5 302.4 204.8 291.7 201.1C287.4 200.8 272.3 197.9 267.4 197.1C253.5 194.9 241.9 196.7 234.3 200.2C226.8 203.6 224.5 207.7 223.9 210.8C223.2 214.1 223.9 216.9 224.3 217.7C224.8 218.8 225.1 220.4 229.1 222.5C236.2 227.4 247.3 230.8 262.9 235.5L263.7 235.8C277.2 239.8 294.9 245.2 308 254.8C315.2 259.1 321.1 267 326.1 276.6C330.3 286.2 331.2 296.9 329.2 308C325.7 328.3 312.3 342.2 295.4 349.4C289.6 351.9 283.4 353.6 276.1 354.7V362.7C276.1 373.8 267.1 382.8 256.9 382.8C245.8 382.8 236.8 373.8 236.8 362.7V353.8C226.2 351.5 211.5 346.5 202.3 343.3C200.3 342.7 198.6 342.1 197.2 341.6C186.8 338.2 181.1 326.8 184.6 316.3C188.1 305.9 199.4 300.2 209.9 303.7C212.1 304.4 214.4 305.2 216.8 306C227.4 309.6 239.6 313.8 246.4 314.9C260.1 317.2 272.4 315.7 279.7 312.6C286.3 309.8 289 305.9 289.8 301.2C290.7 296.4 290 293.9 289.4 292.5C288.8 291.1 287.5 289.3 284.5 287.1C277.6 282.1 266.7 278.5 251.3 273.8L248.1 273.1C235.9 269.2 219.2 264.1 206.6 255.6C199.5 250.8 192.5 244.1 188.1 234.8C183.7 225.4 182.6 214.9 184.5 203.1C187.9 184.5 201.7 171 217.8 163.7C223.7 161.1 230.1 159.1 236.8 157.8V149.3C236.8 138.2 245.8 129.2 256.9 129.2C267.1 129.2 276.1 138.2 276.1 149.3L276.1 158.2zM344.1 43.41C377 39.1 411.6 49.59 437 74.98C462.4 100.4 472.9 134.1 468.6 167.9C494.1 188.2 512 220.1 512 256C512 291.9 494.1 323.8 468.6 344.1C472.9 377 462.4 411.6 437 437C411.6 462.4 377 472.9 344.1 468.6C323.8 494.1 291.9 512 256 512C220.1 512 188.2 494.1 167.9 468.6C134.1 472.9 100.4 462.4 74.98 437C49.6 411.6 39.1 377 43.41 344.1C17.04 323.8 0 291.9 0 256C0 220.1 17.04 188.2 43.42 167.9C39.1 134.1 49.6 100.4 74.98 74.98C100.4 49.6 134.1 39.1 167.9 43.41C188.2 17.04 220.1 0 256 0C291.9 0 323.8 17.04 344.1 43.41L344.1 43.41zM190.1 99.07L172 93.25C150.4 86.6 125.1 91.87 108.9 108.9C91.87 125.1 86.6 150.4 93.25 172L99.07 190.1L81.55 200.3C61.54 210.9 48 231.9 48 256C48 280.1 61.54 301.1 81.55 311.7L99.07 321L93.25 339.1C86.6 361.6 91.87 386 108.9 403.1C125.1 420.1 150.4 425.4 172 418.7L190.1 412.9L200.3 430.5C210.9 450.5 231.9 464 256 464C280.1 464 301.1 450.5 311.7 430.5L321 412.9L339.1 418.8C361.6 425.4 386 420.1 403.1 403.1C420.1 386 425.4 361.6 418.7 339.1L412.9 321L430.5 311.7C450.5 301.1 464 280.1 464 256C464 231.9 450.5 210.9 430.5 200.3L412.9 190.1L418.7 172C425.4 150.4 420.1 125.1 403.1 108.9C386 91.87 361.6 86.6 339.1 93.25L321 99.07L311.7 81.55C301.1 61.54 280.1 48 256 48C231.9 48 210.9 61.54 200.3 81.55L190.1 99.07z"
                ></path>
              </svg>
            </div>
          </div>
          <a
            href="/producto/1561-cartucho-de-tinta-21-negra"
            class="cursor-pointer"
          >
              <img
          src={`${data.img}`}
          alt={`/assets/`}
          className="w-full h-full object-center object-cover group-hover:opacity-75"
        />
            </a> 

          
        </div>
        <div class="px-2 pt-2 pb-0">
          <div class="min-h-[55px]">
            <h3 class="text-sm font-semibold leading-tight text-neutral-700 line-clamp-2">
              {data.detalle}
            </h3>
            <h5 class="mt-1 flex items-center truncate text-xs text-neutral-400">
              {data.rubro}
            </h5>
          </div>
        </div>
        <div class="px-2 py-0">
          <div class="my-2 border-b border-neutral-200"></div>
          <div class="text-center">
            
            <h5 class="text-md mt-2 font-bold text-primary-500">
              $ {data.precio}
            </h5>
            <p class="text-xs font-semibold text-neutral-500">
              Impuestos incluídos
            </p>
            <div class="my-2">
            <button>
              <div class="flex flex-col gap-2 xl:flex-row">
                <div class="text-xs flex items-center rounded-full border-0 secondary font-medium text-white transition-all hover:bg-secondary-600 hover:shadow-md">
                  
                  
                  <button class="cursor-pointer items-center py-2.5 px-10 text-center  font-medium">
                    <Link to="/cart">Añadir a carrito </Link>
                  </button>
                </div>
              </div>
            </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemProduct;
