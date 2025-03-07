import { useTranslations } from "next-intl";

export default function UserInstaPay() {
  const t = useTranslations("Cards")
  return (
    <div className="flex-1">
      <label htmlFor="user-instapay" className="font-medium">
        {t("account-optional")}
      </label>
      <div className="flex gap-1 text-black items-center bg-[#E8E8E8] dark:bg-[#c5c5c5] rounded-xl p-2">
        <div className="flex-1">
          <input
            type="text"
            name="instapay"
            id="user-instapay"
            className="bg-transparent outline-none w-full"
          />
        </div>
        <p>
          @instapay
        </p>
      </div>
    </div>
  );
}
