import Navegacion from './components/Navegacion';
import Principal from './components/Principal';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Secciones from './components/Secciones';
import Recientes from './components/Recientes';
import Categorias from './components/Categorias';
import Posts from './components/Posts';



import './styles/general.css';
import './styles/principal.css';
import './styles/slider.css';
import './styles/recientes.css';
import './styles/categorias.css';
import './styles/posts.css';



import { posts } from './posts.json';
console.log(posts); 


function App() {
    return <div>
        <Navegacion />
            <Slider />
                <Secciones titulo="Recientes" />
                    <Recientes />
                        <Secciones titulo="Categorias" />
                            <Categorias />
                                <Posts />
                                    <Secciones titulo="Destacados" />
                                        <Principal />
                                            <Footer />
    </div>
}

{/* Importante: Previsualizar rect rout con ls componentes*/}
export default App;