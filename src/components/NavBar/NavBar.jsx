import CardWidget from "../CartWidget/CardWidget"


function NavBar({cartCount, title}) {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Remeras</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pantalones</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Calzado</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Accesorios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sobre Nosotros</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <CardWidget cartCount={cartCount}/>
      </form>
    </div>
  </div>
</nav>
  )
}

export default NavBar