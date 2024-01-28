import BannerApp1 from "../assets/banner_app1.jpg";
import BannerApp2 from "../assets/banner_app2.jpg";

const Banner = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <img src={BannerApp1} className="img-fluid" alt="..." />
                        <div className="card-body text-center">
                            <h4>Usa frenos de calidad Brembo </h4>
                            <p>Sentite seguro con la gran respuesta y resistencia de estos fabulosos frenos, compralos ahora!!!.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={BannerApp2} className="img-fluid" alt="..." />
                        <div className="card-body text-center">
                            <h4>Nuevos Neumaticos Falken compuesto blando</h4>
                            <p>Sentite un corredor de carreras con el agarre de estos neumáticos, ya disponibles en la tienda.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;