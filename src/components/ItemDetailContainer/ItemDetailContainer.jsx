import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import Loader from "../Loader/Loader"
import { getDoc, doc, collection, getDocs } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemDetailContainer = ({ })=>{

    const [component, setComponent] = useState(null)
    const [load, setLoad] = useState(true)
    const [item, setItem] = useState("")
    const {itemId} = useParams()
    const location = useLocation()


    useEffect(()=>{ 
        
        setLoad(true)

        const documentRef = doc(db, 'products', itemId)

        getDoc(documentRef)
            .then(QueryDocumentSnapshot=>{
                const fields = QueryDocumentSnapshot.data()
                const itemAdapted = { id: QueryDocumentSnapshot.id, ...fields}
                setItem(itemAdapted)
            })
            .catch(error=>{
                console.log(error)
            })
            .finally(()=>{
                setLoad(false)
            })
        },[itemId])

        if(load){
            return(
                <Loader />
            )
        }

        

    return(<>
     <ItemDetail item={item}/>
    </>
        
    )
}


export default ItemDetailContainer
