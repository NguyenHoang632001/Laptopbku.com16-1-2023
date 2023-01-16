import { useEffect, useState } from 'react';
import './ManagerEnsurrance.scss';
import Pagination from '@atlaskit/pagination';
import { deleteEnsurranceService, getAllEnsurranceService } from 'services/EnsurranceService';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataFinished, fetchDataStart } from 'redux/actions';

function ManagerEnsurrance() {
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [allEnsurrance, setAllEnsurrance] = useState([]);
    const dispatch = useDispatch();
    const getAllEnsurrance = async (page, size) => {
        dispatch(fetchDataStart());
        const res = await getAllEnsurranceService(page, size);

        if (res && res.errCode === 0) {
            setAllEnsurrance(res.data.rows);
            setTotalPages(Math.ceil(res.data.count / size));
        }
        dispatch(fetchDataFinished());
    }
    useEffect(() => {
        getAllEnsurrance(currentPage, 10);
        window.scrollTo({top: 0});
    }, [currentPage])

    // useEffect(() => {
    //     getAllPost(currentPage, 12)
    // }, [currentPage]);
    const createPageArr = (pages) => {
        let pageArr = [];
        for (let i = 1; i <= pages; i++) {
            pageArr.push(i);
        }
        return pageArr;
    }
    const accessToken = useSelector(state => state.user.accessToken);
    const handleDeletePost = async (id) => {
        dispatch(fetchDataStart());
        const res = await deleteEnsurranceService(accessToken, id);
        if (res && res.errCode === 0) {
            // getConfigByProductId(id);
            getAllEnsurrance(currentPage, 10);

        }

        dispatch(fetchDataFinished());

    }
    return (<div className="containerManagerEnsurrance">
        {/* <Link to="/system/update-ensurrance" className=''><button>Tạo</button></Link> */}
        <Link className="link-create" to={"/system/update-ensurrance"}> <button className="create" >Tạo</button></Link>
        <table>
            <thead>
                {/* <tr>
                    <th className='title'>TIÊU ĐỀ</th>
                    <th className='action'>THAO TÁC</th>
                </tr> */}
            </thead>

            <tbody>
                {
                    allEnsurrance.map(item => {
                        return (
                            <tr key={item.id}>
                            
                                <td className='title_postMain'>Người Mua : {item.name}</td>
                                <td className='title_postMain'>Địa chỉ Email : {item.email}</td>
                                <td className='title_postMain'>Số điện thoại : {item.phoneNumber}</td>
                                <td className='title_postMain'>Sản phẩm đã mua : {item.purchasedProduct}</td>
                                <td className='title_postMain'>Ngày Mua : {item.purchaseDate}</td>
                                <td className='title_postMain'>Mã máy : {item.token}</td>
                                <td className='container_tools'>

                                    <button className="del" onClick={() => handleDeletePost(item.id)}>Xoá</button>
                                </td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>
        <div className='Pagination_direction'>

            <Pagination
                pages={[...createPageArr(totalPages)]}
                max={totalPages >= 10 ? 8 : totalPages}
                value={currentPage}
                onChange={(e, page) => setCurrentPage(page)}
                style={{ fontSize: '16px' }}
            />
        </div>
    </div>);
}

export default ManagerEnsurrance;