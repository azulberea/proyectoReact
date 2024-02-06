import { useCart } from "../../Context/CartContext"
import CartItem from "../CartItem/CartItem"
import estilos from "./CartView.module.css"
import kittySad from "../../assets/kittySad2.jpg"
import { Link } from "react-router-dom"
import Checkout from "../Checkout/Checkout"

const CartView = ()=>{

    const { cart, total } = useCart()

    return(
        <div style={{marginTop:"2rem"}}>
            {cart.length > 0 
                ? <div style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
                    {cart.map(product=>{
                        return(
                            <CartItem key={product.id} {...product}/>
                        )
                    })}
                    <div>
                        <h2 style={{fontWeight:"bolder", color:"#ff7b9c"}}>TOTAL: ${total}</h2>
                        <Link to="/checkout" element={<Checkout />}><button className={estilos.button}>Finalizar compra</button></Link>
                    </div>
                </div> 
                : <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <h1 style={{marginTop:"3rem"}}>Carrito vacío</h1>
                    <img src={kittySad}/></div>
            }
        </div>
    )
}

export default CartView