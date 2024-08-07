import "./Footer.css"

function Footer() {
    return (
        <footer className="Abajo">
            <div className="redes">
                <h1>Nuestras redes</h1>
                <div className="redes-img">
                    <a href=""><img
                        src="https://th.bing.com/th/id/OIP.ERR24wL5OSz3GcXpG0XjZQHaHa?w=151&h=180&c=7&r=0&o=5&dpr=1.7&pid=1.7"
                        alt=""/></a>
                    <a href=""><img
                        src="https://th.bing.com/th/id/OIP.ERR24wL5OSz3GcXpG0XjZQHaHa?w=151&h=180&c=7&r=0&o=5&dpr=1.7&pid=1.7"
                        alt=""/></a>
                    <a href="" ><img
                        src="https://th.bing.com/th/id/OIP.ERR24wL5OSz3GcXpG0XjZQHaHa?w=151&h=180&c=7&r=0&o=5&dpr=1.7&pid=1.7"
                        alt="" /></a>
                </div>

            </div>
            <div className="container text-center">
                <div className="row align-items-start">
                    <div className="col">
                        <h4>Telefono</h4> 
                            <hr className="linea" />
                                <p>(5411) 2222-2222</p>
                            </div>
                            <div className="col">
                                <h4>Email</h4> 
                                    <hr className="linea" />
                                        <div>
                                            <a className="email" href="mailto:argentumsports@gmail.com"><b>argentumsports@gmail.com</b></a>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <h4>Horarios</h4> 
                                            <hr className="linea" />
                                                <p>Lunes a Viernes de 9 a 18</p>
                                            </div>
                                    </div>
                            </div>
                            <div className="Footer1">
                                <p>&copy; 2024 Argentum Sports</p>
                            </div>

         </footer>
           )
}

export default Footer 