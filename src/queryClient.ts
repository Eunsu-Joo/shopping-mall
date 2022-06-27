import {
    QueryClient,
} from 'react-query'

type fetcherObj={
    [key:string]:any
}
type methodType= 'GET' | 'POST' | 'PUT' | 'DELETE'|'PATCH'
export const getClient=(() => {
   let client:QueryClient|null= null;
   return () => {
       if(!client) client= new QueryClient();
       return client
   }
})();

export const BASE_URL= `https://fakestoreapi.com`;
export const QUERY_KEYS={
    PRODUCTS:"products"
}
export const fetcher= async({method,path,body,params}:{method:methodType,path:string,body?:fetcherObj,params?:fetcherObj}) => {
    try{
        const options:RequestInit={
            method,
            headers:{
                'Content-type':'application/json',
                'Access-Control-Allow-Origin':BASE_URL
            }
        }
        const res= await fetch(`${BASE_URL}${path}`,options);
        const json= await res.json()
        return json
    } catch(error){
        console.log(error)
    }
}