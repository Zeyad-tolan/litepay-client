"use client";
import SaveChangeButton from "../../SaveChangeButton";
import UndoChangeButton from "../../UndoChangeButton";
import FormItem from "../FormItem";

export default function FormMain() {
  const data = ["view-details","mange-affiliates","users-only","make-card","make-user","view-card","edit-working","view-logs","manage-req","calculator","edit-agent","view-req","view-analy","edit-commision","user-action","view-setting","manage-payment"]
  return (
    <div>
      <form>
        <div className="grid grid-cols-3 gap-5">
          {data.map((item,index)=>{
            return <FormItem key={index} title={item} name={item} value={false} />
          })}
        </div>
        <div className="flex gap-5 justify-center items-center my-8">
          <UndoChangeButton />
          <SaveChangeButton />
        </div>
      </form>
    </div>
  );
}
