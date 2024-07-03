import NoProduct from "../../assets/images/no-results.png";

const Nodata = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className='col-md-12 d-flex justify-content-center'>
                    <img alt="image" className="product-img-md" src={NoProduct}/>
                </div>
            </div>
        </div>
    );
};

export default Nodata;