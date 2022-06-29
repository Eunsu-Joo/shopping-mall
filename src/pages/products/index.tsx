import {useQuery} from "react-query";
import {fetcher, QUERY_KEYS} from "../../queryClient";
import ProductItem from "../../components/ProductItem";
import {Product} from "../../types";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";


const ProductPage=() => {
    const {data}= useQuery<Product[]>(QUERY_KEYS.PRODUCTS,() => fetcher({
        method:"GET",
        path:'/products'
    }));
    return <Layout>
        <div className="bg-white">
        <div className=" sm:py-8 sm:px-6 lg:max-w-7xl lg:px-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Shopping-mall Product</h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            </div>
        </div>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {
                    data?.map((product:Product) => <ProductItem {...product}  key={product.id}/> )
                }
                {/*<Loading />*/}
            </div>
    </div>
    </Layout>
}
export default ProductPage