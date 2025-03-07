interface IProp {
  firstPerson: string;
  secondPerson: string;
  text: string;
  date: string;
  time: string;
}

export default function OneItemLogs({item,check}:{item:IProp,check:boolean}) {
  return (
    <div className={`${check ? "border-b border-b-gray-500" : ""} py-3`}>
      <h1 className="font-medium">
        <span className="font-semibold">{item.firstPerson}</span> <span className="text-[#1A1B23B2] dark:text-gray-500">{item.text}</span> <span className="font-semibold">{item.secondPerson}</span>
      </h1>
      <div className="flex justify-between mt-3">
        <p className="text-[#1A1B23B2] dark:text-gray-500">{item.date}</p>
        <p className="text-[#1A1B23B2] dark:text-gray-500">{item.time}</p>
      </div>
    </div>
  );
}
