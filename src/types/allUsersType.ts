import { metaType } from "./allRequestsType";

export interface getAllUsersType {
  message: string;
  data: getUsersItemType[];
  meta: metaType;
}

export interface getUsersItemType {
  id: number;
  email: string;
  username: string | null;
  phoneNumber: string | null;
  telegram: string | null;
  gender: string | null;
  age: number | null;
  status: string;
  googleId: string | null;
  roleId: number;
  cards: number[] | null;
  requests: number[] | null;
  rating: string | null;
  createdAt: string;
  updatedAt: string;
  Role: {
    id: number;
    type: string;
    name: string;
  };
  Cards: cards[] | [];
  deposits: {
    totalDeposit: number;
    totalLast30DaysDeposit: number;
  };
}

export interface cards {
  id: number;
  bankId: string;
  cardNumber: string;
  cvv: string;
  name: string;
  expiryDate: string;
  userId: number;
  balance: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}
