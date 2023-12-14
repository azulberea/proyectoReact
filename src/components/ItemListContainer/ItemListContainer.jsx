import estilos from "./ItemListContainer.module.css"
import { getItemById, getItems, getItemsByCategory } from "../../asyncMock" 
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import Loader from "../Loader/Loader"


const ItemListContainer = ({ greeting })=>{

    const [products, setProducts] = useState([])
    const [load, setLoad] = useState(true)
    const { categoryId } = useParams()

    useEffect(()=>{
        
        setLoad(true)

        const asyncFunction = categoryId ? getItemsByCategory : getItems

        asyncFunction(categoryId)
        .then((Response)=>{
            setProducts(Response)
        }).finally(()=>setLoad(false))
    },[categoryId]) 

    if(load){
        return(
            <Loader />
        )
    }

    return(
        <div>
            <h1 className={estilos.saludo}>{greeting}</h1>
            <div className={estilos.itemListContainer}>
                <ItemList products={products}></ItemList>
            </div>
        </div>
    )
}

export default ItemListContainer