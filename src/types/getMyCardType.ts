export interface getMyCardType {
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
  User: {
    email: string;
    id: number;
    phoneNumber?: string;
  };
  totalLast30DaysDeposit?: number;
  totalDeposit: number;
}
