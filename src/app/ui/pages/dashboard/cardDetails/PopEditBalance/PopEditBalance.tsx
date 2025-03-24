"use client";
import PopUpLayout from "@/src/app/ui/elements/PopUpLayout";
import { updateCard } from "@/src/util/updateCard";
import SubmitBtn from "@/src/app/ui/form/SubmitBtn";
import { useParams } from "next/navigation";

interface IProp {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
  cardBalance: string;
  userId: string;
}

export default function PopEditBalance({ setShow, show, userId }: IProp) {
  const { cardId } = useParams();
  const handSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const all = {
      balance: +(data.cardBalance as string),
      // userId: userId,
    };
    updateCard(cardId as string, all, setShow);
  };
  return (
    <PopUpLayout
      setShow={setShow}
      show={show}
      styleChildren="dark:bg-primaryDark"
    >
      <form onSubmit={handSubmit} className="flex flex-col gap-2">
        <div className="">
          <label htmlFor="Card Balance" className="block mb-1">
            Card Balance
          </label>
          <input
            type="text"
            id="Card Balance"
            required
            name="cardBalance"
            placeholder="Card Balance"
            className="w-full outline-none border border-solid border-gray-300 rounded-full px-3 py-2 inputNum dark:bg-secondaryDark dark:text-black"
          />
        </div>
        <SubmitBtn title="submit" />
      </form>
    </PopUpLayout>
  );
}
