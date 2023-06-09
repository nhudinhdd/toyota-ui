import './PriceNotiPopup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faL } from '@fortawesome/free-solid-svg-icons';
import * as priceNotiService from '../../../service/priceNotiService'
import * as vehiclesSerice from '../../../service/vehicles'
import emailjs from 'emailjs-com';
import { useState } from 'react';

function PriceNotiPopup({onClickCarPice}) {

    const [carName, setCarName] = useState(vehiclesSerice.getVehicles('all', 'all', 'all', 'all')[0].carName);
    const [time, setTime] = useState('Tháng này');
    const [area, setArea] = useState(priceNotiService.getArea()[0])
    const [isShowPricePopup, setShowPricePopup] = useState(true);
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_0rao4jo', 'template_dfzwv7q', e.target, 'eZatyaZvCIRK71Dv0')
            .then((result) => {
                window.location.reload()
            }, (error) => {
                console.log(error.text);
            });
    }

    const onChangeCar = (e) => {
        setCarName(e.target.value)
    }

    const onChangeTime = (e) => {
        setTime(e.target.value)
    }

    const onChangeArea = (e) => {
        setArea(e.target.value)
    }
    const Result =
        <div className="price-noti-popup">
            <div className="price-noti-popup-header">
                <p>NHẬN BÁO GIÁ SAU 2 PHÚT</p>
            </div>
            <form className="contact-form" onSubmit={sendEmail}>
                <div className='form-info'>
                    <div className='form-info-detail'>
                        <div className='info-detail'>
                            <label className='title-form-info'>Họ và tên *</label>
                            <input placeholder='Nguyễn Văn A' className='input-price-noti' name='customer-name'></input>
                        </div>
                        <div className='info-list'>
                            <div className='info-detail'>
                                <label className='title-form-info'>Số điện thoại *</label>
                                <input placeholder='0987930704' className='input-price-noti' name='phone-number'></input>
                            </div>
                            <div className='info-detail'>
                                <label className='title-form-info'>Email *</label>
                                <input placeholder='toyota@gmail.com' className='input-price-noti' name='email'></input>
                            </div>
                        </div>
                        <div className='info-detail'>
                            <label className='title-form-info'>Xe bạn cần báo giá *</label>
                            <select onChange={onChangeCar}>
                                {vehiclesSerice.getVehicles('all', 'all', 'all', 'all').map((vehicle) => (<option value={vehicle.carName} key={vehicle.carName}>{vehicle.carName}</option>))}
                            </select>
                        </div>
                        <div className='info-detail'>
                            <label className='title-form-info'>Thời gian dự kiến lấy xe *</label>
                            <select onChange={onChangeTime}>
                                <option value="Tháng này">Tháng này</option>
                                <option value="Tháng sau">Tháng sau</option>
                                <option value="Đang tham khảo">Đang tham khảo</option>
                            </select>
                        </div>


                        <div className='info-detail'>
                            <label className='title-form-info'>Bạn muốn báo giá lăn bánh tỉnh thành nào *</label>
                            <select onChange={onChangeArea}>
                                {priceNotiService.getArea().map((area) => (<option value={area} name='area'>{area}</option>))}

                            </select>
                        </div>
                        <input type='hidden' name='area' value={area}></input>
                        <input type='hidden' name='time-recevie' value={time}></input>
                        <input type='hidden' name='car-name' value={carName}></input>
                    </div>

                    <div className='price-noti-button'>
                        <input type='submit' value="Gửi"></input>
                    </div>
                    <div className='close-popup-price-noti' onClick={onClickCarPice}>
                        <FontAwesomeIcon className='fa-2x' icon={faClose} /> </div>
                </div>
            </form>

        </div>
    
    return (
        <>
            { isShowPricePopup && Result}

        </>
    )
}

export default PriceNotiPopup