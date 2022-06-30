import {useQuery} from "react-query";
import {fetcher, graphqlFetcher, QUERY_KEYS} from "../../queryClient";
import ProductItem from "../../components/ProductItem";
import {Product} from "../../types";
import Loading from "../../components/Loading";
import GET_PRODUCTS from "../../graphql/products";



const ProductPage=() => {
    const {data,isLoading}= useQuery<Product[]>(QUERY_KEYS.PRODUCTS,() => graphqlFetcher(GET_PRODUCTS));
    return <div className="px-8 bg-white sm:px-8 lg:px-10 xl:px-12">
        <div className=" sm:py-8 sm:px-6 lg:max-w-7xl lg:px-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 mt-6">Shopping-mall Product</h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            </div>
        </div>
            {
                isLoading? <Loading/>: <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {
                        data?.map((product:Product) => <ProductItem {...product}  key={product.id}/> )
                    }

                </div>
            }

    </div>
}
export default ProductPage