import ItemListContainer from "../ItemListContainer/ItemListContainer"
import estilos from "./Navbar.module.css"
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import CartView from "../CartView/CartView"

const Navbar = ()=>{

    return(
        <nav className={estilos.navbar}>
            <Link className={estilos.brand} to="/" element={<ItemListContainer/>} >
                    <img src="/img/myMelody.png" style={{height:100}}></img>
                    <h1 className={estilos.logo}>sanrioStore</h1>
            </Link>
            <div className={estilos.categories}>
                <Link className={estilos.margin} to="/" element={<ItemListContainer/>}>ver todo</Link> 
                <Link className={estilos.margin} to="/category/indumentaria" element={<ItemListContainer/>}>indumentaria</Link>
                <Link className={estilos.margin} to="/category/peluches" element={<ItemListContainer/>}>peluches</Link>
                <Link className={estilos.margin} to="/category/accesorios" element={<ItemListContainer/>}>accesorios</Link>
                <Link to="/carrito" element={<CartView/>}><CartWidget /> </Link> 
            </div>
        </nav>
    )
}

export default Navbar