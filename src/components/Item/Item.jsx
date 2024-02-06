import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import estilos from "./Item.module.css"
import { Link } from "react-router-dom"
import { useCart } from "../../Context/CartContext"

const Item = ({id, name, img, price, category, stock})=>{

    const { addItem } = useCart()
    const { cart } = useCart()


    const handleOnClick = ()=>{
        const objProductToAdd = {
            id, name, price, category, img, quantity: 1
        }; addItem(objProductToAdd, 1, stock); console.log(cart)}

    return (
    <div key={id} className={estilos.card}>
        <button className={estilos.addToCart} onClick={ handleOnClick }>
            agregar al carrito
        </button>
        <img className={estilos.image} src={img}/>
        <span className={estilos.title}>{name}</span>
        <span className={estilos.price}>${price}</span>
        <Link to={`/detail/${id}`} element={<ItemDetailContainer/>}className={estilos.detail}>ver detalles</Link>
    </div>
)}

export default Item