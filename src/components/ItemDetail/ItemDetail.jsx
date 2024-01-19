import ItemCount from "../ItemCount/ItemCount"
import estilos from "./ItemDetail.module.css"

const ItemDetail = ({item})=>{

    

    return(
    <div style={{display:"flex"}}>
        <div>
            <img src={item.img} />
        </div>
        <div className={estilos.productInfo}>
            <h1 className={estilos.margins}>{item.name}</h1>
            <h2 className={estilos.margins} style={{fontWeight:"bold"}}>${item.price}</h2>
            <p className={estilos.margins}>{item.description}</p>
            <ItemCount stock={item.stock}/>
        </div>
    </div>
    )
}

export default ItemDetail