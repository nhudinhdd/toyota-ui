import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import BottomHeaderListMenu from './BottomHeaderListMenu/index'
import './BottomHeaderMobile.css'

import * as headerService from '../../../../../../service/headerService'

import { useState } from 'react';
function BottomHeaderMobile() {
    const [isShowMenu, setShowMenu] = useState(false);
    const showMenu = () => {
        setShowMenu(!isShowMenu)
    }
    const menus = headerService.getHeaderTitles();
    return (
        <div id='bottom_header__Mobile'>
            <div className='bottom-header-menu'>
                <FontAwesomeIcon icon={faBars} style={{ color: "#000000", }} className='fa-2x' onClick={showMenu} />
                {isShowMenu && <BottomHeaderListMenu menus={menus}></BottomHeaderListMenu>
                }
            </div>
        </div>
    )
}

export default BottomHeaderMobile