import ReviewStore from "../../store/ReviewStore.js";

const ReviewButton = (props) => {
    const {isReviewBtn}=ReviewStore()
    if(isReviewBtn===false){
        return <button onClick={props.onClick} className={props.className} type="submit">{props.text}</button>
    }
    else{
        return <button disabled={true} className={props.className}>
            <div className='spinner-border spinner-border-sm me-2' role='status'></div>Processing</button>
    }
};

export default ReviewButton;