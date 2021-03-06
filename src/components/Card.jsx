import cookiesImg from '../assets/cookies-notice.jpg';
import '../styles/card.css';

function Card() {
    return <div className="card mb-3">
    <div className="row g-0">
        <div className="col-md-4">
            <img 
                src={cookiesImg}
                className="img-fluid" 
                alt="..."
            />
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">
                    <a href="">Card title</a>
                </h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text">
                    <small className="text-muted">Autor | Fecha | 28-AGO</small>
                </p>
            </div>
        </div>
        </div>
    </div>
}


export default Card;