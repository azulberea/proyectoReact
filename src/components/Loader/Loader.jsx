import estilos from "../Loader/Loader.module.css"

const Loader = ()=>{
    return (
        <div className={estilos.spinner}>
            <div className={estilos.loader1}>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>
        </div>
    )
}

export default Loader