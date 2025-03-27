"use client";
import { XIcon } from "@/src/app/icons/icons";
import PopUpLayout from "@/src/app/ui/elements/PopUpLayout";
import { allCardsBank } from "@/src/types/allCardsBank";
import { addCard } from "@/src/util/addCard";
import { getAllCardsBank } from "@/src/util/getAllCardsBank";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface Props {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
  id: string;
  balance: string;
  userId: number;
  type?: string;
}

export default function PopAddCard({
  setShow,
  show,
  id,
  balance,
  userId,
  type,
}: Props) {
  const [cards, setCards] = useState<allCardsBank[] | null>(null);
  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (type === "under-development") {
      toast.error("This feature is under development.");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const cardNumber = `${data.cardNumber}`;
    const bank = `${data.bankId}`.split("//");
    const cvv = `${data.cvv}`;
    // console.log(cardNumber.slice(-4))
    // console.log(bank)
    if (cardNumber.length !== 16) {
      alert("Card Number must be 16 digits.");
      return;
    } else if (cvv.length !== 3) {
      alert("CVV must be 3 digits.");
      return;
    } else if (bank[1] !== cardNumber.slice(-4)) {
      alert(
        "last 4 digits card number is different from last 4 digits card bank."
      );
      return;
    } else {
      // console.log({...data,"cardBalance":+(data.cardBalance as string),"requestId":id});
      const all = { ...data, bankId: bank[0] };
      const cardType = bank[2];
      // console.log(all)
      addCard(all, id, userId, cardType, setShow);
    }
  };
  useEffect(() => {
    getAllCardsBank(setCards);
  }, []);
  return (
    <PopUpLayout
      setShow={setShow}
      show={show}
      styleChildren="dark:bg-primaryDark !w-[500px]"
    >
      <XIcon
        className="absolute text-sm top-4 ltr:right-4 rtl:left-4 cursor-pointer !fill-gray-500 dark:fill-white"
        onClick={() => setShow(false)}
      />
      <div className="mt-5">
        <h1 className="text-xl font-semibold text-start">
          Accept New Card Request
        </h1>
        <form onSubmit={handelSubmit} className="flex flex-col gap-2 mt-3">
          <div>
            <select
              name="bankId"
              className="w-full outline-none border border-solid border-gray-300 rounded-md px-2 py-1 bg-white dark:bg-secondaryDark dark:text-black"
            >
              <option value="">Select Mercury Card</option>
              {cards?.map((card) => (
                <option
                  key={card.cardId}
                  value={`${card.cardId}//${card.lastFourDigits}//${card.network}`}
                >
                  {card.lastFourDigits} <>&#x2F;&#x2F;</>{" "}
                  {new Date(card.createdAt).getUTCFullYear()}-
                  {new Date(card.createdAt).getUTCMonth() + 1}-
                  {new Date(card.createdAt).getUTCDate()}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-2">
            <input
              type="number"
              minLength={16}
              maxLength={16}
              required
              name="cardNumber"
              placeholder="Card Number"
              className="w-full outline-none border border-solid border-gray-300 rounded-md px-2 py-1 inputNum dark:bg-secondaryDark dark:text-black"
            />
          </div>
          <div className="mt-2">
            <input
              type="number"
              minLength={3}
              maxLength={3}
              required
              name="cvv"
              placeholder="CVV"
              className="w-full outline-none border border-solid border-gray-300 rounded-md px-2 py-1 inputNum dark:bg-secondaryDark dark:text-black"
            />
          </div>
          <div className="mt-2">
            <input
              type="text"
              required
              name="expiryDate"
              placeholder="Expiry Date (01/26)"
              className="w-full outline-none border border-solid border-gray-300 rounded-md px-2 py-1 inputNum dark:bg-secondaryDark dark:text-black"
            />
          </div>
          <div className="mt-2">
            <input
              type="number"
              required
              name="cardBalance"
              defaultValue={balance}
              step="0.01"
              min="0"
              placeholder="Card Balance"
              className="w-full outline-none border border-solid border-gray-300 rounded-md px-2 py-1 inputNum dark:bg-secondaryDark dark:text-black"
            />
          </div>
          <div className="flex justify-end gap-2 mt-3">
            <button
              onClick={() => setShow(false)}
              type="reset"
              className="w-fit bg-black text-white py-1 px-3 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-fit bg-primary text-white py-1 px-3 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </PopUpLayout>
  );
}
