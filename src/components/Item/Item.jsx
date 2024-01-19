import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import estilos from "./Item.module.css"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Item = ({id, name, img, price})=>{

    const toastProductoAgregado = ()=>{
        toast('🎀 Producto agregado al carrito correctamente!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }

    return (
    <div key={id} className={estilos.card}>
        <button className={estilos.addToCart} onClick={toastProductoAgregado}>
            add to cart
        </button>
        <img className={estilos.image} src={img}/>
        <span className={estilos.title}>{name}</span>
        <span className={estilos.price}>${price}</span>
        <Link to={`/detail/${id}`} element={<ItemDetailContainer/>}className={estilos.detail}>ver detalles</Link>
        <ToastContainer />
    </div>
)}

export default Item