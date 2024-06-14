import ProductStore from "../../store/ProductStore.js";
import StarRatings from "react-star-ratings/build/star-ratings.js";


const ReviewList = () => {
    const {reviews}=ProductStore()
    console.log(reviews)
    return (
        <div>
            <ul className="list-group list-group-flush mt-2">
                {
                    reviews!==null && reviews.map((item,i)=> {
                        return (<div>

                            <li key={i} className="list-group-item bg-transparent border-0 my-2"><i class="bi bi-people-fill me-2"></i>{item['profile']['cus_name']}<br/>
                                <StarRatings rating={parseFloat(item['rating'])} starRatedColor="red" starDimension="15px" starSpacing="2px"/>
                                <p>{reviews[i]['des']}</p>
                            </li>
                        </div>)
                    })
                }
            </ul>
        </div>
    );
};

export default ReviewList;