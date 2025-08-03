export interface Product {
    id: Number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
}

export interface ApiResponse {
    status: boolean,
    data?: any[]
}
