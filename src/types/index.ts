import { StaticImageData } from "next/image";

export interface RootLayoutProps {
    children: React.ReactNode;
    params: Promise<{ lang: string }>
}

export type transHistoryType = {
    companyName?: string,
    avatar?: StaticImageData | string,
    time?: string,
    description?: string,
    id?: number,
    status?: string,
    amountUsd?: number | string,
    amount?: number,
    createdAt?: string,
    type?: string,
    method?: string,
    failureReason?: string,
    details?: string
}

export type cardDashTrans = {
    amount: string,
    date: string,
    description: string,
    image: StaticImageData,
    name: string,
    time: string,
    type: string,
    failureReason: string,
}

export type detailsTransHistoryType = {
    relatedTransactions: {
        amount: number,
        relationKind: string
    }[]
}

export type OneItemRequestPageProps = {
    srcImage: string | StaticImageData,
    name: string,
    phoneNumber: string,
    amount: string,
    amountUsd: string,
    status: "pending" | "success" | "declined",
    methods: string,
    account: string,
    createdAt: { day: string; time: string; },
    email: string
};

export type OneItemRechargeCardProps = OneItemRequestPageProps & {
    type: "premium" | "normal"
}

export interface itemRating {
    id: number;
    title: string;
    value: number;
    addedBy: number;
    createdAt: string;
    updatedAt: string;
}