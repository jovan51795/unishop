export interface Order {
    userId: string,
    orderedDate: Date,
    productName: string,
    description: string,
    qty: number,
    unitPrice: number,
    total: number,
    status: string
}
