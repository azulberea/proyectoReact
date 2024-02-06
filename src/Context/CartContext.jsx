import { useState, createContext, useContext } from "react"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const CartContext = createContext({
    cart: [],
    addItem: ()=>{},
    isInCart: ()=>{},
    toastProductoAgregado: ()=>{},
    toastProductoYaAgregado: ()=>{},
    toastStockInsuficiente: ()=>{},
    getTotalQuantity: ()=>{},
    totalQuantity: 0,
    getTotal: ()=>{},
    total: 0
})

export const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([])
    console.log(cart)

    const toastSuccess = (mensaje)=>{
        toast(mensaje, {
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

    const toastError = (mensaje)=>{
        toast.error(mensaje, {
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

    const toastWarn = (mensaje) => {
        toast.warn(mensaje, {
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

    const clearCart = ()=>{
        setCart([])
    }

    const clearOutOfStockItems = (idsAEliminar)=>{
        const cartUpdated = cart.filter(prod=>!idsAEliminar.includes(prod.id))
        toastWarn("No hay stock de algunos de los productos que seleccionaste 😿 Se ha actualizado tu carrito de compras")
        setCart(cartUpdated)
        console.log(cart)
    }

    const addItem = (productToAdd, count, stock) => {
        if(count>stock){
            toastWarn(`😿 Stock insuficiente. Se ha actualizado la cantidad a ${stock}`);
        }else if(!isInCart(productToAdd.id)){
            setCart(prev=>[...prev, productToAdd])
            console.log(cart);
            toastSuccess('🎀 Producto agregado al carrito correctamente!')
        }else{
            toastError('🙀 El producto ya ha sido agregado al carrito anteriormente')
        }
    }

    const isInCart = (productId) =>{
        return cart.some((prod) => prod.id === productId)
    }

    const removeItem = (productId) =>{
        const cartUpdated = cart.filter(prod => prod.id !== productId)
        setCart(cartUpdated)
    }

    const getTotalQuantity = ()=>{
        let accu = 0
        cart.forEach(prod =>{
            accu += prod.quantity
        })
        return accu
    }

    const totalQuantity = getTotalQuantity()

    const getTotal = ()=>{
        let accu = 0
        cart.forEach(prod =>{
            accu += prod.price * prod.quantity
        })
        return accu
    }

    const total = getTotal()

    return(
        <CartContext.Provider value={{cart, isInCart, addItem, removeItem, totalQuantity, total, clearCart, clearOutOfStockItems}}>
            {children}
            <ToastContainer />
        </CartContext.Provider>
    )
}

//en lugar de importar 2 cosas (useContext y CartContext) importo solo una (useCart)
export const useCart = ()=>{
    return useContext(CartContext)
}