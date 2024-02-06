import estilos from "./CartItem.module.css"
import { useCart } from "../../Context/CartContext"

const CartItem = ({id, name, img, price, quantity, category, stock})=>{

    const {removeItem} = useCart()


    return(
        <div className={estilos.carritoCard}>
        <img src={img}/>
        <div>
            <p>{name}</p>
            <p>${price}</p>
            <hr></hr>
            {quantity > 1 && <p>-${price*quantity}-</p>}
        </div>
        <div>
            <p className={estilos.pCantidad}>{quantity}</p>
        </div>
        <button onClick={()=>{removeItem(id)}}>X</button>
        </div>
    )
}

export default CartItem