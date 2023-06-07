import products from "../../../../../assets/img/header/news/sản-phẩm.png"
import sales from "../../../../../assets/img/header/news/khuyen-mai.jpg"
import social from "../../../../../assets/img/header/news/header6.png"
import toyotaInfo from "../../../../../assets/img/header/news/thông-tin-khác.png"
import HeaderImgsDropDown from "../HeaderImgsDropDown"

function HeaderNewDropDown() {
    return (
        <HeaderImgsDropDown imgs={[{content: products, des: 'Sản Phẩm'}, {content: sales, des: 'Khuyến Mãi'}, {content: social, des: 'Xã Hội'}, {content: toyotaInfo, des: 'Thông tin khác'}]}></HeaderImgsDropDown>
    )
}

export default HeaderNewDropDown