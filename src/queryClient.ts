import {
    QueryClient,
} from 'react-query'
import {request, RequestDocument} from "graphql-request";

type fetcherObj={
    [key:string]:any
}
type methodType= 'GET' | 'POST' | 'PUT' | 'DELETE'|'PATCH'
export const getClient=(() => {
   let client:QueryClient|null= null;
   return () => {
       if(!client) client= new QueryClient({
            defaultOptions:{
                queries:{
                    cacheTime:1000*60*60*24,
                    staleTime:1000*60,
                    refetchInterval:false,
                    refetchOnReconnect:false,
                    refetchOnWindowFocus:false
                }
            }
       });
       return client
   }
})();
export const BASE_URL= `/`;
export const QUERY_KEYS={
    PRODUCTS:"products"
}
export const graphqlFetcher=(query:RequestDocument) =>{
    console.log(query)
    return request(BASE_URL,query)
}
export const fetcher= async({method,path,body,params}:{method:methodType,path:string,body?:fetcherObj,params?:fetcherObj}) => {
    let URL= `${BASE_URL}${path}`
    try{
        const fetcherOptions:RequestInit={
            method,
            headers:{
                'Content-type':'application/json',
                'Access-Control-Allow-Origin':BASE_URL
            }
        }
        if(params){
            const searchParams= new URLSearchParams();
            URL += `?${searchParams.toString()}`
        }
        if(body){
            fetcherOptions.body= JSON.stringify(body)
        }
        const res= await fetch(URL,fetcherOptions);
        const json= await res.json()
        return json
    } catch(error){
        console.log(error)
    }
}