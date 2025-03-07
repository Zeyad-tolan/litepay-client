"use client"
import SideBarDashboard from "../../SideBarDashboard";
import HeaderCalender from "../../requestPage/layout/HeaderCalender";

export default function HeaderAnalysis() {
  return (
    <div className="container mx-auto py-4 flex gap-4 items-center">
      <SideBarDashboard />
      <div className="flex gap-3">
        <HeaderCalender />
      </div>
    </div>
  );
}
