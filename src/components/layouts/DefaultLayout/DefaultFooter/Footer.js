import { Link } from 'react-router-dom';
import './Footer.scss';
import LOGO_RUN from './LOGO_RUN.png'
import LOGO_TEXT from './LOGO_TEXT.png'


function Footer() {
    return (
        <div className='containerFooterMain'>
            <div className='containerFooter'>
                <div className='footer-img'>
                    <img src={LOGO_TEXT} className="footer-imgItem"></img>
                    <h2 className='discriptionShop'>Chuyên hàng xách tay USA</h2>
                    <p className='place'>
                        Cơ sở 1: 68 đường số 6, Linh Trung, Thủ Đức, Tp Hồ Chí Minh<br></br>Cơ sở 2: TTTM Bù Nho, Phú Riềng,<br className='dow'></br> Bình Phước
                    </p>
                    <p className='adressShop'>Địa chỉ: 289 Đinh Bộ Lĩnh ,Phường 26, Quận Bình Thạnh, Thành Phố Hồ Chí Minh</p>
                    <div className='ContactToBuyProduct'>
                        <div className='support'>
                            <span className='titleContactToSp'>Gọi mua hàng: </span>
                            <span className='sdt'>0234324234</span>
                        </div>
                        <div className='support'>
                            <span className='titleContactToSp'>Gọi khiếu nại: </span>
                            <span className='sdt'>03434234234</span>
                        </div>
                        <div className='support'>
                            <span className='titleContactToSp'>Gọi bảo hành: </span>
                            <span className='sdt'> 01343434224</span>
                        </div>
                        <div className='support'>
                            <span className='titleContactToSp'>Hỗ trợ kĩ thuật: </span>
                            <span className='sdt'>043422434</span>
                        </div>
                    </div>
                </div>
                <div className='containerFooterList'>
                    <div className="footer-wrapper">
                        <div className="footer-column">
                            <h2 className="footer-title"> CHÍNH SÁCH CHUNG</h2>
                            <ul className="footer-list">
                                <Link to='/' className='link'><h2 className='InforFooter'>Chính sách bảo hành </h2></Link>
                                <Link to='/' className='link'><h2 className='InforFooter'>Chính sách đổi trả</h2></Link>
                                <Link to='/' className='link'><h2 className='InforFooter'>Chính sách giao hàng</h2></Link>

                            </ul>
                        </div>
                        <div className="footer-column">
                            <h2 className="footer-title">GIỚI THIỆU</h2>
                            <ul className="footer-list">
                                <Link to='/' className='link'><h2 className='InforFooter'>Về tôi</h2></Link>
                                <Link to='/' className='link'><h2 className='InforFooter'>Về chúng tôi</h2></Link>
                                <Link to='/' className='link'><h2 className='InforFooter'>Kiểm tra bảo hành</h2></Link>


                            </ul>
                        </div>
                        <div className="footer-column">
                            <h2 className="footer-title">LIÊN HỆ</h2>
                            <ul className="footer-list">
                                <Link to='/' className='link'><h2 className='InforFooter'>Hot line : </h2> <span className='phoneContact sdt'>0339 094 095</span></Link>
                                <Link to='/'  className='link'><h2 className='InforFooter'>Gọi mua hàng :  </h2> <span className='phoneContact sdt'>0339 094 095</span></Link>
                                <Link to='/'  className='link'><h2 className='InforFooter'>Gọi bảo hành :</h2> <span className='phoneContact sdt'>0339 094 095</span></Link>
                            </ul>
                        </div>
                        <p className='thanks'>Xin trân trọng cám ơn quý khách hàng ! </p>
                    </div>
                </div>



            </div >
        </div>



    )
}
export default Footer;