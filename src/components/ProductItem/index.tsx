import {Product} from "../../types";
import {Link} from "react-router-dom";

const ProductItem=({
                       description,
                       id,
                       imageUrl,
                       price,
                       rating,
                       title,
                   }:Product) => {
    return  <div className="group relative">
        <div className="w-full min-h-80 bg- aspect-w-1 aspect-h-1 overflow-hidden  cursor-pointer group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <Link to={`/products/${id}`}>
            <img
                src={imageUrl}
                alt={description}
                className="w-fit h-fit object-center object-contain md:w-auto lg:w-full lg:h-full "
            />
            </Link>
        </div>
        <div className="mt-4 ">
            <Link to={`/products/${id}`}>
                <h3 className="text-sm text-gray-700 font-bold">

                        {title}
                </h3>

            </Link>
            <p className="text-sm font-medium text-gray-900 font-bold">${price}</p>
            <p className="mt-1 text-sm text-gray-500">Customer Rating: <span className={"font-bold"}>{rating.rate} </span> / 5 </p>

        </div>
    </div>
}
export default ProductItem