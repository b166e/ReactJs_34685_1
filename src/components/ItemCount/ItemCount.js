import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemCount = ({ setQuantitySelected, productData }) => {
  const { addProductToCart } = useContext(CartContext);

  const [countQuantity, setCountQuantity] = useState(1);

  const addQuantity = () => {
    setCountQuantity(countQuantity + 1);
  };

  const removeQuantity = () => {
    if (countQuantity == 1) {
      setCountQuantity(1);
    } else {
      setCountQuantity(countQuantity - 1);
    }
  };

  const onAdd = () => {
    addProductToCart(productData, countQuantity);
    setQuantitySelected(countQuantity);
  };

  return (
    <>
      <div class="flex flex-col  xl:flex-row">
        <div class="text-md flex items-center rounded-full border-0 secondary font-medium  transition-all hover:shadow-md">
          <div class="flex flex-row items-center rounded-full border   py-2.5 px-5 bg-white  text-slate-900">
            <button onClick={removeQuantity}>-</button>
            <div class="w-12  text-center">
              {" "}
              <span>{countQuantity}</span>
            </div>

            <button onClick={addQuantity}>+</button>
          </div>

          <button
            onClick={onAdd}
            class="cursor-pointer  items-center py-2.5 px-10 text-center text-sm font-medium"
          >
            Añadir a carrito
          </button>
        </div>
      </div>

     
    </>
  );
};

export default ItemCount;
