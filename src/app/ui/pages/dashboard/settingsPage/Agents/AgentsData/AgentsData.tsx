import AgentsDataItem from "../AgentsDataItem";

export default function AgentsData() {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-3 gap-5">
        {
          Array.from({length: 12}).map((_,index)=>(
            <AgentsDataItem key={index} id={index} name={`Ahmed Mostafa`} />
          ))
        }
      </div>
    </div>
  );
}
