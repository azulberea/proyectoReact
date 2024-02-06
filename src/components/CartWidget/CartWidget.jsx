import cartIcon from "./assets/cartIcon.png"
import { useCart } from "../../Context/CartContext"

const CartWidget = ()=>{

    const { totalQuantity } = useCart()

    const totalQuantityAdapted = totalQuantity > 99 ? "99+" : totalQuantity

    return(
        <div style={{position:"relative"}}>
            <img style={{marginLeft:"1em", marginRight:"0.5em", width:50, cursor:"pointer"}} src={cartIcon} />
            <p style={{position:"absolute", top:0, right:0, fontWeight:"bold", color:"#484143", fontSize:"larger"}}>{totalQuantityAdapted}</p>
        </div>
    )
}

export default CartWidget
