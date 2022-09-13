import { useState, useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom'
const CartWidget = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const { cartProducts, clear, deleteProduct, setTotalProducts,setTotalPrice } =
    useContext(CartContext);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="cart-widget">
      <ShoppingCartIcon
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />
      {cartProducts.length !== 0 && (
        <span class="-ml-3 rounded-full  py-0.5 px-1.5 text-xs font-medium ">
          {setTotalProducts()}
        </span>
      )}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >

<div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
<div className="text-lg font-medium text-gray-900"> Tu Carrito</div>
                      <div className="flex items-start justify-between">
                     
<div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {cartProducts.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                   src={`${product.img}`}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={product.href}> {product.detalle} </a>
                                      </h3>
                                      <p className="ml-4">$ {product.precio}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Cantidad {product.quantity}</p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium secondary hover:secondary"
                                      >
                                        <DeleteIcon onClick={() => deleteProduct(product)} />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
</div></div>
                      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
            <div className="flex justify-between font-medium text-gray-900">
              <p>Subtotal</p>
              <p>$ {setTotalPrice()}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Envío calculado en el Carrito.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="flex items-center justify-center rounded-full border border-transparent rounded-full border-[#EC7616] text-[#EC7616] bg-white   px-6 py-3 text-base font-medium shadow-sm "
              >
                 <Link to="/cart">Comenzar Pedido </Link>
                
              </a>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                o {" "}
                <button
                  type="button"
                  className="font-medium secondary hover:secondary"
                 
                >
                 Seguir Comprando<span aria-hidden="true"> &rarr;</span>
                </button>
              </p>
            </div>
          </div>

      </Menu>
    </div>
  );
};

export default CartWidget;
