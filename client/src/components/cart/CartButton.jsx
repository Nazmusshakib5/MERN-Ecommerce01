import CartStore from "../../store/CartStore.js";

const CartButton = (props) => {

    const {isCartButton}=CartStore()
    if(isCartButton===false){
        return <button onClick={props.onClick} className={props.className} type="submit">{props.text}</button>
    }
    else{
        return <button disabled={true} className={props.className}>
            <div className='spinner-border spinner-border-sm me-2' role='status'></div>Processing</button>
    }
};

export default CartButton;