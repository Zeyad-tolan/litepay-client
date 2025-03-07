import FormLogsPage from "@/src/app/ui/pages/dashboard/LogsPage/FormLogsPage";
import ShowDataLogs from "@/src/app/ui/pages/dashboard/LogsPage/ShowDataLogs";

export default function Logs() {
  return (
    <section className='container mx-auto px-4 min-h-screen bg-white dark:bg-primaryDark text-black dark:text-secondaryDark transition-all duration-300'>
      <FormLogsPage />
      <div className="w-full">
        <ShowDataLogs />
      </div>
    </section>
  );
}