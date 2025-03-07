/* eslint-disable @typescript-eslint/no-explicit-any */
import { metaType } from "./allRequestsType";
import { getMyCardType } from "./getMyCardType";

export interface getAllCardsType {
    message: string;
    data: getMyCardType[];
    meta: metaType;
}