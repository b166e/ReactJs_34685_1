import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
//import "./Cart.scss";
import Modal from "../Modal/Modal";
import db from "../../firebaseConfig.js";
import DeleteIcon from "@mui/icons-material/Delete";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    cartProducts,
    deleteProduct,
    clear,
    setTotalPrice,
    setTotalProducts,
  } = useContext(CartContext);
  const [success, setSuccess] = useState();

  const [order, setOrder] = useState({
    items: cartProducts.map((product) => {
      return {
        id: product.id,
        title: product.detalle,
        price: product.precio,
        img: product.imgmin,
        quantity: product.quantity,
      };
    }),

    buyer: {},
    date: new Date().toLocaleString(),
    total: setTotalPrice(),
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitData = (e) => {
    e.preventDefault();
    console.log("order para enviar: ", { ...order, buyer: formData });
    pushData({ ...order, buyer: formData });
  };

  const pushData = async (newOrder) => {
    const collectionOrder = collection(db, "ordenes");
    const orderDoc = await addDoc(collectionOrder, newOrder);
    setSuccess(orderDoc.id);
    console.log("ORDEN GENERADA", orderDoc);
  };

  return (
    <div className="checkout-page">
      <div className="info-checkout">
        {console.log("order: ", order)}



        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-xl font-semibold text-gray-900">Carrito</h1>
        
            </div>
        
          </div>
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                     
                      <th
                        scope="col"
                        className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                      >
                        
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                      >
                        
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                      >
                        Precio Unitario
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {cartProducts.map((cartProduct) => {
                      //  const { title, image, price, quantity } = cartProduct.product.detalle;
                      return (
                        <tr>
                   
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            {" "}
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src={`${cartProduct.img}`}
                                alt="{product.imageAlt}"
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            {cartProduct.detalle}
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            {cartProduct.precio}
                          </td>

                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            {" "}
                            <button className="cart-product__action">
                              {" "}
                              <DeleteIcon
                                onClick={() => deleteProduct(cartProduct)}
                              />
                            </button>
                          </td>

                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0">
                            <a
                              href="#"
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              Edit<span className="sr-only"></span>
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="info-subtotal">
        <div className="total-purchase">
          <h3>RESUMEN DE PEDIDO</h3>

          <div className="item-purchase h4">
            <p>SUB-TOTAL</p>

            <p> $ {setTotalPrice()}</p>
          </div>

          <div className="item-purchase strong">
            <p>PRODUCTOS</p>

            <p>{setTotalProducts()} </p>
          </div>
          <div className="item-purchase">
            <p>ENTREGA</p>
            <p>GRATIS</p>
          </div>
          <div className="item-purchase">
            <p>TOTAL :</p>
            <p>$ {setTotalPrice()}</p>
          </div>

          {cartProducts.length !== 0 && (
            <div class="item-purchase">
              <button
                onClick={() => clear()}
                className={
                  "inline-flex items-center px-10 py-1 border  text-base font-medium rounded-full border-[#EC7616] text-[#EC7616] bg-white focus:outline-none focus:ring-2   "
                }
              >
                <Link to="/">BORRAR TODO</Link>
              </button>

              <button
                onClick={() => setShowModal(true)}
                className={
                  "inline-flex items-center px-10 py-1 border border-transparent text-base font-medium rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 primary "
                }
                type="button"
              >
                IR A PAGAR
              </button>
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <Modal title="DATOS DE CONTACTO" close={() => setShowModal()}>
          {success ? (
            <>
              <h2>Su orden se genero correctamente</h2>
              <p>ID de compra : {success}</p>
            </>
          ) : (
            <form onSubmit={submitData}>
              <input
                type="text"
                name="name"
                placeholder="Ingrese el nombre"
                onChange={handleChange}
                value={formData.name}
              />
              <input
                type="number"
                name="phone"
                placeholder="Ingrese el telefono"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Ingrese el mail"
                value={formData.email}
                onChange={handleChange}
              />
              <button type="submit">Enviar</button>
            </form>
          )}
        </Modal>
      )}
    </div>
  );
};

export default Cart;
