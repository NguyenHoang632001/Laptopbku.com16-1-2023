import { useEffect, useState } from 'react';

import { getHomeProduct } from 'services/ProductService';
import CardItem from 'components/CardItem';
import Banner from './Banner';

import './Home.scss';
import Advertisement from './Advertisement';
import _ from 'lodash';
import { Link } from 'react-router-dom'
import HotDeal from 'pages/HotDeal/HotDeal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import advice from './advice.png'
import micro from './micro.jpg'
import hoang from './hoang.jpg'
import toi from './toi.jpg'
import duy from './duy.jpg'
import truong from './truong.jpg'
import thu from './thu.jpg'
import manh from './manh.jpg'
import nhu from './nhu.jpg'
import linh from './linh.jpg'
import {
  faFacebook,
  faFacebookMessenger,
  faInstagram

} from '@fortawesome/free-brands-svg-icons';
import img1 from './img1.png'

function Home() {

  // function formatCash(str) {
  //   return str.split('').reverse().reduce((prev, next, index) => {
  //     return ((index % 3) ? next : (next + ',')) + prev
  //   })
  // }

  return (



    <div className='container_Home'>
      <Advertisement />
      {/* <div className="listProductHome"> */}
      <h2 className='suggestions'>Một số gợi ý dưới đây có thể giúp bạn tìm sản phẩm nhanh hơn...</h2>
      <div className="home_title">
        <ul className='listTitle'>
          <li className='itemTitle'><Link to='/search?q=dell'><img src="https://muamaytinhcu.info/wp-content/uploads/2020/04/may-tinh-dell-2020-bao-hanh-tai-nha-FDdPrE.jpg" alt="" className='itemImage' /></Link></li>
          <li className='itemTitle'><Link to='/search?q=thinkpad'><img src="data:image/png;base64,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" alt="" className='itemImage' /></Link></li>
          <li className='itemTitle itemTitleHp'><Link to='/search?q=hp'><img src={advice} alt="" className='itemImage' /></Link></li>
          <li className='itemTitle'><Link to='/search?q=lenovo'><img src="data:image/png;base64,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" alt="" className='itemImage' /></Link></li>

          <li className='itemTitle itemTilePrimary'><Link to='/search?q=microsoft'><img src={micro} alt="" className='itemImage itemImagePrimary' /></Link></li>
          <li className='itemTitle'><Link to='/search?q=macbook'><img src="https://cdn.mos.cms.futurecdn.net/FA67cmKcZCKHcVy8CDRuuY.jpg" alt="" className='itemImage' /></Link></li>
          <li className='itemTitle'><Link to='/search?q=asus'><img src="https://inkythuatso.com/uploads/thumbnails/800/2021/11/logo-asus-inkythuatso-2-01-26-09-21-11.jpg" alt="" className='itemImage' /></Link></li>

        </ul>
      </div>
      <h2 className='title-product-main'>DANH MỤC SẢN PHẨM</h2>

      <div className="products">
        <HotDeal />
        <Banner
          initState='DELL'
          title='LAPTOP DELL'
          brand={[{ title: 'Dell Latitude', value: 'dell latitude' },
          { title: 'Dell Precision', value: 'dell precision' }, { title: 'Dell XPS', value: 'dell xps' }, { title: 'Dell Inspiron', value: 'dell inspiron t' }]}
        />

        <Banner
          initState='THINKPAD'
          title='LAPTOP THINKPAD'
          brand={[{ title: 'Thinkpad T Series', value: 'thinkpad t' },
          { title: 'Thinkpad X Series', value: 'thinkpad x' }, { title: 'Thinkpad P Series', value: 'thinkpad p' }]}
        />
        <Banner
          initState='HP'
          title='LAPTOP HP'
          brand={[{ title: 'HP Spectre', value: 'HP Spectre' },
          { title: 'HP Elitebook', value: 'HP Elitebook' }, { title: 'HP Probook', value: 'HP Probook' }]}

        />
        <Banner
          initState='Surface'
          title='MICROSOFT'
          brand={[{ title: 'Surface Pro', value: 'Surface Pro' },
          { title: 'Surface Laptop', value: 'Surface Laptop' }, { title: 'Surface Book', value: 'Surface Book' }]}

        />
        <Banner
          initState='MACBOOK'
          title='APPLE'
          brand={[{ title: 'Macbook Pro', value: 'Macbook Pro' },
          { title: 'Macbook Air', value: 'Macbook Air' }, { title: 'iMac', value: 'iMac' }]}

        />



      </div>

      <h2 className='experienceTitle'>TRẢI NGHIỆM CỦA KHÁCH HÀNG</h2>
      <div className='experienceContainer'>
        <div className='experienceContainerList'>


          <div className='experienceItem'>
            <img src={hoang} className='experienceImg'></img>
            <h4 className='experienceName'>Nguyễn Đức Hoàng</h4>
            <span className='experienceWork'>Kĩ sư thiết kế website</span>
            <p className='experienceComment'>“Đã từng mua ở đây máy T480s I7, lúc chuẩn bị mua thì hết hàng nên phải đợi shop ship từ Mỹ về hơi lâu, khoảng hơn 3 tuần, nhưng đổi lại máy về khá đẹp, mình sài được hơn 6 tháng thì thấy khá hài lòng với số tiền mình tiết kiệm để mua. Thank shop !!”</p>
          </div>
          <div className='experienceItem'>
            <img src={toi} className='experienceImg'></img>
            <h4 className='experienceName'>Phạm Tới</h4>
            <span className='experienceWork'>Kĩ sư thiết kế website</span>
            <p className='experienceComment'>“Vì cần máy nhỏ gọn để di chuyển nên mình nhắm tới Thinkpad x280, nhưng không đủ tài chính nên shop tư vấn qua 7280 cũng nhỏ tương tự, mình sài cảm thấy khá hài long, bạn tư vấn thì khá là oke vì tư vấn đúng mục đích và tài chính, cho shop 4,5*”</p>
          </div>
          <div className='experienceItem'>
            <img src={duy} className='experienceImg'></img>
            <h4 className='experienceName'>Nguyễn Thanh Duy</h4>
            <span className='experienceWork'>Sinh viên Đại học Bách Khoa TpHCM</span>
            <p className='experienceComment'>“Do nhu cầu học xây dựng nên cần máy trạm khỏe để cày tiền xuyên màn đêm ^.^, thấy anh chủ cũng học Bách Khoa nên mình cũng khá yên tâm, từ lúc mua tới giờ gần 2 năm thì thấy con trạm sắt của mình vẫn hoạt động tốt =)) Sẽ recommend các em sinh viên khóa sau ủng hộ shop”</p>
          </div>
          <div className='experienceItem'>
            <img src={linh} className='experienceImg'></img>
            <h4 className='experienceName'>Nguyễn Thị Linh </h4>
            <span className='experienceWork'>Nhân viên văn phòng</span>
            <p className='experienceComment'>“Là nữ nên mình khá là kén chọn trong việc mua laptop, một phần là vì không rành công nghệ, nhưng được người quen giới thiệu cho chỗ này nên cũng yên tâm mua, lúc mình mua thì shop còn duy nhất 1 máy Mac nên mình chọn luôn. Ban đầu thì khá khó sài do mình chưa sài Mac nhưng sau quen thì thấy sài cũng khá ổn”</p>
          </div>
          <div className='experienceItem'>
            <img src={thu} className='experienceImg'></img>
            <h4 className='experienceName'>Cô Hoài Thư</h4>
            <span className='experienceWork'>Giáo viên Trường THPT Nguyễn Khuyến </span>
            <p className='experienceComment'>“Máy sài tạm ổn do cá nhân mình chỉ dung giảng dạy bình thường, sẽ giới thiệu cho mọi người nếu ai có nhu cầu”</p>
          </div>
          <div className='experienceItem'>
            <img src={truong} className='experienceImg'></img>
            <h4 className='experienceName'>Hoàng Trường</h4>
            <span className='experienceWork'>Kĩ sư xây dựng</span>
            <p className='experienceComment'>“Bị dụ dỗ nên tài chính từ 10 triệu sau khi được bạn chủ tư vấn thì mua hẳn máy hơn 2 chục xíu thôi :)) Hi vọng mọi người đừng bị bạn chủ tư vấn chứ sau khi nghe bạn đó tư vấn thì mình thấy máy nào cũng sang sịn mịn, cũng đều muốn mua hết hihi. Mình chỉ trải nghiệm dòng Precision 7530 nên ai có nhu cầu mua Precision thì ghé shop chất lượng khá tốt đó ạ, các dòng khác thì mình không biết”</p>
          </div>
          <div className='experienceItem'>
            <img src={manh} className='experienceImg'></img>
            <h4 className='experienceName'>Vũ Duy Mạnh</h4>
            <span className='experienceWork'>Sinh viên đại học Kinh Tế - Luật TpHCM </span>
            <p className='experienceComment'>“Sau khi tham khảo nhiều nơi thì mình quyết định chọn mua Dell Latitude 7480, lí do vì bạn chủ là bạn của mình, máy sài khá tốt cho tới bây giờ, nếu sau máy hư thì sẽ phốt công tâm ạ :))”</p>
          </div>
          <div className='experienceItem'>
            <img src={nhu} className='experienceImg'></img>
            <h4 className='experienceName'>Nguyễn Đình Như </h4>
            <span className='experienceWork'>Creater and Designer </span>
            <p className='experienceComment'>“Do tính chất công việc liên quan tới độ phân giải màn hình cao nên việc chọn laptop là khá khó khăn cho mình. Sau khi xem 7749 clip Review thì tới bây giờ mình vẫn không hối hận khi chọn Dell XPS 9300. Màn hình chuẩn đẹp hơn Ngọc Trinh =))”</p>
          </div>

          <div className='experienceItem'>
            <img src={hoang} className='experienceImg'></img>
            <h4 className='experienceName'>Nguyễn Đức Hoàng</h4>
            <span className='experienceWork'>Kĩ sư thiết kế website</span>
            <p className='experienceComment'>“Đã từng mua ở đây máy T480s I7, lúc chuẩn bị mua thì hết hàng nên phải đợi shop ship từ Mỹ về hơi lâu, khoảng hơn 3 tuần, nhưng đổi lại máy về khá đẹp, mình sài được hơn 6 tháng thì thấy khá hài lòng với số tiền mình tiết kiệm để mua. Thank shop !!”</p>
          </div>
          <div className='experienceItem'>
            <img src={toi} className='experienceImg'></img>
            <h4 className='experienceName'>Phạm Tới</h4>
            <span className='experienceWork'>Kĩ sư thiết kế website</span>
            <p className='experienceComment'>“Vì cần máy nhỏ gọn để di chuyển nên mình nhắm tới Thinkpad x280, nhưng không đủ tài chính nên shop tư vấn qua 7280 cũng nhỏ tương tự, mình sài cảm thấy khá hài long, bạn tư vấn thì khá là oke vì tư vấn đúng mục đích và tài chính, cho shop 4,5*”</p>
          </div>
          <div className='experienceItem'>
            <img src={duy} className='experienceImg'></img>
            <h4 className='experienceName'>Nguyễn Thanh Duy</h4>
            <span className='experienceWork'>Sinh viên Đại học Bách Khoa TpHCM</span>
            <p className='experienceComment'>“Do nhu cầu học xây dựng nên cần máy trạm khỏe để cày tiền xuyên màn đêm ^.^, thấy anh chủ cũng học Bách Khoa nên mình cũng khá yên tâm, từ lúc mua tới giờ gần 2 năm thì thấy con trạm sắt của mình vẫn hoạt động tốt =)) Sẽ recommend các em sinh viên khóa sau ủng hộ shop”</p>
          </div>
          <div className='experienceItem'>
            <img src={linh} className='experienceImg'></img>
            <h4 className='experienceName'>Nguyễn Thị Linh </h4>
            <span className='experienceWork'>Nhân viên văn phòng</span>
            <p className='experienceComment'>“Là nữ nên mình khá là kén chọn trong việc mua laptop, một phần là vì không rành công nghệ, nhưng được người quen giới thiệu cho chỗ này nên cũng yên tâm mua, lúc mình mua thì shop còn duy nhất 1 máy Mac nên mình chọn luôn. Ban đầu thì khá khó sài do mình chưa sài Mac nhưng sau quen thì thấy sài cũng khá ổn”</p>
          </div>
          <div className='experienceItem'>
            <img src={thu} className='experienceImg'></img>
            <h4 className='experienceName'>Cô Hoài Thư</h4>
            <span className='experienceWork'>Giáo viên Trường THPT Nguyễn Khuyến </span>
            <p className='experienceComment'>“Máy sài tạm ổn do cá nhân mình chỉ dung giảng dạy bình thường, sẽ giới thiệu cho mọi người nếu ai có nhu cầu”</p>
          </div>
          <div className='experienceItem'>
            <img src={truong} className='experienceImg'></img>
            <h4 className='experienceName'>Hoàng Trường</h4>
            <span className='experienceWork'>Kĩ sư xây dựng</span>
            <p className='experienceComment'>“Bị dụ dỗ nên tài chính từ 10 triệu sau khi được bạn chủ tư vấn thì mua hẳn máy hơn 2 chục xíu thôi :)) Hi vọng mọi người đừng bị bạn chủ tư vấn chứ sau khi nghe bạn đó tư vấn thì mình thấy máy nào cũng sang sịn mịn, cũng đều muốn mua hết hihi. Mình chỉ trải nghiệm dòng Precision 7530 nên ai có nhu cầu mua Precision thì ghé shop chất lượng khá tốt đó ạ, các dòng khác thì mình không biết”</p>
          </div>
          <div className='experienceItem'>
            <img src={manh} className='experienceImg'></img>
            <h4 className='experienceName'>Vũ Duy Mạnh</h4>
            <span className='experienceWork'>Sinh viên đại học Kinh Tế - Luật TpHCM </span>
            <p className='experienceComment'>“Sau khi tham khảo nhiều nơi thì mình quyết định chọn mua Dell Latitude 7480, lí do vì bạn chủ là bạn của mình, máy sài khá tốt cho tới bây giờ, nếu sau máy hư thì sẽ phốt công tâm ạ :))”</p>
          </div>
          <div className='experienceItem'>
            <img src={nhu} className='experienceImg'></img>
            <h4 className='experienceName'>Nguyễn Đình Như </h4>
            <span className='experienceWork'>Creater and Designer </span>
            <p className='experienceComment'>“Do tính chất công việc liên quan tới độ phân giải màn hình cao nên việc chọn laptop là khá khó khăn cho mình. Sau khi xem 7749 clip Review thì tới bây giờ mình vẫn không hối hận khi chọn Dell XPS 9300. Màn hình chuẩn đẹp hơn Ngọc Trinh =))”</p>
          </div>

        </div>
      </div>
    </div>

  );

}


export default Home;
