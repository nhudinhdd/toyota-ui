import './Footer.css'
function Footer() {
    return (<div className="box-footer-container">
        <div className="footer-container">
            <div className="col-12 col-lg-5 footer-item">
                <h2 className="footer-menu-title">CÔNG TY Ô TÔ TOYOTA VIỆT NAM</h2>
                <ul>
                    <li>
                        <p>Số GCNĐKDN: 2500150335</p>
                    </li>
                    <li>
                        <p>Cấp lần đầu: Ngày 26/03/2007</p>
                    </li>
                    <li>
                        <p>Đăng ký thay đổi lần thứ 19: Ngày 02/02/2023</p>
                    </li>
                    <li>
                        <p>Cơ quan cấp: Sở kế hoạch và đầu tư tỉnh Hà Nội</p>
                    </li>
                    <li>
                        <p>Địa chỉ: Số 15 Đường Phạm Hùng, Phường Mỹ Đình 2, Quận Nam Từ Liêm, Thành Phố Hà Nội, Việt Nam.</p>
                    </li>
                </ul>
            </div>
            <div className="col-12 col-lg-3 footer-item">
                <h2 className="footer-menu-title">ĐƯỜNG DÂY NÓNG</h2>
                <ul>
                    <li>
                        <p>0987930704</p>
                    </li>
                    <li>
                        <p>toyotamydinh4s.xehop@gmail.com</p>
                    </li>
                </ul>
            </div>
            <div className="col-12 col-lg-4 footer-item">
                <h2 className="footer-menu-title">ĐĂNG KÝ NHẬN BẢN TIN</h2>
                <ul>
                    <li><p>Đừng bỏ lỡ những tin tức khuyến mãi của chúng tôi</p></li>
                    <li>
                        <input type="text" placeholder="Email" className="email-footer" />
                        <button className="footer-button"><i className="fas fa-arrow-right" style={{fontSize: "21px"}}></i></button>
                    </li>
                    <li></li>
                </ul>
            </div>
        </div>
    </div>)
}

export default Footer