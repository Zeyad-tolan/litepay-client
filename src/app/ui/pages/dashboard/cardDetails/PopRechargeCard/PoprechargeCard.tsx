"use client";
import PopUpLayout from "@/src/app/ui/elements/PopUpLayout";
import NumberInput from "@/src/app/ui/form/NumberInput";
import SubmitBtn from "@/src/app/ui/form/SubmitBtn";
import { getUsersItemType } from "@/src/types/allUsersType";
import { changeUserRate } from "@/src/util/changeUserRate";
import { getOneUser } from "@/src/util/getOneUser";
import { useParams } from "next/navigation";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { itemRequest } from "@/src/types/allRequestsType";
import { changeBalane } from "@/src/util/changeBalane";

export type Props = {
  setShow: Dispatch<SetStateAction<boolean>>;
  show: boolean;
  data: itemRequest;
};

export default function PopRechargeCard({ setShow, show, data }: Props) {
  const [balance, setBalance] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // toast.error("this feature is under development");
    // return;

    setIsSubmitting(true);

    try {
      changeBalane(
        `${data.id}`,
        `${data.Card?.id}`,
        (data.Card?.balance || 0) + balance,
        data.userId
      );
      setShow(false);
    } catch (error) {
      toast.error("Failed to recharge card. Please try again.");
      console.error("Recharge error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (data) {
      setBalance(data.amountUsd);
    }
  }, [data]);

  return (
    <PopUpLayout
      setShow={setShow}
      show={show}
      styleChildren="dark:bg-primaryDark max-w-md w-full mx-auto"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 max-w-4xl w-full mx-auto"
      >
        <h2 className="text-xl font-bold mb-4 text-left">Recharge Card</h2>

        {/* Balance input field */}
        <div className="flex flex-col gap-1">
          <label htmlFor="balance" className="text-sm font-medium">
            Balance
          </label>
          <input
            type="number"
            id="balance"
            name="balance"
            value={balance}
            onChange={(e) => setBalance(Number(e.target.value))}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        <SubmitBtn title="submit" disabled={isSubmitting} />
      </form>
    </PopUpLayout>
  );
}
