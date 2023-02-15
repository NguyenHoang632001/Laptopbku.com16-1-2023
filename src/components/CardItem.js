import { useNavigate } from 'react-router-dom';
import { formatCash } from 'utils/customizeString';
import './CardItem.scss'

function CardItem(props) {
   
    let navigate = useNavigate();
    // const price=props.price;
    // if(props.price&&props.discount)
    // {
    //      price=props.price-props.price*props.discount;
    // }
    // console.log(price);
    const price=String(props.price-(props.price*props.discount)/100);
  
    
   
    const handleChangePage = () => {
        navigate(`../product/${props.id}`);
    }
   
        const priceToDiscount=String(props.priceToDiscount);

   console.log("props",props.ramType)
    return (
        <div className="card-wrapper" onClick={handleChangePage}>
            <div className='card-img-container'>

            <img src={props.image} placeholder="Laptop" className="card-img" />
            </div>
            {props.amountConfig>0? <h2 className='amountConfig'><span>Có {props.amountConfig} lựa chọn cấu hình</span></h2>:  <h2></h2>} 
         
            <h3 className="card-name">{props.name}</h3>
            {/* formatCash(item.configData[0].price) */}
          
            <div className="containerDetailConfig">
                <div className="itemDetailConfig"><span className='typeDetail'>CPU</span> <span className='mainType'>{props.CPUType ? `${props.CPUType}` : 'Đang cập nhật'}</span> </div>
                <div className="itemDetailConfig"> <span className='typeDetail'>RAM</span><span className='mainType'>{props.ramMemory ? `${props.ramMemory} ${props.ramType} ${props.busRam}`: 'Đang cập nhật'}</span> </div>
                <div className="itemDetailConfig"> <span className='typeDetail'>SSD</span><span className='mainType'>{props.memory ? `${props.memory} ` : 'Đang cập nhật'}</span></div>
                <div className="itemDetailConfig">  <span className='typeDetail'>VGA</span><span className='mainType'>{props.graphicsCard ? `${props.graphicsCard} ` : 'Đang cập nhật'}</span></div>
            </div>
            <del><div className="card-priceDisscout">{props.price ? `${formatCash(props.price)} VNĐ` : 'Đang cập nhật'}</div></del>
            {/* <div className="card-price"><span className='TitlePrice'>Từ</span> {props.price ? `${formatCash(price)}VNĐ` : 'Đang cập nhật'}</div> */}
            <div className="card-price"><span className='TitlePrice'>Từ</span> {props.price ? `${formatCash(priceToDiscount)}VNĐ`: 'Đang cập nhật'}</div>
            
            {props.discount > 0 && <button className='discount'>Giảm  {props.discount && `${props.discount}% `}</button>}


        </div>
    )
}

export default CardItem;