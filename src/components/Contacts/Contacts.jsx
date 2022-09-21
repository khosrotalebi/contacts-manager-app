import {useContext} from "react";
import {Link} from "react-router-dom";
import {ContactContext} from "../../context/contactContext";
import Contact from "./Contact";
import Spinner from "../Spinner";
import {CURRENTLINE, ORANGE, PINK} from "../../helpers/colors";
import {deleteContact} from "../../services/contactService";

const Contacts = ( ) => {

    const {loading , deleteContact , filteredContacts} = useContext(ContactContext);

    return (
        <>
            <section className="container">
                <div className="grid">
                    <div className="row">
                        <div className="col">
                            <p className="h3">
                                <Link
                                    to={"/contacts/add"}
                                    className="btn mx-2"
                                    style={{backgroundColor: PINK}}>
                                    ساخت مخاطب جدید
                                    <i className="fa fa-plus-circle mx-2"/>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {loading ? <Spinner/> : (
                <section className="container">
                    <div className="row">
                        {filteredContacts.length > 0
                            ? filteredContacts.map((c) => <Contact
                                key={c.id}
                                deleteContact={() => deleteContact(c.id, c.fullname)}
                                contact={c}/>)
                            : (
                                <div
                                    className="text-center py-5"
                                    style={{backgroundColor: CURRENTLINE}}
                                >
                                    <p className="h3" style={{color: ORANGE}}>
                                        مخاطب یافت نشد ...
                                    </p>
                                    <img
                                        src={require("../../assets/no-found.gif")}
                                        alt="پیدا نشد"
                                        className="w-25"
                                    />
                                </div>
                            )}
                    </div>
                </section>
            )}
        </>
    );
};

export default Contacts;
