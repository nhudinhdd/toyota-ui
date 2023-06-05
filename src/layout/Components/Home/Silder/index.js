import silder1 from "../../../../assets/img/slider/silder1.jpg"
import silder2 from "../../../../assets/img/slider/silder2.jpg"
import silder3 from "../../../../assets/img/slider/silder3.png"
import silder4 from "../../../../assets/img/slider/silder4.jpg"
import silder5 from "../../../../assets/img/slider/sidler5.jpeg"

import { useState} from 'react';

function Silder() {
    const [imgSilder, setImgSilder] = useState(silder1)
    const [currentActiveSilder, setCurrentActiveSilder] = useState(1)
    const nextSilder = () => {
        switch (currentActiveSilder) {
            case 1:
                setImgSilder(silder2)
                break;
            case 2:
                setImgSilder(silder3)
                break;
            case 3:
                setImgSilder(silder4)
                break;
            case 4:
                setImgSilder(silder5)
                break;
            case 5:
                setImgSilder(silder1)
                break;

        }
        if (currentActiveSilder == 5)
            setCurrentActiveSilder(1)
        else
            setCurrentActiveSilder(currentActiveSilder + 1)

    }

    const previousSilder = function () {

        switch (currentActiveSilder) {

            case 1:
                setImgSilder(silder5)
                break;
            case 2:
                setImgSilder(silder1)
                break;
            case 3:
                setImgSilder(silder2)
            case 4:
                setImgSilder(silder3)
                break;
            case 5:
                setImgSilder(silder4)
                break;

        }
        if (currentActiveSilder == 1)
            setCurrentActiveSilder(5)
        else
            setCurrentActiveSilder(currentActiveSilder - 1)

    }
    return(
        <div id="silder">
        <div className="silder1">
            <img src={imgSilder} alt="" id="imgSilder" />
            <div id="next" onClick={nextSilder}>
                <a href="#">
                    <i className="fa-solid fa-circle-chevron-right fa-2xl" style={{ color: "#bab5b5" }}></i>
                </a>
            </div>
            <div id="previous"
                onClick={previousSilder}>
                <a href="#">
                    <i className="fa-solid fa-circle-chevron-right fa-flip-horizontal fa-2xl"
                        style={{ color: "#bab5b5" }}></i>
                </a>
            </div>
            <ul className="slider-dots">
                <li className={`slider-dot-item ${currentActiveSilder === 1 ? 'active' : ''}`}></li>
                <li className={`slider-dot-item ${currentActiveSilder === 2 ? 'active' : ''}`}></li>
                <li className={`slider-dot-item ${currentActiveSilder === 3 ? 'active' : ''}`}></li>
                <li className={`slider-dot-item ${currentActiveSilder === 4 ? 'active' : ''}`}></li>
                <li className={`slider-dot-item ${currentActiveSilder === 5 ? 'active' : ''}`}></li>
            </ul>
        </div>
    </div>
    )
}

export default Silder