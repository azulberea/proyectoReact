import estilos from "./ItemListContainer.module.css"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import Loader from "../Loader/Loader"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"


const ItemListContainer = ()=>{

    const [products, setProducts] = useState([])
    const [load, setLoad] = useState(true)
    const { categoryId } = useParams()

    

    useEffect(()=>{

        setLoad(true)
        
        const collectionRef = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(collectionRef)
            .then(QuerySnapshot => {
                const productsAdapted = QuerySnapshot.docs.map(doc=>{
                    const fields = doc.data()
                    return { id: doc.id, ...fields}
                })
                setProducts(productsAdapted)
            })
            .catch(error=>{
                console.log(error)
            })
            .finally(()=>{
                setLoad(false)
            })
    },[categoryId]) 

    if(load){
        return(
            <Loader />
        )
    }

    const getGreeting = ()=>{
        if(categoryId){
            return `${categoryId.toLocaleUpperCase('es-ES')}`
        }else{
            return `Bienvenidos a sanrioStore`
        }
    }


    return(
        <div>
            <h1 className={estilos.saludo}>{getGreeting()}</h1>
            <div className={estilos.itemListContainer}>
                <ItemList products={products}></ItemList>
            </div>
        </div>
    )
}

export default ItemListContainer