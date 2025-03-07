export type LineBarProps = {
  value: string
};
export default function LineBar({ value }: LineBarProps) {
  return (
    <div className="md:w-[45%] bg-[#E8E8E8] relative h-7 rounded-full my-1">
      <div style={{ width: value }} className={`absolute top-0 ltr:left-0 rtl:right-0 h-full rounded-full bg-primary`}>
      </div>
    </div>
  );
}
