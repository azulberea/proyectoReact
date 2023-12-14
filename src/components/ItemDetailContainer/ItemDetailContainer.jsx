import { getItemById } from "../../asyncMock" 
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import estilos from "../ItemDetailContainer/ItemDetailContainer.module.css"

const ItemDetailContainer = ()=>{

    const [item, setItem] = useState("")
    const {itemId} = useParams()
    

    useEffect(()=>{
        getItemById(itemId)
            .then(response =>{
                setItem(response)
            })
    },[itemId])

    return(
        <div>
            <h1>detalle del producto</h1>
            <div>
                <img src={item.img}/>
            </div>
            <div>
                <h1>{item.name}</h1>
                <p>${item.price}</p>
                <p>{item.description}</p>
                <p>stock:{item.stock}</p>
                <button>agregar al carrito</button>
            </div>
        </div>
    )
}


export default ItemDetailContainer
