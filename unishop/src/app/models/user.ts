export interface Users {
    id : number,
    isActive: boolean,
    role: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    contact: number,
    dob: Date,
    address: {
        house_number: string,
        street: string,
        city: string,
        province: string,
        brgy: string
    },
    interest: [
        {
            category: string
        }
    ]
    
}