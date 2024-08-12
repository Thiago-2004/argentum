import './Seccion.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Carousel from 'react-bootstrap/Carousel'; 

function Seccion() {
    return (
        <section id="inicio" className="hero">
            <div className="container-1">
                <h1>Bienvenido a Argentum Sports</h1>
                <p>Somos tu destino ideal para encontrar todo lo que necesitas para potenciar tu rendimiento deportivo. Ya seas
                    un atleta profesional, un entusiasta del fitness o simplemente una persona activa que busca comodidad y
                    estilo en su equipamiento deportivo, tenemos todo lo que necesitas.</p>

                {/* Carrusel */}
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://th.bing.com/th/id/OIP.ffgVE5JRinm7eo7KiEJ7_QHaFj?w=243&h=182&c=7&r=0&o=5&dpr=1.7&pid=1.7"
                            alt="Primera imagen"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://th.bing.com/th/id/OIP.8OreyPYXl-hDq-TGhl8fkwHaFK?w=270&h=187&c=7&r=0&o=5&dpr=1.7&pid=1.7"
                            alt="Segunda imagen"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://th.bing.com/th/id/OIP.8YQKGa70Xs5qFg_mzJJBngAAAA?w=270&h=180&c=7&r=0&o=5&dpr=1.7&pid=1.7"
                            alt="Tercera imagen"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    );
}

export default Seccion;
