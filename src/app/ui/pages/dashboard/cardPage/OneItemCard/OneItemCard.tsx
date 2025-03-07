'use client'

import { useParams, useRouter } from 'next/navigation';
import OneTdNewCardReq from "../../requestPage/newCard/OneTdNewCardReq";

type oneItemCardProps = {
  name: string;
  cardNumber: string;
  createDate: string;
  totalDeposits: string;
  id: string
}

export default function OneItemCard({ cardNumber, createDate, id, name, totalDeposits }: oneItemCardProps) {
  const router = useRouter()
  const { lang } = useParams()

  const date = new Date(createDate);
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <tr className="border-t cursor-pointer" onClick={() => router.push(`/${lang}/dashboard/cards/${id}`)} >
      <OneTdNewCardReq value={name} />
      <OneTdNewCardReq value={("****-****-****-").concat(cardNumber.toString().slice(-4))} />
      <OneTdNewCardReq value={formattedDate} />
      <OneTdNewCardReq value={`${totalDeposits} EGP`} />
    </tr>
  );
}
