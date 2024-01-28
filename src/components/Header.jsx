import BacLogo from "./BacLogo";
import NavBar from "./NavBar";

const Header = () => {
    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-md-1">
                    <BacLogo tamano={100} />
                </div>
                <div className="col-md-11 d-flex align-items-center">
                    <NavBar />
                </div>
            </div>
        </div>
    )
}

export default Header;