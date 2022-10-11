import {useLocation} from "react-router-dom";
import SearchContact from "./Contacts/SearchContact";
import {PURPLE} from "../helpers/colors";
import Colorfull from "../hoc/Colorfull";

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar navbar-dark navbar-expand-sm shadow-lg">
            <div className="container">
                <div className="row w-100">
                    <div className="col">
                        <div className="navbar-brand">
                            <i className="fas fa-id-badge" style={{color: PURPLE}}/>{" "}
                            وب اپلیکیشن مدیریت {" "}
                            <span style={{color: PURPLE}}>مخاطبین</span>
                        </div>
                    </div>
                    {location.pathname === "/contacts" ? (
                        <div className="col">
                            <SearchContact />
                        </div>
                    ) : null}
                </div>
            </div>
        </nav>
    );
};

export default Colorfull( Navbar );
