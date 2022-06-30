
import {useNavigate, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {Product} from "../../types";
import {fetcher, QUERY_KEYS} from "../../queryClient";
import Loading from "../../components/Loading";
import ProductDetail from "../../components/ProductDetail";


const ProductDetailPage=() => {
    const {id}= useParams();
    const navigate= useNavigate();
    const {data}= useQuery<Product>([QUERY_KEYS.PRODUCTS,id],() => fetcher({
        method:"GET",
        path:`/products/${id}`
    }));
    if(!data) return <Loading />
    return <div className="relative z-10" role="dialog" aria-modal="true">
        <div className="hidden fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity md:block"></div>
        <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-stretch md:items-center justify-center min-h-full text-center md:px-2 lg:px-4">
                <div
                    className="flex text-base text-left transform transition w-full md:max-w-2xl md:px-4 md:my-8 lg:max-w-4xl">
                    <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                        <button onClick={() => navigate('/products')}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8">
                            <span className="sr-only">Close</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                       <ProductDetail item={data} />
                    </div>
                </div>
            </div>

        </div>
    </div>
}
export default ProductDetailPage