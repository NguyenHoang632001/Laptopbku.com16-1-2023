import { useEffect, useState } from "react";
import { getAllProduct, getSearchResultService } from "services/ProductService";
import CardItem from "components/CardItem";
import Pagination from '@atlaskit/pagination';
import '../Search/Search.scss'
import _ from "lodash";
import { useDispatch } from "react-redux";
import { fetchDataFinished, fetchDataStart } from "redux/actions";

import './Product.scss'

function Search() {
  const [currentRespone, setCurrentRespone] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentResponse();
    window.scrollTo({top: 0});

  }, [currentPage]);

  const getCurrentResponse = async () => {
    dispatch(fetchDataStart());
    let pageSize = 20;
    let res = await getAllProduct(currentPage, pageSize);
    if (res && res.errCode === 0) {

      setCurrentRespone([...res.data.rows]);
      setTotalPages(Math.ceil(res.data.count / pageSize));
    }
    dispatch(fetchDataFinished());
  }


  const createPageArr = (pages) => {
    let pageArr = [];
    for (let i = 1; i <= pages; i++) {
      pageArr.push(i);
    }
    return pageArr;
  }

  return (
    <div className="containerProductMain">


      <div className="containerProductPage">
        <div className="products">
          
          {
            currentRespone.map(item => {
              console.log('item',item)
              return (
                <CardItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  discount={!_.isEmpty(item.configData) ? item.configData[0].discount : null}
                  price={!_.isEmpty(item.configData) ? item.configData[0].price : null}
                  image={item.image1}
                    amountConfig={!_.isEmpty(item.configData) ? item.configData.length : null}
                    priceToDiscount={!_.isEmpty(item.configData) ? item.configData[0].price - (item.configData[0].price*item.configData[0].discount/100) : null}         
                     memory={!_.isEmpty(item.configData) ? item.configData[0].memory : null}
                    CPUType={!_.isEmpty(item.configData) ? item.configData[0].CPUType : null}
                     ramMemory={!_.isEmpty(item.configData) ? item.configData[0].ramMemory : null}
                    sizeScreen={!_.isEmpty(item.configData) ? item.configData[0].sizeScreen : null}
                                    // discount={!_.isEmpty(item.configData) ? item.configData[0].discount : null}
                    graphicsCard={!_.isEmpty(item.configData) ? item.configData[0].graphicsCard : null}
                                    // amountConfig={!_.isEmpty(item.configData) ? item.configData.length : null}
                               
                                    // priceToDiscount={!_.isEmpty(item.configData) ? item.configData[0].price - (item.configData[0].price*item.configData[0].discount/100) : null}
                />
              )
            })
          }
        </div>
        <div className="showPage">
          <span>Trang {currentPage}/{totalPages}</span>
        </div>
        <div className="buttonChangePage">
          <Pagination
            pages={[...createPageArr(totalPages)]}
            // max={totalPages >= 10 ? 8 : totalPages}
            value={currentPage}
            onChange={(e, page) => setCurrentPage(page)}
            style={{ fontSize: '16px' }}
          />
        </div>
      </div>
    </div>
  );
}
export default Search;