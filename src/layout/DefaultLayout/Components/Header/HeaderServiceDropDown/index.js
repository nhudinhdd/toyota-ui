import serviceImg from '../../../../../assets/img/header/service/dich-vu.png'
import './HeaderService.css'
function HeaderServiceDropDown() {
    return (
        <div className="service-box">
            <div className="service-box-content col-6 p-0">
                <div className='service-box-content-container'>
                    <h2>
                        DỊCH VỤ BẢO DƯỠNG
                    </h2>
                    <ul>
                        <li>Bảo dưỡng định kì</li>
                        <li>Dịch vụ sửa chữa</li>
                        <li>Dịch vụ chăm sóc làm đẹp xe</li>
                        <li>Chính sách bảo hành</li>
                        <li>Kiểm tra & Triệu hôg</li>
                    </ul>
                </div>

                <div className='service-box-content-container'>
                    <h2>
                        Dịch vụ sau bán háng
                    </h2>
                    <ul>
                        <li>Dịch vụ Tài chính Toyota</li>
                        <li>Bảo hiểm Toyota</li>
                        <li>Xe đã qua sử dụng</li>
                        <li>Gia hạn bảo hành</li>
                    </ul>
                </div>

                <div className='service-box-content-container'>
                    <h2>
                        Sản phẩm chính hãng
                    </h2>
                    <ul>
                        <li>Phụ kiện chính hãng</li>
                    </ul>
                </div>
            </div>
            <div className="service-box-image col-6 p-0">
                <img src={serviceImg} alt='Dịch vụ toyota'></img>
            </div>
        </div>
    )
}

export default HeaderServiceDropDown