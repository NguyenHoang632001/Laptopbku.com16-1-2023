import { useEffect, useState } from "react";
import { getConfigDiscountService } from "services/ProductService";
import _ from "lodash";
import { formatCash } from "../../utils/customizeString"
import CardItem from "components/CardItem";
import { Link } from "react-router-dom";
import './HotDeal.scss'
import hotDealimg from './zyro-image.png'



function HotDeal(props) {
    const [configDiscount, setConfigDiscount] = useState([]);
    const getConfigDiscount = async (limit) => {
        const res = await getConfigDiscountService(limit);
        if (res && res.errCode === 0) {
            setConfigDiscount(res.data);
        }

    }
    useEffect(() => {
        getConfigDiscount(5);

    }, [])
   
    return (
        <div className="container-productMain">
            <div className="titleHotDeal">
                <div className="titleHotDealMain">

                    <img className="imgHotDeal" src={hotDealimg}></img>
                    <span className="nameHotDeal">KHUYẾN MÃI HOT</span>
                </div>
            </div>
            <div className="container-product">


                <div className="list-product">




                    {
                        !_.isEmpty(configDiscount) && configDiscount.map(function (item) {
                        
                            return (
                                <>

                                    {item.configData &&

                                        <CardItem
                                            price={item.price}
                                            image={item.configData.image1}
                                            key={item.id}
                                            id={item.productId}
                                            name={item.configData.name}
                                            graphicsCard={!_.isEmpty(item.configData) ? item.graphicsCard : null}
                                            memory={!_.isEmpty(item.configData) ? item.memory : null}
                                            CPUType={!_.isEmpty(item.configData) ? item.CPUType : null}
                                            ramMemory={!_.isEmpty(item.configData) ? item.ramMemory : null}
                                            sizeScreen={!_.isEmpty(item.configData) ? item.sizeScreen : null}
                                            discount={!_.isEmpty(item.configData) ? item.discount : null}
                                            ramType={!_.isEmpty(item.configData) ? item.ramType : null}
                                            busRam={!_.isEmpty(item.configData) ? item.busRam : null}
                                            priceToDiscount={item.discount ? item.price - (item.price*item.discount/100) : null}
                                        />
                                    }
                                </>


                            )
                        })
                    }
                </div>

                <div className="container-button">

                    {/* <Link to={`/search?q=${props.initState}`} className="item-button">Xem Thêm</Link> */}
                </div>
            </div>
        </div>);
}

export default HotDeal;