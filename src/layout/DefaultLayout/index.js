import Header from "./Components/Header/index.js";
import Footer from "./Components/Footer/index.js";
import PhoneCall from "../../components/PhoneCall/index.js";
// import Sidebar from "../Sidebar/Header/index.js";;

function DefaultLayout({ children }) {
    return (
        <div>
            <Header></Header>
            <div className="">
                <div className="content">{children}</div>
            </div>
            <Footer></Footer>
            <PhoneCall></PhoneCall>
        </div>
    )
}

export default DefaultLayout;