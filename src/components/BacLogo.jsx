import { Link } from "react-router-dom";
import Logo from "../assets/BacLogo.png";

const BacLogo = ({tamanio}) => {
    return (
    <Link to={"/"}>
        <img src={Logo} alt="Buenos Aires Customs" width={tamanio} />
        </Link>
    )
}

export default BacLogo;
