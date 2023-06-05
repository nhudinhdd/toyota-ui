import recruitment from "../../../../../assets/img/header/toyota-info/about-banner-1.png"
import copanyInfo from "../../../../../assets/img/header/toyota-info/ve-toyota-header.jpg"
import community from "../../../../../assets/img/header/toyota-info/about-banner-3.png"
import localization from "../../../../../assets/img/header/toyota-info/about-banner-4.png"

import HeaderImgsDropDown from "../HeaderImgsDropDown"

function HeaderToyotaInfo() {
    return (
        <HeaderImgsDropDown imgs={[{content: recruitment, des: 'Tuyển dụng'}, {content: copanyInfo, des: 'Giới thiệu công ty'}, {content: community, des: 'Cộng đồng'},
        {content: localization, des: 'Nội địa hóa'}]}></HeaderImgsDropDown>
    )
}

export default HeaderToyotaInfo