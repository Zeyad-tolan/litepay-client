import AgentsMain from "@/src/app/ui/pages/dashboard/settingsPage/Agents/AgentsMain";
import ExchangeMain from "@/src/app/ui/pages/dashboard/settingsPage/Exchange/ExchangeMain";
import PaymentsMain from "@/src/app/ui/pages/dashboard/settingsPage/Payments/PaymentsMain";
import RolesMain from "@/src/app/ui/pages/dashboard/settingsPage/Roles/RolesMain";
import TemplatesMain from "@/src/app/ui/pages/dashboard/settingsPage/TemplatesSection/TemplatesMain";
import WorkingHours from "@/src/app/ui/pages/dashboard/settingsPage/WorkingHours/WorkingHours";
import SideBarDashboard from "@/src/app/ui/pages/dashboard/SideBarDashboard";

export default function Settings() {
  return (
    <section className='m-5 min-h-screen flex gap-2'>
      <SideBarDashboard />
      <div className="container mx-auto p-5 min-h-screen rounded-lg bg-[#E8E8E8] dark:bg-primaryDark text-black dark:text-secondaryDark transition-all duration-300">
        <WorkingHours />
        <ExchangeMain />
        <PaymentsMain />
        <RolesMain />
        <AgentsMain />
        <TemplatesMain />
      </div>
    </section>
  );
}