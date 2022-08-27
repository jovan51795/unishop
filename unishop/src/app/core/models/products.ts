export class Product{
    id: number;
    productName: string;
    description: string;
    price: number;

    constructor(id: number, productName: string, description: string, price: number){
        this.id = id
        this.productName = productName
        this.description = description
        this.price = price
    }
}