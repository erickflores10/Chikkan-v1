import Card from "./Card";
import Overlay from "./Overlay";

function Recientes() {
    return <section className="recent">
        <div className="recent-container">
            <div className="recent-container__item item-1">
                <Overlay />
            </div>
            <div className="recent-container__item item-2">
               <Card />
            </div>
            <div className="recent-container__item item-3">
                <Card />
            </div>
        </div>
    </section>
}


export default Recientes;