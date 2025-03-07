import ExportLink from "../ExportLink";
import HeaderCalender from "../HeaderCalender";
import HeaderSearch from "../HeaderSearch";
import HeaderSelect from "../HeaderSelect";

export default function FormRequestPage() {
  return (
    <form className="flex items-end gap-3 py-3">
      <HeaderSearch />
      <HeaderCalender />
      <HeaderSelect />
      <ExportLink />
    </form>
  );
}
