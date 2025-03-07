import { useTranslations } from "next-intl";

export type SelectInputProps = {
  data: { value: string, text: string }[],
  required: boolean,
  title: string,
  des?: string,
  name: string,
  value?: string
};

export default function SelectInput({ name, required, title, des, data, value }: SelectInputProps) {
  const t = useTranslations("Cards")

  return (
    <div
      className="flex flex-col gap-2 w-full"
    >
      <label htmlFor={name} className="flex gap-1 capitalize">
        {t(title)}
        {des &&
          <span className="text-[#A2A3A2]">
            {t(des)}
          </span>
        }
      </label>
      <div
        className="border border-solid border-[#868685] focus:border-primary py-2 px-3 rounded-full">
        <select
          required={required}
          name={name}
          id={name}
          defaultValue={value ? value : ""}
          className="outline-none bg-transparent w-full">
          {
            data.map(({ text, value }, index) => {
              return (
                <option
                  key={index}
                  value={value}
                  className="bg-white text-black dark:bg-primaryDark dark:text-white"
                >
                  {t(text)}
                </option>
              )
            })
          }
        </select>
      </div>
    </div>
  );
}
