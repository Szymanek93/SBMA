// export class Business{
//     id:number;
//     businessType:string;
//     businessName:string;
//     businessCity:string;
//     businessPostCode:number;
//     businessStreet:string;
//     businessHouseNumber:string;
//     businessDetails:string;
//     owner:string;

// }
export class Business{
    id:number;
    businessType:string;
    businessName:string;
    businessCity:string;
    businessPostCode:number;
    businessStreet:string;
    businessHouseNumber:string;
    businessDetails:string;
    owner: owner;
    
}
export class owner{
        id:number;
        ownerName:string;
        ownerCity:string;
        ownerPostCode:number;
        ownerStreet:string;
        ownerHouseNumber:string;
        ownerPhone:number;
        }
