import { useState } from "react"
import estilos from "./ItemCount.module.css"

const ItemCount = ({ stock, onAdd })=> {
    const [count, setCount] = useState(1)
    

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


    return (
        <div style={{marginTop:20, marginBottom:20}}>
            <div style={{display:"flex",flexDirection:"row"}}>
                <button className={estilos.button} onClick={decrementar}>-</button>
                <input style={{color:"black",width:50}} value={count} readOnly={false} disabled={false} onChange={handleInputChange}></input>
                <button className={estilos.button} onClick={incrementar}>+</button>
            </div>
            <button className={estilos.buttonCarrito} onClick={()=>{count <= stock ? setCount(1) : setCount(stock); onAdd(count)}}>AGREGAR AL CARRITO</button>    
        </div>
    )


}

export default ItemCount


