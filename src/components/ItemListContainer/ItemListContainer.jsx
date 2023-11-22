import estilos from "./ItemListContainer.module.css"


const ItemListContainer = ({ greeting })=>{
    return(
        <div>
            <h1 className={estilos.saludo}>{greeting}</h1>
        </div>
    )
}
export default ItemListContainer