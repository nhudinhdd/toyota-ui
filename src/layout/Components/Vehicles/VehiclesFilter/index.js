import './VehiclesFilter.css'
import * as vehiclesService from '../../../../service/vehicles'
function VehiclesFilter({callBack, filterData}) {
    const carStyles = vehiclesService.getVehicleTypes();
    const carPrice = vehiclesService.getCarPriceRank();
    const carCategory = vehiclesService.getVehicleCategory();
    const onChangeStyle = (e) => {
        filterData['style'] = e.target.value;
        callBack(filterData);
    }

    const onChangePrice = (e) => {
        filterData['price'] = e.target.value;
        callBack(filterData);
    }


    const onChangeCategory = (e) => {
        filterData['category'] = e.target.value;
        callBack(filterData);
    }

    const onChangeOrder = (e) => {
        filterData['order'] = e.target.value;
        callBack(filterData);
    }

    return (
        <div className='filter-group-list'>
            <div className='filer-group'>
                <label htmlFor="car-style" className='car-filter-style'>Kiểu dáng</label>
                <select name='car-style' onChange={onChangeStyle} className='select-input'>
                    <option defaultValue value='all'>Chọn</option>
                    {carStyles.map((style) => (
                        <option key={style.name} value={style.name}>{style.name}</option>
                    ))}
                </select>
            </div>
            {/* <div className='filer-group'>
                <label htmlFor="car-price" className='car-filter-style'>Giá</label>
                <select name='car-price' onChange={onChangePrice} className='select-input'>
                    <option disabled selected value='all'>Chọn</option>
                    {carPrice.map((style) => (
                        <option value={style.idPrice}>{style.des}</option>
                    ))}
                </select>
            </div> */}

            <div className='filer-group'>
                <label htmlFor="category" className='car-filter-style'>Dòng xe</label>
                <select name='category' onChange={onChangeCategory} className='select-input'>
                    <option  defaultValue value='all'>Tất cả</option>
                    {carCategory.map((style) => (
                        <option key={style} value={style}>{style}</option>
                    ))}
                </select>
            </div>

            <div className='filer-group sort-car'>
                <label htmlFor="order" className='car-filter-style'>Sắp xếp</label>
                <select name='order' onChange={onChangeOrder} className='select-input'>
                    <option defaultValue value='all'>Tất Cả</option> 
                    <option value='asc'>Giá từ thấp tới cao</option> 
                    <option value='desc'>Giá từ cao tới thấp</option>  
                </select>
            </div>
        </div>
    )
}

export default VehiclesFilter