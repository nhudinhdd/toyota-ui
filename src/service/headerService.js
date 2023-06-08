import products from "../assets/img/header/news/sản-phẩm.png"
import sales from "../assets/img/header/news/khuyen-mai.jpg"
import social from "../assets/img/header/news/header6.png"
import toyotaInfo from "../assets/img/header/news/thông-tin-khác.png"

const headerTitles =
    [{ id: 'product', name: 'Sản Phẩm', isActive: false },
    { id: 'tech', name: 'Công nghệ', isActive: false },
    { id: 'service', name: 'Dịch vụ', isActive: false },
    { id: 'news', name: 'Tin tức và khuyến mãi', isActive: false },
    { id: 'electro', name: 'Điện hóa', isActive: false },
    { id: 'toyotaInfo', name: 'Về Toyota Việt Nam', isActive: false }]


const headerServices =
    [{ name: 'Bảo dưỡng định kì', id: 'service-001' }, { name: 'Dịch vụ sửa chữa', id: 'service-002' },
    { name: 'Dịch vụ làm đẹp xe', id: 'service-003' }, { name: 'Kiểm tra & Triệu hồi', id: 'service-004' },]
const news =
    [{ content: products, des: 'Sản Phẩm' }, { content: sales, des: 'Khuyến Mãi' }, { content: social, des: 'Xã Hội' }, { content: toyotaInfo, des: 'Thông tin khác' }]

export const getHeaderTitles = () => {
    return headerTitles
}

export const getHeaderServices = () => {
    return headerServices;
}