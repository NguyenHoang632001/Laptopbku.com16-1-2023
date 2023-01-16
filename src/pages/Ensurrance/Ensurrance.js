import _ from "lodash";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchDataFinished, fetchDataStart } from "redux/actions";
import { getInforCustomByToken } from "services/EnsurranceService";
import './Ensurrance.scss'

function Ensurrance() {
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [result, setResult] = useState({});
    const [isShowResult, setIsShowResult] = useState(false);
    const handleOnClickCheckBtn = async (token) => {
        if (token) {
            dispatch(fetchDataStart());
            let res = await getInforCustomByToken(token);
            if (res && res.errCode === 0) {

                setResult(res.data);
                setToken('');
                setIsShowResult(true);
            }
            dispatch(fetchDataFinished());
        }
    }
    const handleOnChangeInput = (e) => {
        setToken(e.target.value)
    }
    const enterPressed = (event) => {
        var code = event.keyCode || event.which;
        if (code === 13) {
            // handleOnClickSearchBtn();
            handleOnClickCheckBtn(token);

        }
    }
    return (
        <div className="containerEnsurranceMain">
            <div className="container_ensurrance">


                <h2 className="title_ensurrance"><span className="title_ensurranceItem">KIỂM TRA BẢO HÀNH SẢN PHẨM</span></h2>
                <div className="wrap_ensurrance">


                    <div className="container_ensurrance">
                        <div className="search_ensurrance">
                            <input value={token} onChange={e => handleOnChangeInput(e)} className="input_ensurrance" placeholder="Nhập Serial tại đây" onKeyPress={enterPressed.bind(this)} />
                            <button onClick={() => handleOnClickCheckBtn(token)} className="btn_ensurrance">Kiểm tra</button>
                        </div>
                    </div>
                    {/* <div className="backgroundMrimary"></div> */}
                </div>
                {
                    isShowResult &&
                    <div className="checkEnsurrance">
                        {
                            !_.isEmpty(result) ?
                                <div className="result_ensurrance">
                                    <ul className="result_ensurrance-list">
                                        <li className="result_ensurrance-item"><b className="inforcustomer">Tên khách hàng:</b> {result.name}</li>
                                        <li className="result_ensurrance-item"><b className="inforcustomer">Địa chỉ email:</b> {result.email}</li>
                                        <li className="result_ensurrance-item"><b className="inforcustomer">Số điện thoại :</b> {result.phoneNumber}</li>
                                        <li className="result_ensurrance-item"><b className="inforcustomer">Ngày mua:</b> {result.purchaseDate}</li>
                                        <li className="result_ensurrance-item"><b className="inforcustomer">Thời hạn bảo hành:</b> {result.warrantyPeriod}</li>
                                        <li className="result_ensurrance-item"><b className="inforcustomer">Ngày hết hạn:</b> {result.expiredTime}</li>
                                        <li className="result_ensurrance-item"><b className="inforcustomer"className="inforcustomer">Sản phẩm đã mua:</b> {result.purchasedProduct}</li>

                                    </ul>
                                </div> :
                                <div className="result_ensurrance">
                                    <h3>Mã không tồn tại</h3>
                                </div>
                        }
                    </div>
                }
            </div>
        </div>
    );
}

export default Ensurrance;