import hybridMenu from "../../../../../assets/img/header/hybrid_menu.jpg"
import tss from "../../../../../assets/img/header/tss.png"
import tnga from "../../../../../assets/img/header/tnga.png"
import HeaderImgsDropDown from "../HeaderImgsDropDown"
function HeaderTech() {
    return (
       <HeaderImgsDropDown imgs={[{content: hybridMenu, des: 'HYBRID'}, {content: tss, des: 'tss'}, {content: tnga, des: 'tnga'}]}></HeaderImgsDropDown>
    )
}

export default HeaderTech