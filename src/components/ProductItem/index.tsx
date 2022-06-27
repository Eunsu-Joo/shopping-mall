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
    return <li >
        <img src={image} alt={title}/>
        <p className={"underline"}>{title}</p>
        <p>${price}</p>
        <p>Category : {category}</p>
        <p>{description}</p>
        <p>{rating.rate} / {rating.count}</p>
    </li>
}
export default ProductItem