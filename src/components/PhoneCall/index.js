import './PhoneCall.css'

function PhoneCall() {
    return (
        <div className='phone-ring'>
            <div className='phone-ring-container'>
                <div className="coccoc-alo-ph-circle"></div>
                <div className="coccoc-alo-ph-circle-fill"></div>
                <div className="coccoc-alo-ph-img-circle">
                    <a href='tel:0987930704'>
                        <i className="fa-solid fa-phone fa-shake" style={{ color: '#ffffff' }}></i>
                    </a>
                </div>
                <div className='hotline-bar'>
                    <a href='tel:0987930704'>
                        <span>098.793.0704</span></a>
                </div>
            </div>
        </div>
    )
}

export default PhoneCall