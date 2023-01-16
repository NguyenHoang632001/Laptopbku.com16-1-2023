import { Link } from 'react-router-dom';
import './Contact.scss'
function Contact() {
    return (<div className=' containerContact'>
        <h4 className='titleContact'>VỀ CHÚNG TÔI</h4>
        <p>Laptop BKU là đơn vị chuyên cung cấp các sản phẩm được xách tay trực tiếp từ Mỹ về. Tất cả các sản phẩm tại cửa hàng chúng tôi đều được đội ngũ nhân viên kiểm tra bằng các phần mềm chuyên dụng, trải nghiệm thực tế trước khi tới tay quý khách hàng. Cùng với chế độ bảo hành và hậu mãi nhanh gọn, chúng tôi sẽ trở thành một trong những nơi xứng đáng với niềm tin của quý khách hàng dành cho mình. Trên tinh thần làm cho khách hàng luôn luôn hài lòng nhất về chúng tôi, Laptop BKU ngày một hoàn thiện và trở thành một nơi để quý khách hàng có thể tin tưởng lựa chọn. </p>
        <h3 className='titleContact'>HƯỚNG DẪN MUA HÀNG</h3>
        <h4 className='titleContact titleContactModifier'>CÁCH 1: MUA HÀNG TRỰC TIẾP </h4>
        <p>-Khách hàng có thể tới trực tiếp tới các chi nhánh của chúng tôi để trải nghiệm, lựa chọn và được nhân viên chúng tôi tư vấn để chọn được sản phẩm tốt nhất.</p>
        <p>-Chúng tôi có đội ngũ nhân viên giao hàng tận nơi trong phạm vi Thành phố Hồ Chí Minh nếu khách hàng không có thời gian ghé cửa hàng.</p>
        <h4 className='titleContact titleContactModifier'>CÁCH  2: MUA HÀNG ONLINE HOẶC Ở XA  </h4>
        <p>-Với mong muốn đưa sản phẩm của chúng tôi đến mọi miền tổ quốc, chúng tôi sẵn sàng cung cấp dịch vụ ship COD (nhận hàng kiểm tra đúng như mô tả mới thanh toán tiền cho shipper) hàng thông qua các đơn vị vận chuyển hàng uy tín như GHTK, Viettel Post, Nhất Tín Logitics, J&T, GHN, Bưu điện…. </p>
        <p>+Khách hàng lên trực tiếp trang web, Fan page hoặc gọi trực tiếp vào Hotline: 0339.094.095 (Mr Nam) để được tư vấn, lựa chọn sản phẩm thích hợp cần mua</p>
        <p>+Khách hàng vui lòng chuyển khoản đặt cọc 10% giá trị sản phẩm, chúng tôi sẽ đóng gói hàng cẩn thận gửi tới quý khách từ 1 tới 3 ngày tùy khoảng cách địa lý. Khách hàng nhận hàng, kiểm tra hàng mới tiến hành thanh toán nốt số tiền còn lại cho đơn vị giao hàng</p>
        <p>+Trong trường hợp quý khách hàng kiểm tra hàng nhưng không thích sản phẩm, sản phẩm bị lỗi, rơi vỡ do trường hợp khách quan, chung tôi sẽ chịu hoàn toàn chi phí phát sinh để nhận máy về và đổi máy khác cho quý khách hàng.</p>
        <p>-Nhằm tránh để kẻ xấu trục lợi, LAPTOP BKU chúng tôi chỉ nhận thanh toán qua các tài khoản ngân hàng sau</p>
        <p>Số tài khoản: 0339 094 095 – Ngân hàng MB Bank (Ngân hàng Quân đội) – Chủ tài khoản: Nguyễn Hoài Nam</p>
        <p>Số tài khoản OCB: 0003100015445004 – Ngân hàng OCB (Ngân hàng Phương Đông) – Chủ tài khoản: Nguyễn Hoài Nam</p>
        <h4 className='titleContact titleContactModifier'>CÁCH 3: MUA TRẢ GÓP </h4>
        <p>Hiện tại chúng tôi chấp nhận trả góp thông qua thẻ tín dụng với tất cả các ngân hàng. Nếu khách hàng chọn mua bằng hình thức trả góp chúng tôi chỉ hỗ trợ bằng cách tới trực tiếp cửa hàng, không hỗ trợ online. </p>
        <h4 className='titleContact'>CHÍNH SÁCH BẢO HÀNH</h4>
        <p>Tất cả sản phẩm của LAPTOP BKU bán ra đều được đổi trả trong vòng 7 ngày với bất kì một lí do nào, hoàn toàn không mất chi phí</p>
        <p>Có các gói bảo hành cho quý khách hàng có thể linh hoạt lựa chọn: 3 tháng – 6 tháng – 12 tháng</p>
        <p>Những trường hợp bảo hành nhanh chóng sẽ được đội ngũ nhân viên của chúng tôi xử lí ngay trong ngày để quý khách hàng có máy để sử dụng, những trường hợp không bảo hành xong trong ngày, chúng tôi sẽ cung cấp cho quý khách hàng 1 laptop khác để sử dụng trong thời gian bảo hành nhằm tránh ảnh hưởng tới công việc của quý khách hàng.</p>
        <p>Các sản phầm mới sẽ được chúng tôi bảo hành theo chính sách và thời gian của hãng.</p>
        <h4 className='titleContact'>ĐIỀU KIỆN BẢO HÀNH</h4>
        <p>Chúng tôi chỉ bảo hành khi các sản phẩm còn tem bảo hành, còn thời gian bảo hành của cửa hàng.</p>
        <p>Sản phẩm còn nguyên trạng ban đâu, không bảo hành các trường hợp cháy nổ, rơi vỡ, vào nước, … Các trường hợp lỗi do người dùng, chúng tôi sẽ từ chối bảo hành.</p>

        <p>Màn hình được áp dụng bảo hành trong trường hợp có 5 điểm chết trở lên.</p>

        <p>Quý khách có thể kiểm tra sản phẩm bảo hành của mình <Link to='/ensurrance'>tại đây</Link></p>


    </div>);
}

export default Contact;