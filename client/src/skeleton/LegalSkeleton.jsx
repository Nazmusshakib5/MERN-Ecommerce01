import Skeleton from "react-loading-skeleton";


const LegalSkeleton = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='card'>
                            {Array.from({length:8}).map(()=>{
                                return <Skeleton count={3}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegalSkeleton;