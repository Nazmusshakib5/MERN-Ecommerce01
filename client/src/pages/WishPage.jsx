import Layout from "../components/layout/Layout.jsx";
import Wishes from "../components/wish/Wishes.jsx";
import {useEffect} from "react";
import WishStore from "../store/WishStore.js";

const WishPage = () => {
    const {ReadWishListRequest}=WishStore()
    useEffect(() => {
        (async ()=>{
            await ReadWishListRequest()
        })()
    }, []);
    return (
        <Layout>
            <Wishes/>
        </Layout>
    );
};

export default WishPage;