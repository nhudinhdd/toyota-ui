import './BottomHeaderListMenu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


function BottomHeaderListMenu({menus}) {
    return (

        <div className='mobile-menu-box'>
            <div className='mobile-menu-container'>
                <ul>
                    {menus.map((menu)=>(
                             <li className='menu-title' id={menu.id}>
                             <span >{menu.title}</span>
     
                             <FontAwesomeIcon icon={faChevronRight} style={{ color: "#d71921", }} />
                         </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default BottomHeaderListMenu