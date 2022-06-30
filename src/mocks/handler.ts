import {graphql}from "msw"
import {v4 as uuid} from "uuid"
import GET_PRODUCTS from "../graphql/products";
interface GraphGLRequest{
    query:string;
    variables?:Record<string, any>
}
const mock_products = Array.from({length:20}).map((_,index) => ({
    id:uuid(),
    imageUrl:`https://picsum.photos/id/${index}/400/300`,
    rating:{
        rate:Math.ceil(Math.random()*5),
        count:Math.ceil(Math.random()*1000)
    },
    description:`ProductDetails - ${index+1}`,
    title:`Product Title - ${index+1}`,
    createdAt:new Date(1654734449123+(0*1000*60*24)).toString()
}))
export const handlers=[
    graphql.query('GET_PRODUCTS',(req,res,ctx) => {
        return res(
            ctx.data(
              mock_products
            )
        )
    }),

]
