import bfbNotice from '../assets/back-for-blood-notice.jpg';
import dolarNotice from '../assets/dolar-notice.jpg';
import nftCat from '../assets/nft3.jpg';
import ramasFisica from '../assets/ramas-fisica.png';


function Principal() {
    return <div className="row row-cols-1 row-cols-md-4 g-4">
    <div className="col">
      <div className="card">
        <img src={bfbNotice} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"><a href="">Hola soy el titulo de una noticia muy importante</a></h5>
          <h6 className="card-subtitle mb-2 text-muted">Autor | Fecha | 28-AGO</h6>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img src={dolarNotice} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"><a href="">Hola soy el titulo de una noticia muy importante</a></h5>
          <h6 className="card-subtitle mb-2 text-muted">Autor | Fecha | 28-AGO </h6>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img src={nftCat} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"><a href="">Hola soy el titulo de una noticia muy importante</a></h5>
          <h6 className="card-subtitle mb-2 text-muted">Autor | Fecha | 28-AGO </h6>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img src={ramasFisica} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"><a href="">Hola soy el titulo de una noticia muy importante</a></h5>
          <h6 className="card-subtitle mb-2 text-muted">Autor | Fecha | 28-AGO </h6>
        </div>
      </div>
    </div>
  </div>
}

export default Principal;