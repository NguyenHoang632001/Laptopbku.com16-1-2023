import MainNewsPost from "components/Post/MainNewsPost";
import PrimaryNewsPost from "components/Post/PrimaryNewsPost";
import ItemRestNews from "components/Post/ItemRestNews";
import { useEffect, useState } from "react";
import { getPostService } from "services/PostService";
import './News.scss'
import { useDispatch } from "react-redux";
import { fetchDataFinished, fetchDataStart } from "redux/actions";
import Pagination from '@atlaskit/pagination';

function News() {
    const [newsList, setNewsList] = useState([]);
    const dispatch = useDispatch();
    const [count,setCount]=useState(0);
    const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
    const newsListPost = async () => {
        dispatch(fetchDataStart());
        let pageSize = 10;
        let res = await getPostService(1, 16, 'PT');
        if (res && res.errCode === 0) {

            setNewsList(res.data.rows);
            setTotalPages(Math.ceil(res.data.count / pageSize));
            setCount(res.data.count);

        }
        dispatch(fetchDataFinished());
        console.log("res",res)
    }

    useEffect(() => {
        newsListPost();


    }, [])
    const createPageArr = (pages) => {
        let pageArr = [];
        for (let i = 1; i <= pages; i++) {
          pageArr.push(i);
        }
        return pageArr;
      }
    // const firstNewsPost = newsList.length >= 1 ? newsList.slice(0, 1) : [];
    const restNews = newsList.slice(0, newsList.length);
   


    return (
        <div className="containerNewsMain">
            <div className="container_News">

                <div className="banner_News">
                    <div className="main_News">
                        <MainNewsPost />

                    </div>
                    <div className="primary_News">
                        <PrimaryNewsPost />
                    </div>
                </div>


                <div className="ListNews">

                    {
                        restNews.map((item) => {
                         
                            return (
                                <ItemRestNews
                                    key={item.id}
                                    id={item.id}

                                    image={item.image}
                                    title={item.title}

                                    shortdes={item.shortdes}
                                />

                            )
                        })
                    }
                </div>

            </div>
{count>0&& <div> <div className="showPage">
             
             <span>Trang {currentPage}/{totalPages}</span>
     </div>
     <div className="buttonChangePage">

   <Pagination
     pages={[...createPageArr(totalPages)]}
     max={totalPages >= 10 ? 8 : totalPages}
     value={currentPage}
     onChange={(e, page) => setCurrentPage(page)}
     style={{ fontSize: '16px' }}
   />
 </div></div>}
           
        </div>
    )
}

export default News;