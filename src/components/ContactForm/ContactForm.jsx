import { useState } from "react"
import { useCart } from "../../Context/CartContext"
import { db } from "../../services/firebase/firebaseConfig"
import { query, collection, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import Loader from "../Loader/Loader"
import estilos from "./ContactForm.module.css"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";


const ContactForm = ()=>{
    const { cart, total, clearCart, clearOutOfStockItems} = useCart()
    const navigate = useNavigate()
    const [load, setLoad] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const handleNameChange = (name)=>{setName(name)}
    const handleEmailChange = (email)=>{setEmail(email)}
    const handlePhoneChange = (phone)=>{setPhone(phone)}

    const createOrder = async ()=>{
        try{
            const objOrder = {
                        buyer:{
                        name: {name},
                        email: {email},
                        phone: {phone}
                        },
                        items: [{...cart}],
                        total: {total}
                    }
                    console.log(objOrder)

                    const batch = writeBatch(db)
                    const outOfStock = []

                    const ids = cart.map(prod=>prod.id)

                    const productsCollection = query(collection(db,"products"), where(documentId(), "in", ids))

                    const {docs} = await getDocs(productsCollection)

                    docs.forEach(doc=>{
                        const docData = doc.data()
                        const stockDb = docData.stock

                        const prodAdded = cart.find(prod=>prod.id == doc.id)
                        const prodQuantity = prodAdded.quantity

                        if(stockDb>=prodQuantity){
                            batch.update(doc.ref,{ stock: stockDb - prodQuantity })
                        } else {
                            outOfStock.push({id: doc.id, ...docData})
                        }
                    })
                        setLoad(true)
                    if (outOfStock.length==0){

                        batch.commit()

                        const ordersCollection = collection(db,"orders")

                        const { id } = await addDoc(ordersCollection, objOrder)

                        clearCart([])
                        setOrderId(id)
                    }else{
                        const idsAEliminar = outOfStock.map(prod=>prod.id)
                        clearOutOfStockItems(idsAEliminar)
                        navigate('/carrito')
                    }
        }catch(error){
            console.log("error: " + error.message)
        }finally{
            setLoad(false)
        }
    }

    if(load){
        return(
            <Loader />
        )
    }

    if(orderId){
        return <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h1 className={estilos.ordenConfirmada}>
                    Muchas gracias por tu compra, {name}! Podras seguir el estado de tu orden con el siguiente ID: {orderId} 
                </h1>
                <img style={{width:"400px"}} src={"https://www.pinclipart.com/picdir/middle/542-5422346_hellokitty-hello-kitty-kitty-friends-bff-shopping-hello.png"} />
            </div>
    }

    return(
        <div className={estilos.wrapper}>
            <div className={estilos.flipCardInner}>
                <div className={estilos.flipCardFront}>
                    <div className={estilos.title}>Ingrese sus datos</div>
                        <form className={estilos.flipCardForm} onSubmit={(e)=>{e.preventDefault()}}>                    
                            <input className={estilos.flipCardInput} name="name" placeholder="Full name" type="text" autoComplete="name" onChange={(e)=>handleNameChange(e.target.value)} />
                            <input className={estilos.flipCardInput} name="email" placeholder="Email" type="email" autoComplete="email"  onChange={(e)=>handleEmailChange(e.target.value)}/>
                            <input className={estilos.flipCardInput} name="telephone" placeholder="Phone number" type="tel" autoComplete="tel" onChange={(e)=>handlePhoneChange(e.target.value)}/>
                            <input className={estilos.flipCardBtn} onClick={createOrder} type="submit"/>
                        </form>
                    </div>
                </div>
                <ToastContainer/> 
            </div>
    )
}

export default ContactForm