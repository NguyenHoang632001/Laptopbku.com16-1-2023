import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import { getAllCode } from 'services/UserService';
import { useEffect, useState } from 'react';
import './ManagePost.scss'
import { useSelector } from 'react-redux';
import { createNewPost, deletePostService, getAllPostService, updatePost } from 'services/PostService';
import Pagination from '@atlaskit/pagination';
import { toast } from 'react-toastify';
import { convertBase64 } from 'utils/CommonUtil';
const ManagerPost = () => {
    const mdParser = new MarkdownIt(/* Markdown-it options */);
    const accessToken = useSelector(state => state.user.accessToken)
    const handleEditorChange = ({ html, text }) => {
        setDescriptionHTML(html);
        setDescriptionMarkdown(text);
    }
    const [typePostArr, setTypePostArr] = useState([]);
    const [id, setId] = useState('');
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [shortdes, setShortdes] = useState("");
    const [typeId, setTypeId] = useState('');
    const [descriptionHTML, setDescriptionHTML] = useState("");
    const [descriptionMarkdown, setDescriptionMarkdown] = useState("");
    const [currentRespone, setCurrentRespone] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [isUpdate, setIsUpdate] = useState(false);
    const [priViewImg, setpriViewImg] = useState('');
    const getTypePost = async () => {
        const res = await getAllCode('POST');
        if (res && res.errCode == 0) {
            setTypePostArr(res.data);
        }
        console.log(res);

    };
    const getAllPost = async (page, size) => {
        const res = await getAllPostService(page, size);
        console.log(res);
        if (res && res.errCode === 0) {
            setCurrentRespone([...res.data.rows]);
            setTotalPages(Math.ceil(res.data.count / size));
        }

    }

    useEffect(() => {
        getTypePost();
        window.scrollTo({top: 0});
    }, []);
    useEffect(() => {
        getAllPost(currentPage, 12)
        window.scrollTo({top: 0});
    }, [currentPage]);
    const handleOnChangInput = async (e, type) => {
        switch (type) {

            case "TITLE":
                {
                    setTitle(e.target.value);
                    break;
                }
            case "SHORTDES":
                {
                    setShortdes(e.target.value);

                    break;
                }
            case "IMAGE":
                {
                    const data = e.target.files;
                    const file = data[0];
                    if (file) {
                        let base64 = await convertBase64(file);
                        let objURL = URL.createObjectURL(file);
                        setImage(base64);
                        setpriViewImg(objURL)
                    }
                    break;
                }
            default:
                {
                    setTypeId(e.target.value);
                    break;
                }
        }
    }
    const handleCreatePost = async () => {
        let res = await createNewPost(accessToken, {
            title: title,
            shortdes: shortdes,
            descriptionHTML: descriptionHTML,
            descriptionMarkdown: descriptionMarkdown,
            typeId: typeId,
            image: image
        });
        if (res && res.errCode === 0) {
            getAllPost(currentPage, 12);
            setTitle('');
            setImage('');
            setShortdes('');
            setId('');
            setTypeId('');
            setDescriptionMarkdown('');
            setDescriptionHTML('');
            setIsUpdate(false);
        }
    }
    const handleUpdatePost = async () => {
        let res = await updatePost(accessToken, {
            title: title,
            shortdes: shortdes,
            descriptionHTML: descriptionHTML,
            descriptionMarkdown: descriptionMarkdown,
            typeId: typeId,
            image: image,
            id: id
        });

        if (res && res.errCode === 0) {
            setTitle('');
            setShortdes("");
            setImage('');
            setId('');
            setTypeId('');
            setDescriptionMarkdown('');
            setIsUpdate(false);
            getAllPost(currentPage, 12);
        }
    }
    const handleChangePostInfo = (item) => {
        setTitle(item.title);
        setShortdes(item.shortdes);
        setImage(item.image);
        setId(item.id);
        setTypeId(item.typeId);
        setpriViewImg(item.image);
        setDescriptionMarkdown(item.descriptionMarkdown);
        setDescriptionHTML(item.descriptionHTML);
        setIsUpdate(true)


    }
    const createPageArr = (pages) => {
        let pageArr = [];
        for (let i = 1; i <= pages; i++) {
            pageArr.push(i);
        }
        return pageArr;
    }
    const handleDeletePost = async (id) => {
        let res = await deletePostService(accessToken, id);
        if (res && res.errCode === 0) {
            getAllPost(currentPage, 12);
            toast.success('ban da xoa thanh cong');
        }
    };
    return (
        <div className='container-managerPost'>
            <h1 className='titleManager'>QU???N L?? B??I VI???T</h1>
            <div className='managerTitleAndButotn'>
                <div className='title-left'>

                    <div className='listTitlePost'>
                        <label className='titlePost'>
                            Nh???p Ti??u ????? B??i Vi???t
                        </label>
                        <textarea className='inputTitlePost' onChange={(e) => handleOnChangInput(e, "TITLE")} value={title}>
                        </textarea>


                    </div>
                    <div className='listTitlePost'>
                        <label className='titlePost'>
                            Nh???p Ph???n M?? T???
                        </label>
                        <textarea className='inputTitlePost' onChange={(e) => handleOnChangInput(e, "SHORTDES")} value={shortdes}>
                        </textarea>


                    </div>
                    <div className='listTitlePost'>
                        <label className='titlePost' >Nh???p Link ???nh B??i Vi???t</label>
                        <input type="file" className='inputTitlePost' onChange={(e) => handleOnChangInput(e, "IMAGE")} />
                        {priViewImg && <img className='priviewimg' src={priViewImg} />}
                    </div>
                </div>
                <div className='title-right'>
                 
                    <select value={typeId} onChange={(e) => handleOnChangInput(e)} className="container-select">
                        <option value='' defaultValue>Chon lo???i b??i vi???t</option>
                        {
                            
                            typePostArr.map((item) => {
                                return (

                                    <option value={item.keyMap} key={item.id}>{item.value}</option>

                                )

                            })
                        }

                    </select>
                </div>
            </div>

            <MdEditor className='mardoweditor' value={descriptionMarkdown} style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />
            <div className='creatPostItem'>{isUpdate ? <button className="saveChange" onClick={() => handleUpdatePost()}>L??u thay ?????i</button> : <button className="createPost" onClick={() => handleCreatePost()}><span>T???o</span></button>}</div>
            <div className='table_data'>
                <h3 className='title_table'>B???NG D??? LI???U</h3>
                <table>
                    <thead>
                        <tr>
                            <th className='title'>TI??U ?????</th>
                            <th className='action'>THAO T??C</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            currentRespone.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td className='title_postMain'>{item.title}</td>
                                        <td className='container_tools'>
                                            <button className="fix" onClick={() => handleChangePostInfo(item)}>S???a</button>
                                            <button className="del" onClick={() => handleDeletePost(item.id)}>Xo??</button>
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

            </div>
        </div>
    )
}
export default ManagerPost 