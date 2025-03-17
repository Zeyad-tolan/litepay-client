"use client";
import toast from "react-hot-toast";
import ExportLink from "../ExportLink";
import HeaderCalender from "../HeaderCalender";
import HeaderSearch from "../HeaderSearch";
import HeaderSelect from "../HeaderSelect";
import Cookies from "js-cookie";

export default function FormRequestPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}requests?&reqType=&pageLimit=20&sortKey=createdAt&sortValue=DESC`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: `${Cookies.get("token")}`,
          },
        }
      );
      const data = await res.json();
      if (res.ok) {
        toast.success("your file will be downloaded soon");
        // console.log(data);
      } else {
        toast.error("an error occurred, try again");
      }
    } catch (error) {
      toast.error("request failed, try again");
    }
  };
  return (
    <form className="flex items-end gap-3 py-3" onSubmit={handleSubmit}>
      <HeaderSearch />
      {/* <HeaderCalender /> */}
      <HeaderSelect />
      <ExportLink />
    </form>
  );
}
