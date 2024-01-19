import { useState } from "react"
import estilos from "./ItemCount.module.css"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";


const ItemCount = ({ stock })=> {
    const [count, setCount] = useState(1)
    
    const toastStock = () => {
        toast.warn(`😿 Stock insuficiente. Se ha actualizado la cantidad a ${stock}`, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }

    const toastProductoAgregado = ()=>{
        toast('🎀 Producto agregado al carrito correctamente!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }


    

    const decrementar = ()=>{
        if(count != 1){
            setCount(prev => prev - 1)
        }
    }

    const incrementar = ()=>{
        if(count<stock){
            setCount(prev => prev + 1)
        }
    }

    const handleInputChange = (event) => {
        const inputValue = parseInt(event.target.value);
        if (!isNaN(inputValue) & inputValue != 0) {
            setCount(inputValue);
        }else{
            setCount(1)
        }
    }

    const handleInputBlur = (event)=>{
        const inputValue = parseInt(event.target.value);
        if(inputValue>stock){
            console.log("stock insuficiente")
        }
    }

    const onAdd = ()=>{
        if(count <= stock){
            (setCount(1), toastProductoAgregado())
        }else{
            (setCount(stock), toastStock())
        }
    }

    return (
        <div style={{marginTop:20, marginBottom:20}}>
            <div style={{display:"flex",flexDirection:"row"}}>
                <button className={estilos.button} onClick={decrementar}>-</button>
                <input style={{color:"black",width:50}} value={count} readOnly={false} disabled={false} onBlur={handleInputBlur} onChange={handleInputChange}></input>
                <button className={estilos.button} onClick={incrementar}>+</button>
            </div>
            <button className={estilos.buttonCarrito} onClick={onAdd}>AGREGAR AL CARRITO</button>
            <ToastContainer />     
        </div>
    )


}

export default ItemCount