import './TopHeader.css'

function TopHeader () {
    return (
        <div id="top_header">
        <ul className="nav">
            <li className="hotline"><i className="fa-solid fa-phone" style={{ color: "#c93b42" }}></i>
                <a>0987930704</a>
            </li>
            <li><input type="text" name="search" placeholder="Từ khóa" className="input-search" /> <i
                className="fa-solid fa-magnifying-glass"></i></li>
            <li><a href="https://www.facebook.com/quyquy270498"><i className="fa-brands fa-facebook fa-lg"
                style={{ color: "#0e3271" }}></i></a></li>
            <li><a href=""><i className="fa-brands fa-youtube fa-lg" style={{ color: "#dd2727" }}></i></a></li>
        </ul>
    </div>
    )
}

export default TopHeader