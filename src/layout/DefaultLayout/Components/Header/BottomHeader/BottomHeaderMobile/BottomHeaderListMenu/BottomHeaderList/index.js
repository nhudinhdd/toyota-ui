import './BottomHeaderList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faArrowLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import * as homeService from '../../../../../../../../service/homeSerivce'
import * as headerService from '../../../../../../../../service/headerService'
import HeaderTech from "../../../../HeaderTech/index"
import HeaderNewDropDown from "../../../../HeaderNewDropDown/index"
import HeaderElectro from "../../../../HeaderElectro/index"
import HeaderToyotaInfo from "../../../../HeaderToyotaInfo/index"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function BottomHeaderList({ showView }) {
    const headerTitle = headerService.getHeaderTitles();
    const vehilceTypes = homeService.getVehicleTypes();
    const headerServiceTitle = headerService.getHeaderServices();
    const [menus, setMenuDetails] = useState(headerTitle);
    const [titleHeader, setTitleHeader] = useState('')
    const [previousID, setPreviousID] = useState('')
    const [isShowHeaderImg, setShowHeaderImg] = useState(false);
    const [headerImgConent, setHeaderImgContent] = useState(() => {
        return <></>
    })

    const navigate = useNavigate();


    const updateListMenu = (id, titleHeader) => {
        switch (id) {
            case 'product':
                setMenuDetails(vehilceTypes)
                setTitleHeader(titleHeader)
                setPreviousID('all')
                setShowHeaderImg(false)
                break;
            case 'tech':
                setShowHeaderImg(true)
                setPreviousID('all')
                setHeaderImgContent(() => {
                    return <HeaderTech></HeaderTech>
                })
                setTitleHeader(titleHeader)
                break;
            case 'service':
                setMenuDetails(headerServiceTitle)
                setTitleHeader(titleHeader)
                setPreviousID('all')
                setShowHeaderImg(false)
                setTitleHeader(titleHeader)
                break;
            case 'news':
                setShowHeaderImg(true)
                setPreviousID('all')
                setHeaderImgContent(() => {
                    return <HeaderNewDropDown></HeaderNewDropDown>
                })
                setTitleHeader(titleHeader)
                break;
            case 'electro':
                setShowHeaderImg(true)
                setPreviousID('all')
                setHeaderImgContent(() => {
                    return <HeaderElectro></HeaderElectro>
                })
                setTitleHeader(titleHeader)
                break;
            case 'toyotaInfo':
                setShowHeaderImg(true)
                setPreviousID('all')
                setHeaderImgContent(() => {
                    return <HeaderToyotaInfo></HeaderToyotaInfo>
                })
                setTitleHeader(titleHeader)

                break;

            case 'all':
                setMenuDetails(headerTitle)
                setTitleHeader(titleHeader)
                setShowHeaderImg(false)
                break;
        }
    }

    
    function changeLocation(vehicleType){
        navigate("/vehicles", {state: {vehicleTypeActive: vehicleType}});
        window.location.reload();
    }

    return (
        <div className={`mobile-menu-box ${titleHeader === '' ? '' : 'mobile-menu-detail'}`}>

            <div className={`mobile-menu-header ${titleHeader === '' ? 'mobile-menu-header-display' : ''}`}>
                <div className='previous-page' onClick={() => updateListMenu(previousID, '')}>
                    <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#000000", }} size='xl' />
                </div>
                <p>{titleHeader}</p>
                <div className='close-menu' onClick={showView}>
                    <FontAwesomeIcon icon={faXmark} size="2xl" style={{ color: "#2F2E2C", }} fontSize={24} />            </div>

            </div>
            {!isShowHeaderImg && <div className='mobile-menu-container'>
                <ul>
                    {menus.map((menu) => (
                        <li className='menu-title' id={menu.id} onClick={vehilceTypes.some(v=> v.id === menu.id) ? () => changeLocation(menu.name) : () => updateListMenu(menu.id, menu.name)} key={menu.id}>
                            <span >{menu.name}</span>

                            <FontAwesomeIcon icon={faChevronRight} style={{ color: "#d71921", }} />
                        </li>
                    ))}
                </ul>
            </div>}

            {isShowHeaderImg &&
                <div className='header-image__Mobile'>{headerImgConent}</div>
            }

        </div>
    )
}
export default BottomHeaderList