export type OneTdNewCardReqProps = {
  value: string;
};

export default function OneTdNewCardReq({ value }: OneTdNewCardReqProps) {
  return <td className={`font-normal py-3 text-center`}>{value}</td>;
}
