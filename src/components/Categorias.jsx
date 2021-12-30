import React from "react";

class Categorias extends React.Component {

    render() {
        return(
            <section className="cat-container"> 
                <div className="cat-container__bg">
                    <div className="cat-container__item">
                        <a href="">Ciencia</a>
                    </div>
                    <div className="cat-container__item">
                        <a href="">Tecnologia</a>
                    </div>
                    <div className="cat-container__item">
                        <a href="">Arte</a>
                    </div>
                    <div className="cat-container__item">
                        <a href="">Economia</a>
                    </div>
                    <div className="cat-container__item">
                        <a href="">ESports</a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Categorias;