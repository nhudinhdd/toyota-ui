import './CarPrice.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import PriceNotiPopup from "../../layout/Components/PriceNotiPopup/index";
import { useState } from 'react';

function CarPrice() {
    const[isShowPopup, setShowPopup] = useState(false)
    const onClickCarPice = () => {
        setShowPopup(!isShowPopup)
    }
    return (
    <div className='car-price-noti'>
        <div className="car-container" onClick={onClickCarPice}>
        <FontAwesomeIcon icon={faMoneyCheckDollar} className='fa-2x ' style={{color: "#FFF"}}/>
        </div>
        {isShowPopup && <PriceNotiPopup onClickCarPice={onClickCarPice}></PriceNotiPopup>}

    </div>)
}
export default CarPrice