
import {Product} from "../../types";

const Stars= ({rate}:{rate:number|undefined}) => {
    const starArray= Array.from({length:5}).map((_,index) => {
        if(rate &&index<Math.floor(rate))return {color:'text-gray-900'}
        return {color:'text-gray-200'}
    });
    return  <>
        {
            rate && starArray.map((star,index) => <svg className={`${star.color} h-5 w-5 flex-shrink-0`} key={index}
                                                       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                       fill="currentColor" aria-hidden="true">
                <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>)
        }
    </>
}
const Heart=() => {
    return <svg  viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg" className={"h-4 w-4 flex-shrink-0 mr-1"}>
        <path d="M10 0C15.525 0 20 4.3875 20 9.8C20 4.3875 24.475 0 30 0C35.525 0 40 4.3875 40 9.8C40 17.9575 31.915 20.835 20.98 33.82C20.8596 33.9626 20.7095 34.0772 20.5403 34.1559C20.371 34.2345 20.1866 34.2752 20 34.2752C19.8134 34.2752 19.629 34.2345 19.4597 34.1559C19.2905 34.0772 19.1404 33.9626 19.02 33.82C8.085 20.835 0 17.9575 0 9.8C0 4.3875 4.475 0 10 0Z" fill="#F24E1E"/>
    </svg>

}

const ProductDetail=({item:{    description,
    id,
    image,
    price,
    rating,
    title,}}:{item:Product}) => {
    return <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
        <div
            className="aspect-w-2 aspect-h-3 rounded-lg  overflow-hidden sm:col-span-4 lg:col-span-5">
            <img
                src={image}
                alt={title}
                className="object-center object-cover"/>
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{title}</h2>
            <section aria-labelledby="information-heading" className="mt-2">
                <h3 id="information-heading" className="sr-only">Product information</h3>
                <p className="text-2xl text-gray-900 font-bold">${price}</p>
                <div className="mt-6">
                    <h4 className="sr-only">Reviews</h4>
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <Stars rate={rating.rate} />
                        </div>
                        <p className="sr-only ">3.9 out of 5 stars</p>
                        <span className={"px-2 "}><strong className="font-bold">{rating.rate}</strong> / 5</span>
                        <span className={"flex items-center"}><Heart /> {rating.count}</span>
                    </div>

                </div>
            </section>

            <section aria-labelledby="options-heading" className="mt-4">
                <h3 id="options-heading" className="mb-4 text-lg font-bold" >Product Details</h3>
                <p>
                    {description}
                </p>
               <div className={"flex"}>
                   <button
                       type="submit"
                       className="mt-6 mr-3 w-1/2 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                   >
                       Add to bag
                   </button>
                   <button
                       type="submit"
                       className="mt-6 w-1/2 bg-rose-500 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-700"
                   >
                       Buy Now
                   </button>
               </div>
            </section>
        </div>
    </div>
}
export default ProductDetail