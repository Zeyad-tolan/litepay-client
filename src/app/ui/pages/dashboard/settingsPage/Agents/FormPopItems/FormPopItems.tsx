import FormItem from "../../FormPopAgentsATemplate/FormItem";

export default function FormPopItems() {
  const data = ["view-details","mange-affiliates","users-only","make-card","make-user","view-card","edit-working","view-logs","manage-req","calculator","edit-agent","view-req","view-analy","edit-commision","user-action","view-setting","manage-payment"]
  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        {data.map((item,index)=>{
          return <FormItem key={index} title={item} name={`${item}${index}`} value={false} />
        })}
      </div>
    </>
  );
}
