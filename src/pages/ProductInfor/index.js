import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { getProductByIdService } from "services/ProductService";
import { formatCash } from "utils/customizeString";
import _ from "lodash";
import './ProductInfor.scss'
import { useDispatch } from "react-redux";
import { fetchDataFinished, fetchDataStart } from "redux/actions";
import Modal from "react-modal/lib/components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const customStyles = {

  opacity: "0.8",
 


  content: {
    // top: '50%',
    // inset: 'unset',
    // left: '50%',
    // right: 'auto',
    // bottom: 'auto',
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
    // contentLabel: {
    //   color: 'red'
    // },
    // backgroundColor: "red",
    // marginTop: '300px',
    // overFlowY: "scrolls",
    left:'0',
    width: "100%",

    overflow: "hidden",
    margin: "60px auto -25px",
    border: "none",

    // boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    backgroundColor: "transparent",
    display:'flex',
    flexDirection: "column",
    justifycontent: "center",
  //  marginLeft:"50%"
  padding:'0'

    

    


  },

};
function ProductInfor() {
  const dataURL = useLocation().pathname;
  let id = useParams(dataURL).id;
  const [currentId, setCurrentId] = useState('');
  const [currentProduct, setCurrentProduct] = useState({});
  const [currentConfig, setCurrentConfig] = useState({});
  const [currentImage, setCurrentImage] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);


console.log(currentProduct)
  useEffect(() => {
    setCurrentId(id)
  }, [id]);
  useEffect(() => {
    if (currentId) {
      getProductById(currentId);
    }
  }, [currentId])

  const dispatch = useDispatch();

  const getProductById = async (currentId) => {
    dispatch(fetchDataStart());
    let res = await getProductByIdService(currentId);

    if (res && res.errCode === 0) {
      setCurrentProduct(res.data);
      setCurrentConfig(res.data.configData[0]);
      setCurrentImage(res.data.image1)

    }
    dispatch(fetchDataFinished());
  }


  const handleOnclickConfig = (config) => {
    setCurrentConfig(config);
  
  }
  const openModal = () => {
    setIsOpen(true);
  }


  const closeModal = () => {
    setIsOpen(false);
  }
  const a = ">>";
 const price=String(currentConfig.price - ((currentConfig.price)*(currentConfig.discount)/100));
 console.log(price);
  return <div className="containerProductInformain">
    <div className='containerProduct'>
      <h2 className='introduce_Product'>THÔNG TIN CHI TIẾT SẢN PHẨM</h2>

      <div className="wrapTitleLaptop">
        <h2 className="titleLaptop">{currentProduct.brandId} {currentProduct.name}/ {currentConfig && currentConfig.CPUType}/ Ram {currentConfig && currentConfig.ramMemory}/ {currentConfig && currentConfig.memory}/{currentConfig && currentConfig.sizeScreen}</h2>
        <hr></hr>
      </div>


      <div className='container_itemProduct'>

        <div className='image_Infor'>
          <img src={currentImage} className='image_Infor-item'></img>
          <div className="list-image">
            <img src={currentProduct.image1} onClick={() => setCurrentImage(currentProduct.image1)} className='list-image-item' />
            <img src={currentProduct.image2} onClick={() => setCurrentImage(currentProduct.image2)} className='list-image-item' />
            <img src={currentProduct.image3} onClick={() => setCurrentImage(currentProduct.image3)} className='list-image-item' />
            <img src={currentProduct.image4} onClick={() => setCurrentImage(currentProduct.image4)} className='list-image-item' />
          </div>
        </div>
        <ul className='container_InforDetail'>

          <span className='inforPrice itemInfor '>{!_.isEmpty(currentConfig) ? `${formatCash(price)} VNĐ ` : 'Đang cập nhật'}</span>

{console.log(currentConfig)}
          <h2 className='cpuInfor itemInfor'> {!_.isEmpty(currentConfig) ? `${currentConfig.CPUType} ${currentConfig.CPUSpead} Upto ${currentConfig.turboMaxSpeed} ${currentConfig.CPUCache}` : 'Đang cập nhật'} <br /> </h2>
          <h2 className='ramInfor itemInfor'> {!_.isEmpty(currentConfig) ? `${currentConfig.ramMemory} ${currentConfig.ramType}  ${currentConfig.busRam}` : 'Đang cập nhật'}</h2>
          <h2 className='memory itemInfor'>{!_.isEmpty(currentConfig) ? currentConfig.memory : 'Đang cập nhật'}</h2>
          <h2 className='graphicsCard itemInfor'>{!_.isEmpty(currentConfig) ? currentConfig.graphicsCard : 'Đang cập nhật'}</h2>
          <h2 className='sizeScreen itemInfor'>{!_.isEmpty(currentConfig) ? `${currentConfig.sizeScreen} ${currentConfig.screenTechnology}` : 'Đang cập nhật'}</h2>
          <h2 className='operatingSystem itemInfor'>{!_.isEmpty(currentConfig) ? currentConfig.operatingSystem : 'Đang cập nhật'}</h2>

          <h3 className="detailConfig" onClick={() => setIsOpen(true)}>Xem cấu hình chi tiết {a} </h3>
          {/* <p className='descriptionInfor itemInfor'>{currentProduct.description}</p> */}

          <div className="ContactBuyProduct">
            <Link className="buy" to='/contact'>
              <button className="buy-btn">
                MUA NGAY
              </button>
            </Link>
            <Link className="installment" to='/contact'>
              <button className="installment-btn">
                TRẢ GÓP
              </button>
            </Link>



          </div>
          <h2 className="chooseConfig">CẤU HÌNH TÙY CHỌN</h2>
          <div className="container_config">

            {currentProduct.configData && currentProduct.configData.map(config => {
              return (

                <button key={config.id} onClick={() => handleOnclickConfig(config)} className={currentConfig.id === config.id ? "item_config activeConfig" : "item_config"}>
                  <span className="InforItemProduct">{`${config.CPUType}/${config.ramMemory}/${config.memory}/${config.sizeScreen}`}</span>
                  <br />
                  <span className="priceItemProduct">{formatCash(String(config.price - ((config.price)*(config.discount)/100)))} VND</span>

                </button>
              )
            })}
          </div>
        </ul>

      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"



      >
        <div className="containerModal">

          <span onClick={closeModal} className="closeTabIcon">
            <FontAwesomeIcon icon={faCircleXmark} />
          </span>
          {/* </button> */}
          <div className="containerContent" >
            {/* <div className="line"></div> */}
            <h3 className="Content-Title">CPU</h3>
            <div>
              <span className="contentLabel">Loại CPU : </span>
              <span className="contentLabel">{currentConfig && currentConfig.CPUType}</span>
            </div>
            <div>
              <span className="contentLabel">Tốc độ CPU : </span>
              <span className="contentLabel">{currentConfig && currentConfig.CPUSpead}</span>
            </div>
            <div>
              <span className="contentLabel">Tốc độ tối đa Turbo : </span>
              <span className="contentLabel">{currentConfig && currentConfig.turboMaxSpeed}</span>
            </div>
            <div>
              <span className="contentLabel">Bộ nhớ đệm CPU : </span>
              <span className="contentLabel">{currentConfig && currentConfig.CPUCache}</span>
            </div>
          </div>
          <div className="containerContent">
            <div className="line"></div>
            <h3 className="Content-Title">RAM</h3>
            <div>
              <span className="contentLabel">Bộ nhớ RAM : </span>
              <span className="contentLabel">{currentConfig && currentConfig.ramMemory}</span>
            </div>
            <div>
              <span className="contentLabel">Loại RAM : </span>
              <span className="contentLabel">{currentConfig && currentConfig.ramType}</span>
            </div>
            <div>
              <span className="contentLabel">BUS RAM : </span>
              <span className="contentLabel">{currentConfig && currentConfig.busRam}</span>
            </div>
          </div>
          <div className="containerContent">
            <div className="line"></div>
            <h3 className="Content-Title">Ổ cứng</h3>
            <div>
              <span className="contentLabel">Số lượng ổ cứng : </span>
              <span className="contentLabel">{currentConfig && currentConfig.numberOfDrives}</span>
            </div>
            <div>
              <span className="contentLabel">Dung lượng : </span>
              <span className="contentLabel">{currentConfig && currentConfig.memory}</span>
            </div>

          </div>
          {/* <div className="containerContent">
            <div className="line"></div>
            <h3 className="Content-Title">Ổ cứng SSD</h3>
            <div>
              <span className="contentLabel">Dung lượng</span>
              <span className="contentLabel">{currentConfig && currentConfig.memory}</span>
            </div>
          </div> */}
          <div className="containerContent">
            <div className="line"></div>
            <h3 className="Content-Title">Card đồ họa</h3>
            <div>
              <span className="contentLabel">Card đồ họa : </span>
              <span className="contentLabel">{currentConfig && currentConfig.graphicsCard}</span>
            </div>
            <div>

              <span className="contentLabel">Bộ nhớ đồ họa : </span>
              <span className="contentLabel">{currentConfig && currentConfig.graphicsMemory}</span>
            </div>

          </div>
          <div className="containerContent">
            <div className="line"></div>
            <h3 className="Content-Title">Màn hình</h3>
            <div>
              <span className="contentLabel">Kích thước màn hình : </span>
              <span className="contentLabel">{currentConfig && currentConfig.sizeScreen}</span>
            </div>
            <div>

              <span className="contentLabel">Màn hình cảm ứng : </span>
              <span className="contentLabel">{currentConfig && currentConfig.touchScreen}</span>
            </div>
            <div>

              <span className="contentLabel">Công nghệ màn hình : </span>
              <span className="contentLabel">{currentConfig && currentConfig.screenTechnology}</span>
            </div>
          </div>
          <div className="line"></div>
          <div className="containerContent">
            <div className="line"> </div>
            <h3 className="Content-Title">PIN/Battery</h3>
            <div>
              <span className="contentLabel">Thông tin Pin : </span>
              <span className="contentLabel">{currentConfig && currentConfig.barteryInfo}</span>
            </div>
            <div>

              <span className="contentLabel">Thời gian sử dụng thường : </span>
              <span className="contentLabel">{currentConfig && currentConfig.useTime}</span>
            </div>
            <div>

              <span className="contentLabel">Bộ sạc : </span>
              <span className="contentLabel">{currentConfig && currentConfig.charger}</span>
            </div>
          </div>
          <div className="containerContent">
            <div className="line"></div>
            <h3 className="Content-Title">Hệ điều hành</h3>
            <div>
              <span className="contentLabel">Hệ điều hành : </span>
              <span className="contentLabel">{currentConfig && currentConfig.operatingSystem}</span>
            </div>

          </div>
          <div className="containerContent">
            <div className="line"></div>
            <h3 className="Content-Title">Trọng lượng</h3>
            <div>
              <span className="contentLabel">Trọng lượng : </span>
              <span className="contentLabel">{currentConfig && currentConfig.weight}</span>
            </div>

          </div>
          <div className="containerContent">
            <div className="line"></div>
            <h3 className="Content-Title">Khác</h3>
            <div>
              <span className="contentLabel">Cổng giao tiếp : </span>
              <span className="contentLabel">{currentConfig && currentConfig.prototypeComunication}</span>
            </div>

          </div>
        </div>

      </Modal>
    </div>
   <div className="newsProduct"></div>
    <div className="markdownPoroduct" dangerouslySetInnerHTML={{ __html: currentProduct.descriptionHTML }}>

    </div>
    
  </div>
}


export default ProductInfor;

