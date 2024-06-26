import wishStore from "../../store/WishStore.js";
import NoProduct from "../../assets/images/no-results.png"
import ProductSkeleton from "../../skeleton/ProductSkeleton.jsx";
import StarRatings from "react-star-ratings/build/star-ratings.js";
import {Link} from "react-router-dom";

const Wishes = () => {
    const {WishList,WishCount}=wishStore()
    console.log(WishList)
    if(WishList===null){
        return (
            <div>
                <ProductSkeleton/>
            </div>
        );
    }
    else {
        return (
            <div>
                {
                   WishCount===0?(<div className='container'>
                            <div className="row">
                                 <div className='col-md-12 d-flex justify-content-center'>
                                    <img alt="image" className="product-img-md" src={NoProduct}/>
                                 </div>
                             </div>
                            </div>):(<div className="container mt-5">
                       <div className="row">
                           {
                               WishList.map((item,i)=> {
                                   return (
                                       <div key={i}
                                            className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                                           <Link to={`/ByKeyword/${item['WishProduct']['remark']}`}
                                                 className="card shadow-sm h-100 rounded-3 bg-white">
                                               <img alt='img' className="w-100 rounded-top-2"
                                                    src={item['WishProduct']['image']}/>
                                               <div className="card-body">
                                                   <p className="bodySmal text-secondary my-1">{item['WishProduct']['title']}</p>
                                                   <p className="bodyMedium text-dark my-1">{item['WishProduct']['price']} </p>
                                                   <StarRatings
                                                       rating={parseFloat(item['WishProduct']['star'])}
                                                       starRatedColor="red"
                                                       starDimension="15px"
                                                       starSpacing="2px"/>
                                               </div>
                                           </Link>
                                       </div>)
                               })
                           }
                       </div>
                   </div>)
                }
            </div>
        );
    }

};

export default Wishes;


