import { Users } from "./users";

export interface Product {
    id?: number,
    category: string,
    productName: string,
    image: string,
    description: string,
    price: number,
    quantity: number,
    isActive?: boolean,
    rating?: string[],
    customer?: [
        {
            users: Users[],
            comments: string
        }
    ],
    date: Date,
    paymentType: string[],
    sold?: number
}