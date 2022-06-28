import {Product} from "../../types";

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
            <img
                src={image}
                alt={description}
                className="w-fit h-fit object-center object-contain lg:w-full lg:h-full "
            />
        </div>
        <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-sm text-gray-700">
                    {/*<a href={product.href}>*/}
                        <span aria-hidden="true"  />
                        {title}
                    {/*</a>*/}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{rating.rate} / {rating.count}</p>
            </div>
            <p className="text-sm font-medium text-gray-900 font-bold">${price}</p>
        </div>
    </div>
}
export default ProductItem