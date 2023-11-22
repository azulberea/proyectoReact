import estilos from "./Navbar.module.css"

const Navbar = ()=>{
    return(
        <nav className={estilos.flex}>
            <div className={estilos.brand}>
                <img src="/img/myMelody.png" className={estilos.resize}></img>
                <h1><a href='main.jsx'>sanrioStore</a></h1>
            </div>
            <div>
                <a className={estilos.margin} href="#">indumentaria</a>
                <a className={estilos.margin} href="#">peluches</a>
                <a className={estilos.margin} href="#">accesorios</a>
            </div>
        </nav>
    )
}

export default Navbar