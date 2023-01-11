const Navbar = ({setSearch}) => {
    return(
        <nav className="navbar navbar-dark color-nav">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Buscador de colaboradores</a>
            <div id="navbarSupportedContent">
                <form className="d-flex ms-auto" role="search">
                    <input onChange={(e) => setSearch(e.target.value)} className="form-control me-2"
                           type="search" placeholder="Busca un colaborador"/>
                </form>
            </div>
        </div>
    </nav>
    )
}


export default Navbar