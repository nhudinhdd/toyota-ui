import './HeaderImgsDropDown.css'

function HeaderImgsDropDown({ imgs }) {
    return (
        <div className="car-tech">

            {imgs.map((img) => (
                <div className= 'car-content' key={img.des}>
                    <img src={img.content}>
                    </img>
                    <span className='car-tech-des'>{img.des}</span>
                </div>

            ))}
        </div>
    )
}

export default HeaderImgsDropDown
