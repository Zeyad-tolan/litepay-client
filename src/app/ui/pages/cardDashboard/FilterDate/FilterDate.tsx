import { useTranslations } from "next-intl";
import { useFilters } from "@/src/hooks/FiltersHook";

// export type FilterDateProps = {
//   setValueDate: Dispatch<SetStateAction<"all" | "today" | "last week" | "last month">>
//   valueDate: "all" | "today" | "last week" | "last month"
// };
export default function FilterDate() {
  const t = useTranslations('Cards')
  const addFilter = useFilters()
  // const date = new Date();
  // const day = date.getUTCDate();
  // const month = date.getUTCMonth() + 1;
  // const year = date.getUTCFullYear();
  // const today = `${year}-${`${month}`.length === 1 ? `0${month}` : `${month}`}-${`${day}`.length === 1 ? `0${day}` : `${day}`}`;
  // const lastWeekDay = day > 7 ? (day - 7).toString() : day === 7 ? 1 : (30 - (7 - day)).toString();
  // const lastWeekMon = day >= 7 ? month : `${month === 1 ? 12 : month - 1}`
  // const lastWeekYear = day >= 7 ? year : `${month === 1 ? year - 1 : year}`
  // const lastWeek = `${lastWeekYear}-${`${lastWeekMon}`.length === 1 ? `0${lastWeekMon}` : `${lastWeekMon}`}-${`${lastWeekDay}`.length === 1 ? `0${lastWeekDay}` : `${lastWeekDay}`}`;
  // const lastMonthMon = month === 1 ? 12 : month - 1;
  // const lastMonth = `${month === 1 ? year - 1 : year}-${`${lastMonthMon}`.length === 1 ? `0${lastMonthMon}` : `${lastMonthMon}`}-${`${day}`.length === 1 ? `0${day}` : `${day}`}`;
  // console.log(today, lastWeek, lastMonth);
  return (
    <div>
      <select
        id="options"
        className="block w-full border border-gray-300 rounded p-2 cursor-pointer bg-transparent"
        // value={valueDate}
        onChange={(e) => {
          addFilter("whatDate",e.target.value === "all" ? "" : e.target.value);
        }}
      >
        <option value="all" className="bg-white text-black dark:bg-primaryDark dark:text-white">{t("all")}</option>
        <option value={"today"} className="bg-white text-black dark:bg-primaryDark dark:text-white">{t("today")}</option>
        <option value={"lastWeek"} className="bg-white text-black dark:bg-primaryDark dark:text-white">{t("last-week")}</option>
        <option value={"lastMonth"} className="bg-white text-black dark:bg-primaryDark dark:text-white">{t("last-month")}</option>
      </select>
    </div>
  );
}
