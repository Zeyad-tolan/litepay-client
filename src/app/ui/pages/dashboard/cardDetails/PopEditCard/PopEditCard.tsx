"use client";
import { XIcon } from "@/src/app/icons/icons";
import PopUpLayout from "@/src/app/ui/elements/PopUpLayout";
import { updateCard } from "@/src/util/updateCard";
import { useParams } from "next/navigation";

interface Props {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
  data: {
    cardNumber: string;
    cardBalance: string;
    cvv: string;
    expiryDate: string;
  };
}
export default function PopEditCard({ setShow, show, data }: Props) {
  const { cardId } = useParams();
  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const cardNumber = `${data.cardNumber}`;
    const cvv = `${data.cvv}`;
    if (cardNumber.length !== 16) {
      alert("Card Number must be 16 digits.");
      return;
    } else if (cvv.length !== 3) {
      alert("CVV must be 3 digits.");
      return;
    } else {
      //console.log({...data,"balance":+(data.balance as string),"cardId":cardId});
      updateCard(cardId as string, { ...data }, setShow);
    }
  };
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
        <h1 className="text-xl font-semibold text-start">Edit Card</h1>
        <form onSubmit={handelSubmit} className="flex flex-col gap-2 mt-3">
          <div>
            <label htmlFor="Card Number" className="block mb-1">
              Card Number
            </label>
            <input
              type="number"
              id="Card Number"
              minLength={16}
              maxLength={16}
              defaultValue={data.cardNumber}
              required
              name="cardNumber"
              placeholder="Card Number"
              className="w-full outline-none border border-solid border-gray-300 rounded-md px-2 py-1 inputNum dark:bg-secondaryDark dark:text-black"
            />
          </div>
          <div className="mt-2">
            <label htmlFor="cvv" className="block mb-1">
              CVV
            </label>
            <input
              type="number"
              id="cvv"
              minLength={3}
              maxLength={3}
              defaultValue={data.cvv}
              required
              name="cvv"
              placeholder="CVV"
              className="w-full outline-none border border-solid border-gray-300 rounded-md px-2 py-1 inputNum dark:bg-secondaryDark dark:text-black"
            />
          </div>
          {/* <div className="mt-2">
              <label htmlFor="Card Balance" className="block mb-1">Card Balance</label>
              <input type="number" id="Card Balance" required name="balance" defaultValue={data.cardBalance} placeholder="Card Balance" className="w-full outline-none border border-solid border-gray-300 rounded-md px-2 py-1 inputNum dark:bg-secondaryDark dark:text-black" />
            </div> */}
          <div className="mt-2">
            <label htmlFor="expiryDate" className="block mb-1">
              Expiry Date (01/26)
            </label>
            <input
              type="text"
              id="expiryDate"
              required
              name="expiryDate"
              defaultValue={data.expiryDate}
              placeholder="Expiry Date (01/26)"
              className="w-full outline-none border border-solid border-gray-300 rounded-md px-2 py-1 inputNum dark:bg-secondaryDark dark:text-black"
            />
          </div>
          {/* <div className="mt-2">
              <input type="text" required name="type" placeholder="Type" className="w-full outline-none border border-solid border-gray-300 rounded-md px-2 py-1 inputNum dark:bg-secondaryDark dark:text-black" />
            </div> */}
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
