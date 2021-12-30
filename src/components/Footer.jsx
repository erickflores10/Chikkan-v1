// Import's css
import '../styles/footer.css';

function Footer() {
    return <footer className="footer">
        <div>
            <div className="footer-container">
                <div className="footer-container__item">
                    <h6 className="card-subtitle mb-2 text-muted">Navegacion</h6>
                    <a href="">Link item</a>
                    <a href="">Link item</a>
                    <a href="">Link item</a>
                </div>
                <div className="footer-container__item">
                    <h6 className="card-subtitle mb-2 text-muted">Navegacion</h6>
                    <a href="">Link item</a>
                    <a href="">Link item</a>
                    <a href="">Link item</a>
                </div>
                <div className="footer-container__item">
                    <h6 className="card-subtitle mb-2 text-muted">Navegacion</h6>
                    <a href="">Link item</a>
                    <a href="">Link item</a>
                    <a href="">Link item</a>
                </div>
            </div>
        </div>
        <div className="footer-container">
            <div className="footer-container__subitem">
                <span>Riwarcanchispirw</span>
                <span>© 2021 Company, Inc</span>
            </div>
        </div>
    </footer>
}

export default Footer;