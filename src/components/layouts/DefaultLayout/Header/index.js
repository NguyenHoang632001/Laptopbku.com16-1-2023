import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useDispatch } from 'react-redux';
import {
  faMagnifyingGlass,
  faComputer,
  faScrewdriverWrench,

  faNewspaper,
  faPhoneVolume,

  faFolderOpen,
  faLaptopMedical,
  faFileLines,
  faLaptop,
  faBars,
  faXmark,

  faHeadphonesSimple

} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import ItemHeader from './ItemHeader';
import './Header.scss';
import image from '../../../../access/image/LOGO_OFFICIAL.png';
import { Link } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";

import { useState } from 'react';
function Header(props) {
  let navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const [showMenu,setShowMenu]=useState(false);
  const [titleShowLine,setTitleShowLine]=useState('SẢN PHẨM');
  const handleOnChangeInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleOnClickSearchBtn = () => {
    if (searchInput) {
      navigate(`../search?q=${searchInput}`, { replace: true });
    }
  };
  const handleRedirectHome = () => {
    navigate(`../`);
    setTitleShowLine('')
    window.scrollTo({top: 0});
  }
  const enterPressed = (event) => {
    var code = event.keyCode || event.which;
    if (code === 13) {
      handleOnClickSearchBtn();

    }
  }
const inFoHeaderItem=[
  {
    to:'/product',
    icon:'faLaptop',
    title:'SẢN PHẨM'
  },
  {
    to:'/software',
    icon:'faScrewdriverWrench',
    title:'KHO PHẦN MỀM'
  },
  {
    to:'/ensurrance',
    icon:'faNewspaper',
    title:'TRA CỨU BẢO HÀNH'
  },
  {
    to:'/news',
    icon:'faFileLines',
    title:'TIN TỨC'
  },
  {
    to:'/accessory',
    icon:'faHeadphonesSimple',
    title:'DỊCH VỤ'
  },
  {
    to:'/contact',
    icon:'faPhoneVolume',
    title:'LIÊN HỆ'
  }
]
const showLineTitile=(title)=>
{
  setTitleShowLine(title);
  setShowMenu(false);
}


  return (
    <div className='containerMainBody'>


      <div className="header-wrapper">

        <div className="header-content_left">


          <img onClick={handleRedirectHome} className="header-logo" src={image}>

          </img>
          <div className="header-search">
            <input
              className="search_input"
              value={searchInput}
              onChange={handleOnChangeInput}
              placeholder="Tìm kiếm "
              onKeyPress={enterPressed.bind(this)}

            />
           
            <button className="search-button" onClick={handleOnClickSearchBtn}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />

            </button>
          </div>
        </div>
     
        <div className='menu' onClick={()=>setShowMenu(!showMenu)} >
         <ItemHeader to="" link="" icon={showMenu==false?faBars:faXmark} />
        </div>
        <div className={showMenu==false?'header-content_right':'header-content_right-show'}>
         
          {inFoHeaderItem.map((item,index)=>
          {
            switch (item.title) {
              case 'SẢN PHẨM':
                return (<div className='productMain' onClick={()=>showLineTitile(item.title)} key={index}>
                <div  className={titleShowLine==='SẢN PHẨM'?'productMain-product productMainShowLine':'productMain-product'} >
    
                    <ItemHeader to={item.to} link="" icon={faLaptop}
                    title={item.title}/>
                </div>
    
                <ul className='listProductRecomment'>
                  <li className='listProductRecomment_Item'><Link className="Link" to="/search?q=dell">Dell</Link></li>
                  <li className='listProductRecomment_Item'><Link className="Link" to="/search?q=thinkpad">ThinkPad</Link></li>
                  <li className='listProductRecomment_Item'><Link className="Link" to="/search?q=hp">HP</Link></li>
                  <li className='listProductRecomment_Item'><Link className="Link" to="/search?q=microsoft">Microsoft </Link></li>
                  <li className='listProductRecomment_Item'><Link className="Link" to="/search?q=macbook">Apple</Link></li>
                 
                </ul>
              </div>)
                break;
              case 'KHO PHẦN MỀM':
                return (<div className='productMain' onClick={()=>showLineTitile(item.title)} key={index}>
                <div  className={titleShowLine==='KHO PHẦN MỀM'?'productMain-product productMainShowLine':'productMain-product'}>
    
                    <ItemHeader to={item.to} link="" icon={faScrewdriverWrench}
                    title={item.title}/>
                </div>
    
               
              </div>)
                break;
              case 'TRA CỨU BẢO HÀNH':
                return (<div className='productMain' onClick={()=>showLineTitile(item.title)} key={index}>
                <div  className={titleShowLine==='TRA CỨU BẢO HÀNH'?'productMain-product productMainShowLine':'productMain-product'}>
    
                    <ItemHeader to={item.to} link="" icon={faNewspaper}
                    title={item.title}/>
                </div>
    
               
              </div>)
                break;
              case 'TIN TỨC':
                return (<div className='productMain' onClick={()=>showLineTitile(item.title)} key={index}>
                <div  className={titleShowLine==='TIN TỨC'?'productMain-product productMainShowLine':'productMain-product'}>
    
                    <ItemHeader to={item.to} link="" icon={faFileLines}
                    title={item.title}/>
                </div>
    
               
              </div>)
                break;
              case 'PHỤ KIỆN':
                return (<div className='productMain' onClick={()=>showLineTitile(item.title)} key={index}>
                <div  className={titleShowLine==='PHỤ KIỆN'?'productMain-product productMainShowLine':'productMain-product'}>
    
                    <ItemHeader to={item.to} link="" icon={faHeadphonesSimple}
                    title={item.title}/>
                </div>
    
               
              </div>)
                break;
              case 'LIÊN HỆ':
                return (<div className='productMain' onClick={()=>showLineTitile(item.title)} key={index}>
                <div  className={titleShowLine==='LIÊN HỆ'?'productMain-product productMainShowLine':'productMain-product'}>
    
                    <ItemHeader to={item.to} link="" icon={faPhoneVolume}
                    title={item.title}/>
                </div>
    
               
              </div>)
                break;
            
              default:
                break;
            }
          })}
          
        </div>
      </div >
      <div className='headerMainMobile'>
        <div className='headerLogoMobile'>
          <img onClick={handleRedirectHome} className="header-logoMobile" src={image} />
        </div>
       

      </div>
      <div className="header-searchMobile">
        <input
          className="search_inputMobile"
          value={searchInput}
          onChange={handleOnChangeInput}
          placeholder="Tìm kiếm sản phẩm tại đây"
          onKeyPress={enterPressed.bind(this)}

        />
        <button className="search-buttonMobile" onClick={handleOnClickSearchBtn}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-iconMobile" />

        </button>
      </div>
    </div>
  );
}


export default Header;
