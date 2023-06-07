import './Vehicles.css'

function VehiclesContent({ vehicles }) {
    console.log("Vehicles Contetnt");

    return (<div className="vehicles-content-list-contain">
        <div className="vehicles-show-conntanin">
            <div className="list-car">
                {
                    vehicles.map((vehicle) => (
                        <div key={vehicle.carName} className="col-12 col-md-6 col-lg-4 vehicle-item">
                            <div className="box-vehicle-item">
                                <div className="box-vehicle-image">
                                    <a href="/alphard-luxury">
                                        <img className="lazy"
                                            data-src={vehicle.carImg}
                                            src={vehicle.carImg}
                                            alt={vehicle.carName} />

                                        <img className="lazy"
                                            data-src={vehicle.carImgHover}
                                            src={vehicle.carImgHover}
                                            alt={vehicle.carName} />
                                    </a>

                                </div>
                                <div className="box-vehicle-item-content">
                                    <a href="/alphard-luxury">
                                        <h2 className="car-name">
                                            {vehicle.carName}
                                        </h2>

                                        <div className="price-car">
                                            <span className="price-car-content">Giá từ</span>
                                            <span className="price">
                                                {vehicle.carPrice}
                                                <span className="currency">VNĐ</span>
                                            </span>
                                        </div>
                                        <div className="item-description">
                                            <div className="item-description01">
                                                <p><i className="fa-sharp fa-solid fa-square fa-2xs"
                                                    style={{ color: '#000000' }}></i>{vehicle.carSeat}</p>
                                                <p><i className="fa-sharp fa-solid fa-square fa-2xs"
                                                    style={{ color: '#000000' }}></i>{vehicle.carFuction}</p>
                                                <p><i className="fa-sharp fa-solid fa-square fa-2xs"
                                                    style={{ color: '#000000' }}></i>{vehicle.carFuel}</p>
                                            </div>
                                            <div className="item-description01">
                                                <p><i className="fa-sharp fa-solid fa-square fa-2xs"
                                                    style={{ color: '#000000' }}></i>{vehicle.carOrigin}</p>
                                                <p><i className="fa-sharp fa-solid fa-square fa-2xs"
                                                    style={{ color: '#000000' }}></i>{vehicle.carDes}</p>
                                            </div>
                                            <div className="item-description01">
                                                <p><i className="fa-sharp fa-solid fa-square fa-2xs"
                                                    style={{ color: '#000000' }}></i>{vehicle.carEngDes}</p>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="content-product-compare">
                                        <div className="cost-est">
                                            <a href="/du-toan-chi-phi">DỰ TOÁN</a>
                                        </div>
                                        <div className="compare">
                                            <a href="/so-sanh"><span>SO SÁNH</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }


            </div>
        </div>
    </div>)
}

export default VehiclesContent