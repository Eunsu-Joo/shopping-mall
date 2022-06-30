export type Product={
    category: string;
    description: string;
    id: number;
    imageUrl: string;
    price: number;
    rating: {rate: number, count: number}
    title: string;
}