"use client";
import toast from "react-hot-toast";
import ExportLink from "../ExportLink";
import HeaderCalender from "../HeaderCalender";
import HeaderSearch from "../HeaderSearch";
import HeaderSelect from "../HeaderSelect";
import Cookies from "js-cookie";

export default function FormRequestPage({
  link,
  fileName,
}: {
  link: string;
  fileName: string;
}) {
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
      <HeaderSearch />
      {/* <HeaderCalender /> */}
      <HeaderSelect />
      <ExportLink />
    </form>
  );
}
