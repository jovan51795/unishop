export class Orders {
    orderId: number;
    orderedDate: Date = new Date();
    totalPrice: number;
    status: string = "Pending";

    constructor(orderId: number, orderedDate: Date, totalPrice: number, status: string){
        this.orderId = orderId;
        this.orderedDate = orderedDate;
        this.totalPrice = totalPrice
        this.status = status;     
    }
}
