import { getItemById } from "../../asyncMock" 
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import Loader from "../Loader/Loader"

const ItemDetailContainer = ()=>{

    const [load, setLoad] = useState(true)
    const [item, setItem] = useState("")
    const {itemId} = useParams()

    useEffect(()=>{ 
        
        setLoad(true)



            getItemById(itemId)
                .then((response)=>{
                    setItem(response)
                }).finally(()=>setLoad(false))
        },[itemId])

        if(load){
            return(
                <Loader />
            )
        }

    return(
        <ItemDetail item={item}/>
    )
}


export default ItemDetailContainer
