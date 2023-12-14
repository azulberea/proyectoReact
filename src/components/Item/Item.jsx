import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import estilos from "./Item.module.css"
import { Link } from "react-router-dom"

const Item = ({id, name, img, price})=>{

    return (
    <div key={id} className={estilos.card}>
        <img className={estilos.image} src={img}/>
        <span className={estilos.title}>{name}</span>
        <span className={estilos.price}>${price}</span>
        <Link to={`/detail/${id}`} element={<ItemDetailContainer/>}className={estilos.detail}>ver detalles</Link>
    </div>
)}

export default Item