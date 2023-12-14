import Item from "../Item/Item"
import estilos from "./ItemList.module.css"

const ItemList = ({products})=>{
    return(
        <div className={estilos.itemListContainer}>
            {
                products.map(product=>{
                    return(
                        <Item key={product.id} {...product}/>
                    )
                })
            }
            
        </div>
)}

export default ItemList