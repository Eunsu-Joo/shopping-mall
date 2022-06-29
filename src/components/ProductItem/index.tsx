import {Product} from "../../types";
import {Link} from "react-router-dom";

const ProductItem=({
                       category,
                       description,
                       id,
                       image,
                       price,
                       rating,
                       title,
                   }:Product) => {
    return  <div className="group relative">
        <div className="w-full min-h-80 bg- aspect-w-1 aspect-h-1 overflow-hidden rounded-md overflow-hidden cursor-pointer group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <Link to={`/products/${id}`}>
            <img
                src={image}
                alt={description}
                className="w-fit h-fit object-center object-contain lg:w-full lg:h-full "
            />
            </Link>
        </div>
        <div className="mt-4 flex justify-between">
            <Link to={`/products/${id}`}>
                <h3 className="text-sm text-gray-700">

                        <span aria-hidden="true"  />
                        {title}

                </h3>
                <p className="mt-1 text-sm text-gray-500">{rating.rate} / {rating.count}</p>
            </Link>
            <p className="text-sm font-medium text-gray-900 font-bold">${price}</p>
        </div>
    </div>
}
export default ProductItem