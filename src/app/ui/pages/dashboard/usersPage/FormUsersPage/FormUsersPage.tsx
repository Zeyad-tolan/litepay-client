"use client";
import { useTranslations } from "next-intl";
import ExportLink from "../../requestPage/layout/ExportLink";
import HeaderCalender from "../../requestPage/layout/HeaderCalender";
import HeaderSearch from "../../requestPage/layout/HeaderSearch";
import SideBarDashboard from "../../SideBarDashboard";
import { useFilters } from "@/src/hooks/FiltersHook";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

export default function FormUsersPage({
  link,
  fileName,
}: {
  link: string;
  fileName: string;
}) {
  const t = useTranslations("dashboard");
  const addFilter = useFilters();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!link) {
      toast.error("No link provided");
      return;
    }

    const loadingToast = toast.loading(`requesting ${fileName} Data...`);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${link}`, {
        method: "GET",
        headers: {
          token: `${Cookies.get("token")}`,
        },
      });

      // Check if response is ok before proceeding
      if (!res.ok) {
        throw new Error("Failed to download file");
      }

      // Get the blob from the response
      const blob = await res.blob();

      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Create a temporary link element
      const downloadLink = document.createElement("a");
      downloadLink.href = url;
      const now = new Date();
      const currentDate = now.toISOString().split("T")[0]; // Format: YYYY-MM-DD
      const currentTime = now.toTimeString().split(" ")[0].replace(/:/g, "-"); // Format: HH-MM-SS
      downloadLink.download = `${fileName}_${currentDate}_${currentTime}.xlsx`; // Set the filename with date and time

      // Trigger the download
      document.body.appendChild(downloadLink);
      downloadLink.click();

      // Clean up
      document.body.removeChild(downloadLink);
      window.URL.revokeObjectURL(url);

      toast.dismiss(loadingToast);
      toast.success("File downloaded successfully");
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Download failed, please try again");
    }
  };
  return (
    <form className="flex items-end gap-3 py-3" onSubmit={handleSubmit}>
      <SideBarDashboard />
      <HeaderSearch />
      {/* <HeaderCalender /> */}
      <div className="min-w-[150px]">
        <label htmlFor="method" className="block mb-1">
          {t("premium-basic")}
        </label>
        <div className="px-3 py-2 rounded-lg border border-[#B3B7BE] flex justify-between items-center gap-2">
          <select
            name="role"
            onChange={(e) =>
              addFilter(
                e.target.name,
                e.target.value === "all" ? "" : e.target.value
              )
            }
            id="method"
            className="w-full bg-white text-black dark:bg-primaryDark dark:text-white outline-none placeholder:text-black"
          >
            <option
              value="all"
              className="bg-white text-black dark:bg-primaryDark dark:text-white"
            >
              {t("all")}
            </option>
            <option
              value="vip"
              className="bg-white text-black dark:bg-primaryDark dark:text-white"
            >
              {t("premium")}
            </option>
            <option
              value="user"
              className="bg-white text-black dark:bg-primaryDark dark:text-white"
            >
              {t("basic")}
            </option>
          </select>
        </div>
      </div>
      <ExportLink />
    </form>
  );
}
