
import { useFilters } from "@/src/hooks/FiltersHook";
import { useTranslations } from "next-intl";

// export type FilterTypeProps = {
//   setValueType: Dispatch<SetStateAction<"pending" | "success" | "failure" | "refund" | "all">>
//   valueType: "pending" | "success" | "failure" | "refund" | "all"
// };

export default function FilterType() {
  const t = useTranslations('Cards')
  const addFilter = useFilters()
  return (
    <div>
      <select
        id="options"
        className="block w-full border border-gray-300 rounded p-2 cursor-pointer bg-transparent"
        // value={valueType}
        onChange={(e) => addFilter("status",e.target.value === "all" ? "" : e.target.value)}
      >
        <option value="all" className="bg-white text-black dark:bg-primaryDark dark:text-white">{t("all")}</option>
        <option value="pending" className="bg-white text-black dark:bg-primaryDark dark:text-white">{t("pending")}</option>
        <option value="approved" className="bg-white text-black dark:bg-primaryDark dark:text-white">{t("success")}</option>
        <option value="rejected" className="bg-white text-black dark:bg-primaryDark dark:text-white">{t("failure")}</option>
        {/* <option value="refund" className="bg-white text-black dark:bg-primaryDark dark:text-white">{t("refund")}</option> */}
      </select>
    </div>
  );
}
// pending, approved, rejected