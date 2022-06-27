import {useQuery} from "react-query";
import {fetcher, QUERY_KEYS} from "../../queryClient";
import ProductItem from "../../components/ProductItem";
import {Product} from "../../types";


const ProductPage=() => {
    const {data}= useQuery<Product[]>(QUERY_KEYS.PRODUCTS,() => fetcher({
        method:"GET",
        path:'/products'
    }));
    console.log(data)
    return <div>
        {
            data?.map((product:Product) => <ProductItem {...product}  key={product.id}/> )
        }
    </div>
}
export default ProductPage