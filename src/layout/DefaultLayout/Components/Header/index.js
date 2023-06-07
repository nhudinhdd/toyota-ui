import '../../../../assets/icon/fontawesome-free-6.4.0-web/fontawesome-free-6.4.0-web/css/all.min.css'
import '../../../../assets/css/bootstrap-5.0.2-dist/css/bootstrap.min.css'
import './Header.css'
import logo from "../../../../assets/img/logo-toyota.jpg"
import VehiclesHighlightContent from '../../../Components/Home/VehiclesHighlight/VehiclesHighlightContent'
import HeaderTech from "../Header/HeaderTech/index"
import HeaderNewDropDown from "../Header/HeaderNewDropDown/index"
import HeaderElectro from "../Header/HeaderElectro/index"
import HeaderToyotaInfo from "../Header/HeaderToyotaInfo/index"
import HeaderServiceDropDown from "../Header/HeaderServiceDropDown/index"
import { useState } from 'react'
function Header() {
    const [isShowMenu, setShowMenu] = useState({ product: false, tech: false, service: false, news: false, electro: false, info: false })
    const showDropDown = function (id) {
        switch (id) {
            case 'product':
                setShowMenu({ product: !isShowMenu.product, tech: false, service: false, news: false, electro: false, info: false })
                break;
            case 'tech':
                setShowMenu({ product: false, tech: !isShowMenu.tech, service: false, news: false, electro: false, info: false })
                break;
            case 'serviceD':
                setShowMenu({ product: false, tech: false, service: !isShowMenu.service, news: false, electro: false, info: false })

                break;
            case 'news':
                setShowMenu({ product: false, tech: false, service: false, news: !isShowMenu.news, electro: false, info: false })
                break;
            case 'electro':
                setShowMenu({ product: false, tech: false, service: false, news: false, electro: !isShowMenu.electro, info: false })
                break;
            case 'toyota-info':
                setShowMenu({ product: false, tech: false, service: false, news: false, electro: false, info: !isShowMenu.info })
                break;

        }
    }
    return (
        <div id="container-header" >
            <div id="header">
                <div id="header-logo">
                    <a href="/"> <img src={logo} alt="" /></a>
                </div>
                <div id="header-block">
                    <div id="top_header">
                        <ul className="nav">
                            <li className="hotline"><i className="fa-solid fa-phone" style={{ color: "#c93b42" }}></i>
                                <a>0987930704</a>
                            </li>
                            <li><input type="text" name="search" placeholder="Từ khóa" className="input-search" /> <i
                                className="fa-solid fa-magnifying-glass"></i></li>
                            <li><a href="https://www.facebook.com/quyquy270498"><i className="fa-brands fa-facebook fa-lg"
                                style={{ color: "#0e3271" }}></i></a></li>
                            <li><a href=""><i className="fa-brands fa-youtube fa-lg" style={{ color: "#dd2727" }}></i></a></li>
                        </ul>
                    </div>
                    <div id="bottom_header">
                        <ul className="nav">
                            <li className={`nav-container ${isShowMenu.product ? 'active-dropdown' : ''}`} id="product" onClick={() => showDropDown('product')}>
                                <a href="#">
                                    Sản phẩm
                                    <i className="fa-sharp fa-solid fa-caret-down fa-sm" style={{ color: "#000000" }}></i>
                                </a>
                            </li>
                            <li className={`nav-container ${isShowMenu.tech ? 'active-dropdown' : ''}`} id="tech" onClick={() => showDropDown("tech")}>
                                <a href="#">
                                    Công nghệ
                                    <i className="fa-sharp fa-solid fa-caret-down fa-sm" style={{ color: "#000000" }}></i>
                                </a>
                            </li>
                            <li className={`nav-container ${isShowMenu.service ? 'active-dropdown' : ''}`} onClick={() => showDropDown("serviceD")}>
                                <a href="#">
                                    Dịch vụ
                                    <i className="fa-sharp fa-solid fa-caret-down fa-sm" style={{ color: "#000000" }}></i>
                                </a>
                            </li>
                            <li className={`nav-container ${isShowMenu.news ? 'active-dropdown' : ''}`} id="news" onClick={() => showDropDown("news")}>
                                <a href="#">
                                    Tin tức & Khuyến mãi
                                    <i className="fa-sharp fa-solid fa-caret-down fa-sm" style={{ color: "#000000" }}></i>
                                </a>
                            </li>
                            <li className={`nav-container ${isShowMenu.electro ? 'active-dropdown' : ''}`} id="electro" onClick={() => showDropDown("electro")}>
                                <a href="#">
                                    Điện hóa
                                    <i className="fa-sharp fa-solid fa-caret-down fa-sm" style={{ color: "#000000" }}></i>
                                </a>
                            </li>
                            <li className={`nav-container ${isShowMenu.info ? 'active-dropdown' : ''}`} id="toyota-info" onClick={() => showDropDown("toyota-info")}><a href="#">Về Toyota Việt nam
                                <i className="fa-sharp fa-solid fa-caret-down fa-sm" style={{ color: "#000000" }}></i>
                            </a >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {isShowMenu.product
                && <div className='sub-nav-contaier' >
                    <div className='sub-nav-contaier-content'>
                        <VehiclesHighlightContent></VehiclesHighlightContent>
                    </div>

                </div>}

            {isShowMenu.tech
                && <div className='sub-nav-contaier sub-nav-container-tech '>
                    <HeaderTech></HeaderTech>

                </div>}
            {isShowMenu.service
                && <div className='sub-nav-contaier sub-nav-container-tech '>

                    <HeaderServiceDropDown></HeaderServiceDropDown>

                </div>}
            {isShowMenu.news
                && <div className='sub-nav-contaier sub-nav-container-tech'>
                    <HeaderNewDropDown></HeaderNewDropDown>
                </div>}
            {isShowMenu.electro
                && <div className='sub-nav-contaier sub-nav-container-tech' >
                    <HeaderElectro></HeaderElectro>
                </div>}
            {isShowMenu.info
                && <div className='sub-nav-contaier sub-nav-container-tech' >
                    <HeaderToyotaInfo></HeaderToyotaInfo>
                </div>}
        </div>
    )
}

export default Header;