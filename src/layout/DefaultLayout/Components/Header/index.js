import '../../../../assets/icon/fontawesome-free-6.4.0-web/fontawesome-free-6.4.0-web/css/all.min.css'
import '../../../../assets/css/bootstrap-5.0.2-dist/css/bootstrap.min.css'
import './Header.css'
import logo from "../../../../assets/img/logo-toyota.jpg"
import TopHeader from './TopHeader'
import BottomHeaderPC from './BottomHeader/BottomHeaderPC/index'
import BottomHeaderMobile from './BottomHeader/BottomHeaderMobile'

function Header() {

    return (
        <div id="container-header" >
            <div id="header">
                <div id="header-logo">
                    <a href="/"> <img src={logo} alt="" /></a>
                </div>
                <div id="header-block">
                    <TopHeader></TopHeader>
                    {/* Bottom header PC */}
                    <BottomHeaderPC></BottomHeaderPC>
                    {/* Bottom header Mobile*/}
                    <BottomHeaderMobile></BottomHeaderMobile>
                </div>
            </div>
        </div>
    )
}

export default Header;