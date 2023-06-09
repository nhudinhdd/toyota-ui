import vehicleBanner from '../../assets/img/vehicles-banner.png'
import VehiclesContent from '../../layout/Components/Vehicles/VehiclesContent'
import VehiclesFilter from '../../layout/Components/Vehicles/VehiclesFilter'
import * as vehicleService from '../../service/vehicles'
import { useLocation } from 'react-router-dom'

import { useState } from 'react'
function Vehicles() {
    const { state } = useLocation();
    const { vehicleTypeActive = 'all' } = state;
    const [vehicles, setVehicles] = useState(vehicleService.getVehicles(vehicleTypeActive, 'all', 'all', 'all'))
    const [filterData, setFilterData] = useState({ style: 'all', price: 'all', category: 'all', order: 'all' })
    const callBack = ({ style = 'all', price = 'all', category = 'all', order = 'all' }) => {
        setFilterData({ style, price, category, order })
        setVehicles(vehicleService.getVehicles(style, category, price, order))
    }



    return (
        <div className="vehicles-box">
            <div id="vehicles-container">
                <div className="vehicles-banner">
                    <img src={vehicleBanner} alt="Corolla Croos dẫn đầu xu thế" />
                </div>
                <VehiclesFilter callBack={callBack} filterData={filterData} vehicleTypeActive = {vehicleTypeActive}></VehiclesFilter>

            </div>
            <VehiclesContent vehicles={vehicles}></VehiclesContent>
        </div>


    )
}

export default Vehicles