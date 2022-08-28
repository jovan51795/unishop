export interface Users {
    id?: string,
    firstName?: string,
    middleName?: string,
    lastName?: string,
    email?: string,
    password?: string,
    role?: string,
    status?: boolean,
    contact?: number,
    dob?: Date,
    profile: string,
    address?: {
        province?: string,
        city?: string,
        brgy?: string,
        street?: string,
        landmark?: string,
    }
}

// {
//       "id": "number",
//       "isActive": "boolean",
//       "role": "user",
//       "email": "value",
//       "password": "value",
//       "firstName": "Value",
//       "lastName": "value",
//       "contact": "number",
//       "dob": "short date",
//       "address": {
//         "house_number": "value",
//         "street": "value",
//         "city": "value",
//         "province": "value",
//         "brgy": "value"
//       },
//       "interests": [
//         {
//           "qty": "number",
//           "ordersDate": "long date",
//           "products": "products",
//           "status": "value"
//         }
//       ]
//     },