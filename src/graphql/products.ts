//  여기서 graphql에 들어갈 쿼리데이터 생성 (KEY 생성)

import {gql} from 'graphql-tag';
export type Product={
    description: string;
    id: number|string;
    image: string;
    price: number;
    rating: {rate: number, count: number}
    title: string;
    createdAt?:string
}
const GET_PRODUCTS= gql`
    query GET_PRODUCTS{
    description
    id
    image
    price
    rating
    title
    createdAt
    }
`
export default GET_PRODUCTS