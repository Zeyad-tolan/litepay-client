import { DiamondDarkIcon, ListDots } from "@/src/app/icons/icons";
import LinkLocal from "@/src/app/ui/elements/LinkLocal";
import srcIcon from "@/src/shared/Diamond.svg";
import Image from "next/image";
import OneTdNewCardReq from "../../requestPage/newCard/OneTdNewCardReq";
import { getUsersItemType } from "@/src/types/allUsersType";
import { useMemo } from "react";

// interface Props {
//   id: string;
//   name: string;
//   email: string;
//   phoneNumber: string;
//   nationalID: string;
//   registerDate: string;
//   telegram: string;
//   firstCard: string;
//   totalDeposits: string;
//   deposits: string;
//   type: string;
// }
export default function OneItemUsers({ item }: { item: getUsersItemType }) {
  const date = new Date(item.createdAt);
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();
  const formattedDate = `${day}/${month}/${year}`;
  const totalDeposits = useMemo(() => {
      let total = 0;
      item.Cards?.forEach((card) => {
        total += card.balance;
      });
      return total;
    }, [item.Cards]);
  return (
    <tr className="border-t">
      <td>
        {
          item.Role.type === "vip" &&
          <>
            <Image
              src={srcIcon}
              alt=""
              className={`${item.Role.type == "vip" ? "border border-solid border-primary bg-primary/30 rounded-full h-fit w-fit p-2 flex justify-center items-center" : ""} dark:hidden`}
            />
            <DiamondDarkIcon className={`${item.Role.type == "vip" ? "border border-solid border-primary bg-primary/30 rounded-full h-fit w-fit p-2 flex justify-center items-center" : ""} hidden dark:block`} />
          </>
        }
      </td>
      <OneTdNewCardReq value={`${item.Cards.length > 0 ? item.Cards[0].name : item.username}`} />
      <OneTdNewCardReq value={`${item.phoneNumber}`} />
      <OneTdNewCardReq value={item.email} />
      <OneTdNewCardReq value={formattedDate} />
      <OneTdNewCardReq value={`${item.Cards.length > 0 ? `****-${item.Cards[0].cardNumber.slice(-4)}` : "null"}`} />
      <OneTdNewCardReq value={`${totalDeposits.toFixed(2)} EGP`} />
      <OneTdNewCardReq value={`${item.last30DaysDeposit} EGP`} />
      <td className={`font-normal h-14 py-1 flex justify-center items-center`}>
        <LinkLocal src={`dashboard/users/${item.id}?last=${item.last30DaysDeposit}`} style="bg-primary block w-fit h-fit text-black px-1 py-1 rounded-md">
          <ListDots className="text-white" />
        </LinkLocal>
      </td>
    </tr>
  );
}
