import hybird from "../../../../../assets/img/header/electro/toyota-nav-hybrid-electric.png"
import electric from "../../../../../assets/img/header/electro/toyota-nav-battery-electric.png"
import techElectric from "../../../../../assets/img/header/electro/toyota-nav-electrification.jpg"
import HeaderImgsDropDown from "../HeaderImgsDropDown"

function HeaderNewDropDown() {
    return (
        <HeaderImgsDropDown imgs={[{content: hybird, des: 'Điện hóa ô tô'}, {content: electric, des: 'Công nghệ Hybird'}, {content: techElectric, des: 'Công nghệ thuần điện'}]}></HeaderImgsDropDown>
    )
}

export default HeaderNewDropDown