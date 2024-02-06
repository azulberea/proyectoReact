import ItemCount from "../ItemCount/ItemCount"
import estilos from "./ItemDetail.module.css"
import { useCart } from "../../Context/CartContext"

const ItemDetail = ({ item })=>{

    const {addItem} = useCart()

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id:item.id, name:item.name, price:item.price, category:item.category, img:item.img, quantity:quantity
        }; addItem(objProductToAdd, quantity, item.stock)}

    return(
    <div style={{display:"flex"}}>
        <div>
            <img src={item.img} />
        </div>
        <div className={estilos.productInfo}>
            <h1 className={estilos.margins}>{item.name}</h1>
            <h2 className={estilos.margins} style={{fontWeight:"bold"}}>${item.price}</h2>
            <p className={estilos.margins}>{item.description}</p>
            <ItemCount stock={item.stock} onAdd={handleOnAdd}/>
        </div>
    </div>
    )
}

export default ItemDetail