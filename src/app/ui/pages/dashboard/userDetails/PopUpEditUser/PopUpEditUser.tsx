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

export type Props = {
  setShow: Dispatch<SetStateAction<boolean>>;
  show: boolean;
};

export default function PopUpEditUser({ setShow, show }: Props) {
  const { user } = useParams();

  // State for form fields
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [userDetails, setUserDetails] = useState<getUsersItemType | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    getOneUser(user as string, setUserDetails);
  }, [user]);

  // Set form fields when user details are loaded
  useEffect(() => {
    if (userDetails) {
      setUsername(userDetails.username || "");
      setPhoneNumber(userDetails.phoneNumber || "");
      setEmail(userDetails.email || "");
    }
  }, [userDetails]);

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.error("this feature is under development");
    return;

    setIsSubmitting(true);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}users/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token: `${Cookies.get("token")}`,
      },
      body: JSON.stringify({
        username,
        phoneNumber,
        email,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((errorData) => {
            throw new Error(errorData.message || "An error occurred");
          });
        }
      })
      .then((data) => {
        toast.success(data.message || "User updated successfully");
        setShow(false); // Close popup on success
      })
      .catch((err) => {
        toast.error(err.message || "Failed to update user");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

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
        <h2 className="text-xl font-bold mb-4 text-left">Edit User Details</h2>

        {/* Username input field */}
        <div className="flex flex-col gap-1">
          <label htmlFor="username" className="text-sm font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        {/* Phone number input field */}
        <div className="flex flex-col gap-1">
          <label htmlFor="phoneNumber" className="text-sm font-medium">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full max-w-2xl p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        {/* Email input field */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full max-w-2xl p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        <SubmitBtn title="submit" disabled={isSubmitting} />
      </form>
    </PopUpLayout>
  );
}
