import {useParams} from "react-router-dom";
import {useProductStore} from "../stores/productStore.ts";
import {useEffect} from "react";

function ProductPage() {
    const {id} = useParams();
    const getOneProduct = useProductStore(state => state.fetchOneProduct)
    const isLoading = useProductStore((state) => state.isLoading);
    const errors = useProductStore((state) => state.errors);
    const product = useProductStore(state => state.currentProduct)
    useEffect(() => {
        getOneProduct(parseInt(id!))
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (errors.length > 0) {
        return <div>{errors[0]}</div>
    }

    return (<div>asd {product.price}</div>)
}
export default ProductPage;