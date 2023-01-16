import { useEffect, useState } from "react";
import { getConfigByProductIdService } from "services/ProductService";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import './ConfigProduct.scss'
import { useDispatch, useSelector } from "react-redux";
import { deleteConfigService } from "services/ProductService";
import { fetchDataFinished, fetchDataStart } from "redux/actions";

// 
function ConfigProduct() {
    const [configProduct, setConfigProduct] = useState([])
    const dispatch = useDispatch();
    const getConfigByProductId = async (id) => {
        dispatch(fetchDataStart());
        const res = await getConfigByProductIdService(id);

        if (res.errCode == 0) {
            setConfigProduct(res.data)
        }
        dispatch(fetchDataFinished());


    }
    const search = useLocation().search;

    const id = new URLSearchParams(search).get('id');
    // const type = new URLSearchParams(search).get('type')
    useEffect(() => {
        getConfigByProductId(id);
    }, [id])
   
    const accessToken = useSelector(state => state.user.accessToken);
    const handleDeleteConfig = async (configId) => {
        const res = await deleteConfigService(accessToken, configId);
        if (res && res.errCode === 0) {
            getConfigByProductId(id);
        }



    }
    return (<div className="containerConfigProduct">
        <Link to={`/system/update-config?productId=${id}&type=create`} className="creatConfig">Tạo</Link>
        {configProduct.map((item, index) => {
            return (<div className="containerConfig">

                <ul key={item.id} className="listConfig">
                    <li className="itemConfig">Cấu hình {index}</li>
                    <li className="itemConfig">CPU: {item.CPUType} {item.CPUSpead} Upto {item.turboMaxSpeed}</li>
                    <li className="itemConfig">Bộ nhớ Ram: {item.ramMemory} {item.busRam}</li>
                    <li className="itemConfig">Bộ nhớ ổ cứng: {item.memory}</li>
                    <li className="itemConfig">Màn hình: {item.sizeScreen} {item.screenTechnology}</li>
                    {/* <li className="itemConfig">Màn hình cảm ứng: {item.touchScreen}</li> */}
                    <li className="itemConfig">Giảm giá: {item.discount}%</li>
                </ul>
                <div className="toolsConfig">
                    <button onClick={() => handleDeleteConfig(item.id)} className="deleConfig">Xóa</button>
                    <button className="UpdateConfigBtn"> <Link to={`/system/update-config?productId=${id}&type=update&id=${item.id}`} className="UpdateLinkConfig">Sửa</Link></button>

                </div>

            </div>)
        })}
    </div>);
}

export default ConfigProduct;