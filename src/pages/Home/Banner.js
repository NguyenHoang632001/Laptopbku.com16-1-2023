import { useEffect, useState } from "react"
import { getSearchResultByNameService } from "services/ProductService";
import { formatCash } from "utils/customizeString";
import CardItem from "components/CardItem";
import _ from "lodash";
import './Banner.scss'
import { Link } from "react-router-dom";

const Banner = (props) => {
    const [currenBrand, setCurrenBrand] = useState(props.initState);
    const [listProduct, setListProduct] = useState([]);
    const [showlineItemBrand,setShowlineItemBrand]=useState('');
    const handleBrand = (item) => {
        setCurrenBrand(item.value);
        setShowlineItemBrand(item.title);
    }
   
    useEffect(() => {
        getListProduct(currenBrand, 1, 5);

    }, [currenBrand])
    const getListProduct = async (data, page, size) => {
        const res = await getSearchResultByNameService(data, page, size);
        if (res && res.errCode === 0) {
            setListProduct(res.data.rows)
        }
        return res;
    }
   
    return (
        <div className="containerProductMain">
            <div className="title-product">
                <h2 className="title-productText">{props.title}</h2>
            </div>
            <div className="nav-product">



                <div className="container-itemProduct">

                    {!_.isEmpty(props.brand) && props.brand.map((item, index) => {
                        return <span key={index} onClick={() => handleBrand(item)} className={item.title===showlineItemBrand?'item-product item-productShowColor':'item-product'}>{item.title}</span>
                    })}
                </div>

            </div>
            <div className="container-product">

                {/* <div className="nav-product">


                    <div className="container-itemProduct">

                        {!_.isEmpty(props.brand) && props.brand.map((item, index) => {
                            return <span key={index} onClick={() => handleBrand(item.value)} className="item-product">{item.title}</span>
                        })}
                    </div>

                </div> */}

                <div className="list-product">
                    
                    {
                        !_.isEmpty(listProduct) && listProduct.map(function (item) {
                            

                            const price = !_.isEmpty(item.configData) ? (item.configData[0].price) : null;
                            return (
                                
                               
                                <CardItem
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    price={price}
                                    image={item.image1}
                                    memory={!_.isEmpty(item.configData) ? item.configData[0].memory : null}
                                    CPUType={!_.isEmpty(item.configData) ? item.configData[0].CPUType : null}
                                    ramMemory={!_.isEmpty(item.configData) ? item.configData[0].ramMemory : null}
                                    sizeScreen={!_.isEmpty(item.configData) ? item.configData[0].sizeScreen : null}
                                    discount={!_.isEmpty(item.configData) ? item.configData[0].discount : null}
                                    graphicsCard={!_.isEmpty(item.configData) ? item.configData[0].graphicsCard : null}
                                    amountConfig={!_.isEmpty(item.configData) ? item.configData.length : null}
                               
                                    priceToDiscount={!_.isEmpty(item.configData) ? item.configData[0].price - (item.configData[0].price*item.configData[0].discount/100) : null}
                                    ramType={!_.isEmpty(item.configData) ? item.configData[0].ramType : null}
                                    busRam={!_.isEmpty(item.configData) ? item.configData[0].busRam : null}
                                />
                            )
                        })
                    }
                </div>

            </div>
            <div className="container-button">

                    <Link to={`/search?q=${props.initState}`} className="item-button">Xem Thêm >></Link>
            </div>
        </div>)

}
export default Banner;