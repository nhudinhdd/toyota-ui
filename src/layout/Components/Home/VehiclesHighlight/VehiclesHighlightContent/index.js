import './VehiclesHighlightContent.css'
import * as homeService from '../../../../../service/homeSerivce'
import { useState, useEffect } from 'react'
import useViewport from '../../../../../components/ViewPort/index'
import { useNavigate } from 'react-router-dom';

function VehiclesHighlightContent({ inActiveDropDown }) {
    const vehicleTypeList = homeService.getVehicleTypes();
    const [vehicleTypes, setVehicleTypes] = useState(vehicleTypeList);
    const [vehicleTypeActive, setVehicleTypeActive] = useState(vehicleTypeList[0].id);
    const isPC = useViewport().isPc;
    const [maxLengthVehicle, setMaxLengthVehicle] = useState(4);
    const [to, setTo] = useState(maxLengthVehicle);
    const [vehicles, setVehicles] = useState(homeService.getVehicles(vehicleTypeActive, 0, maxLengthVehicle));
    const [from, setFrom] = useState(0);
    const maxLength = homeService.getMaxLength(vehicleTypeActive);
    const navigate = useNavigate();

    useEffect(() => {
        if (isPC) {
            setVehicles(homeService.getVehicles(vehicleTypeActive, 0, 4))
            setMaxLengthVehicle(4);
            setTo(4)
        }
        else {
            setVehicles(homeService.getVehicles(vehicleTypeActive, 0, 1))
            setMaxLengthVehicle(1);
            setTo(1)
        }
    }, [isPC])

    const changeCarType = function (id) {
        setVehicleTypeActive(id)
        setVehicles(homeService.getVehicles(id, 0, maxLengthVehicle))
    }

    const nextVehicle = function () {
        if (to < maxLength) {
            setFrom(from + 1)
            setTo(to + 1)
            setVehicles(homeService.getVehicles(vehicleTypeActive, from + 1, to + 1))
        }
    }

    const prevVehicle = function () {
        if (from > 0) {
            setFrom(from - 1)
            setTo(to - 1)
            setVehicles(homeService.getVehicles(vehicleTypeActive, from - 1, to - 1))
        }
    }

    const toVehicles = (idActive) => {
        inActiveDropDown();
        let vehiclesType = idActive !== 'all' ? vehicleTypeList.find(v => { return v.id === idActive }).name : 'all';
        console.log(vehiclesType);
        navigate('/vehicles', { state: { vehicleTypeActive: vehiclesType } })
    }


    return (
        <div className='sub-nav-contaier-content'>
            <div className="section-tab">
                <ul className="nav">
                    <li className='section-item'><a onClick={() => toVehicles('all')} className='car-model'><p>Tất cả</p></a></li>
                    {vehicleTypes.map((vehicleType) => (
                        <li key={vehicleType.id} className={`section-item ${vehicleTypeActive === vehicleType.id ? 'active' : ''}`} id={vehicleType.id} onClick={() => changeCarType(vehicleType.id)}>
                            <p className="car-model">{vehicleType.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='vehicle-box'>
                <div className="vehicles-content-list">
                    {vehicles.map((vehicle) => (
                        <div key={vehicle.carName} className="vehicles-content">
                            <div className="vehicles-item">
                                <a onClick={() => toVehicles(vehicleTypeActive)}>
                                    <div className="top-content">
                                        <span>{vehicle.engVer}</span>
                                        <span>{vehicle.engNumber}</span>
                                    </div>
                                    <div className="box-imgae">
                                        <img src={vehicle.carImg}
                                            className="image-car image-index" alt={vehicle.carName} />
                                        {/* <img src={vehicle.carImgHover} className="image-car image-hover" alt={vehicle.carName}/> */}
                                    </div>
                                    <div className="name-car">{vehicle.carName}</div>
                                    <div className="price-car">
                                        <span className="price">
                                            {vehicle.carPrice}
                                            <span className="currency">VNĐ</span>
                                        </span>
                                    </div>
                                    <div className="note-car">
                                        <span className="note-car-0001">{vehicle.carSeat}</span>
                                        <span className="note-car-0002">{vehicle.carDes}</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={`vehicle-button-prev ${from > 0 ? 'avtive-vehicles-slider' : ''}`} onClick={prevVehicle}>
                    <i className="fa-solid fa-chevron-right fa-rotate-180" style={{ color: '#aea7a7' }}></i>
                </div>
                <div className={`vehicle-button-next ${to < maxLength ? 'avtive-vehicles-slider' : ''}`} onClick={() => nextVehicle()}>
                    <i className="fa-solid fa-chevron-right" style={{ color: '#aea7a7' }}></i>
                </div>
            </div>
        </div>
    )
}

export default VehiclesHighlightContent