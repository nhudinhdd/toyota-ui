import './Home.css'

import product1 from "../../assets/img/new-product-1.png"
import postSmall1 from "../../assets/img/post-small1.jpg"
import postSmall2 from "../../assets/img/post-small2.png"
import Silder from '../../layout/Components/Home/Silder'
import Vehicles from '../../layout/Components/Home/VehiclesHighlight'

function Home() {
    return (
        <div className="home-container">
            <Silder></Silder>
            <div className='section-home'>
            <Vehicles></Vehicles>
            <div id="section">
                <div className="section-container">
                    <h2 className="section-title">TIN TỨC &amp; KHUYẾN MÃI</h2>
                    <div className="section-tab">
                        <ul className="nav">
                            <li className="section-item active" id="vehicle-0001">
                                <h2 className="car-model">SẢN PHẨM</h2>
                            </li>
                            <li className="section-item" id="vehicle-0002">
                                <h2 className="car-model">KHUYẾN MÃI</h2>
                            </li>
                            <li className="section-item" id="vehicle-0003">
                                <h2 className="car-model">XÃ HỘI</h2>
                            </li>
                            <li className="section-item" id="vehicle-0004">
                                <h2 className="car-model">THÔNG TIN KHÁC</h2>
                            </li>
                        </ul>
                    </div>
                    <div className="section-new-post">
                        <div className="section-new-post-large">
                            <a className="section-new-post-large-container"
                                href="/tin-tuc/san-pham/toyota-wigo-hoan-toan-moi-sap-ra-mat-tai-viet-nam-35508">
                                <img className="lazy" data-src={product1}
                                    src={product1}
                                    alt="Toyota Wigo hoàn toàn mới sắp ra mắt tại Việt Nam" />
                                <div className="section-new-post-large-content">
                                    <div className="section-new-post-large-title">
                                        <h5>Toyota Wigo hoàn toàn mới sắp ra mắt tại Việt Nam</h5>
                                    </div>
                                    <div className="section-new-post-large-content-detail">
                                        <p>Toyota Wigo hoàn toàn mới với những thay đổi toàn diện, cân bằng giữa 03 yếu
                                            tố thiết kế mới năng động cá tính,
                                            khả năng vận hành êm ái và tính năng an toàn hiện đại, sẽ sớm được giới
                                            thiệu tại thị trường Việt Nam.</p>
                                    </div>
                                </div>

                            </a>
                        </div>

                        <div className="section-new-post-small">
                            <a className="section-new-post-small-container"
                                href="/tin-tuc/san-pham/toyota-wigo-hoan-toan-moi-sap-ra-mat-tai-viet-nam-35508">
                                <img src={postSmall1} data-src={postSmall1} className="lazy"
                                    alt="Toyota Việt Nam công bố doanh số bán hàng tháng 3/2023" />
                                <div className="section-new-post-small-content">
                                    <div className="section-new-post-small-title">
                                        <h5>Toyota Việt Nam công bố doanh số bán hàng tháng 3/2023</h5>
                                    </div>
                                    <div className="section-new-post-small-detail">
                                    </div>
                                </div>

                            </a>

                            <a className="section-new-post-small-container"
                                href="tin-tuc/san-pham/hilux-huyen-thoai-ban-tai-chinh-phuc-dinh-cao-cua-toyota-viet-nam-chinh-thuc-tro-lai-tu-thang-3-2023-35452">
                                <img src={postSmall2} data-src={postSmall2} className="lazy"
                                    alt="Hilux – “Huyền thoại bán tải, chinh phục đỉnh cao”  của Toyota Việt Nam chính thức trở lại từ tháng 3/2023" />
                                <div className="section-new-post-small-content">
                                    <div className="section-new-post-small-title">
                                        <h5>Hilux – “Huyền thoại bán tải, chinh phục đỉnh cao” của Toyota Việt Nam chính
                                            thức trở lại từ tháng 3/2023</h5>
                                    </div>
                                    <p className="section-new-post-small-detail">Sau hơn 1 năm vắng mặt tại thị trường Việt Nam, Công ty Ô tô Toyota Việt Nam
                                        chính thức giới thiệu mẫu xe Toyota Hilux 2023 – “Huyền thoại bán tải –
                                        Chinh phục đỉnh cao” trở lại thị trường trong tháng 3/2023 này. Mẫu xe Hilux
                                        2023 với những nâng cấp về giải trí và tiện nghi hiện đại nhằm đáp ứng nhu
                                        cầu và sự chờ đợi của khách hàng Việt, và cũng là mẫu xe sử dụng động cơ dầu
                                        đạt tiêu chuẩn khí thải Euro 5 - tiêu chuẩn được áp dụng rộng rãi tại nhiều
                                        quốc gia trên thế giới nhằm bảo vệ môi trường cũng như sức khỏe cộng đồng.
                                    </p>

                                </div>

                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
           
        </div>

    )
}

export default Home