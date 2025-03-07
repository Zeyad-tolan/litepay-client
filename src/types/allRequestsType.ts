import { getAllRolesType } from "./allRolesTypes";
import { getMyCardType } from "./getMyCardType";

export interface getAllRequestsType{
    message: string;
    data:itemRequest[]
    meta:metaType
}

export interface metaType{
    hasNext:boolean,
    hasPrev:boolean,
    totalRows:number,
    page:number,
    limit:number,
    totalPages:number,
}

export interface itemRequest{
    id:number,
    account:string,
    method:string,
    type:string,
    amount:number,
    amountUsd:number,
    userId:number,
    cardId:number | null,
    attachments:string[] | null,
    nameOnCard:string,
    phoneNumber:string,
    telegram:string,
    status:string,
    createdAt:string,
    updatedAt:string,
    User:{
        id:number,
        email:string,
        Role:getAllRolesType
    },
    Card:getMyCardType | null
}