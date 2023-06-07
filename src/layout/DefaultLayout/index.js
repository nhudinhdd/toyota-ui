import Header from "./Components/Header/index.js";
import Footer from "./Components/Footer/index.js";
import PhoneCall from "../../components/PhoneCall/index.js";
import PriceNotiPopup from "../Components/PriceNotiPopup/index.js";
import CarPrice from "../../components/CarPrice/index.js";

function DefaultLayout({ children }) {
    return (
        <div className="default-layout">
            <Header></Header>
            <div className="">
                <div className="content">{children}</div>
            </div>
            <Footer></Footer>
            <PhoneCall></PhoneCall>
            <CarPrice></CarPrice>
            {/* <PriceNotiPopup></PriceNotiPopup> */}
        </div>
    )
}

export default DefaultLayout;