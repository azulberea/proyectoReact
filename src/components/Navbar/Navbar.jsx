import ItemListContainer from "../ItemListContainer/ItemListContainer"
import estilos from "./Navbar.module.css"
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = ()=>{

    return(
        <nav className={estilos.flex}>
            <Link className={estilos.brand} to="/" element={<ItemListContainer/>} >
                    <img src="/img/myMelody.png" className={estilos.resize}></img>
                    <h1 className={estilos.logo}>sanrioStore</h1>
            </Link>
            <div className={estilos.categories}>
                <Link className={estilos.margin} to="/category/indumentaria" element={<ItemListContainer/>}>indumentaria</Link>
                <Link className={estilos.margin} to="/category/peluches" element={<ItemListContainer/>}>peluches</Link>
                <Link className={estilos.margin} to="/category/accesorios" element={<ItemListContainer/>}>accesorios</Link>
                <CartWidget />  
            </div>
        </nav>
    )
}

export default Navbar