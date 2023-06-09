import { useState } from 'react'
import VehiclesHighlightContent from '../../../../../../layout/Components/Home/VehiclesHighlight/VehiclesHighlightContent'
import HeaderTech from "../../HeaderTech/index"
import HeaderNewDropDown from "../../HeaderNewDropDown/index"
import HeaderElectro from "../../HeaderElectro/index"
import HeaderToyotaInfo from "../../HeaderToyotaInfo/index"
import HeaderServiceDropDown from "../../HeaderServiceDropDown/index"
import './BottomHeaderPC.css'
import * as headerService from '../../../../../../service/headerService'
function BottomHeaderPC() {
    const defaultCpn = () => {
        return <></>
    }
    const [DropDownMenu, setDropDownMenu] = useState(defaultCpn);
    const menus = headerService.getHeaderTitles()
    const [activeID, setActiveID] = useState('');
    const showDropDown = function (id) {
        const isActiveNow = activeID === id ;
        isActiveNow ? setActiveID('') : setActiveID(id)
        switch (id) {
            case 'product':
                setDropDownMenu(isActiveNow ? defaultCpn : () => {
                    return <VehiclesHighlightContent inActiveDropDown={inActiveDropDown}></VehiclesHighlightContent>
                })
                break;
            case 'tech':
                setDropDownMenu(isActiveNow? defaultCpn : () => {
                    return <HeaderTech></HeaderTech>
                })
                break;
            case 'service':
                setDropDownMenu(isActiveNow ? defaultCpn : () => {
                    return <HeaderServiceDropDown></HeaderServiceDropDown>
                })
                break;
            case 'news':
                setDropDownMenu(isActiveNow? defaultCpn : () => {
                    return <HeaderNewDropDown></HeaderNewDropDown>
                })
                break;
            case 'electro':
                setDropDownMenu(isActiveNow ? defaultCpn : () => {
                    return <HeaderElectro></HeaderElectro>
                })
                break;
            case 'toyotaInfo':
                setDropDownMenu(isActiveNow ? defaultCpn : () => {
                    return <HeaderToyotaInfo></HeaderToyotaInfo>
                })
                break;

        }
    }

    const inActiveDropDown = ()=>{
        setDropDownMenu(<></>)
        setActiveID('')
    }

    return (
        <div>
            <div id="bottom_header">
                <ul className="nav">
                    {menus.map((menu) => (
                        <li className={`nav-container ${activeID === menu.id ? 'active-dropdown' : ''}`} id={menu.id} onClick={() => showDropDown(`${menu.id}`)} key={menu.id}>
                            <a href="#">
                                {menu.name}
                                <i className="fa-sharp fa-solid fa-caret-down fa-sm" style={{ color: "#000000" }}></i>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='menu-pc'>
                <div className='sub-nav-contaier sub-nav-container-tech '>
                    {DropDownMenu}
                </div>
            </div>
        </div>


    )

}
export default BottomHeaderPC