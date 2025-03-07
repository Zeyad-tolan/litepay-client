import { AffiliateIcon, AnalysisIcon, CalculatorIcon, CardIcon, IconProps, LogsIcon, RequestsIcon, SettingIcon, UsersIcon } from "../icons/icons"

interface linksSideBarDashboardType {
    link: string,
    Icon: (props: IconProps) => JSX.Element,
    title: string
}

export const linksSideBarDashboard: linksSideBarDashboardType[] = [
    {
        link: "dashboard/requests/new-card?pageNo=1",
        Icon: RequestsIcon,
        title: "requests"
    },
    {
        link: "dashboard/users?pageNo=1",
        Icon: UsersIcon,
        title: "users"
    },
    {
        link: "dashboard/cards?pageNo=1",
        Icon: CardIcon,
        title: "cards"
    },
    {
        link: "dashboard/analysis",
        Icon: AnalysisIcon,
        title: "analysis"
    },
    {
        link: "dashboard/logs?pageNo=1",
        Icon: LogsIcon,
        title: "logs"
    },
    {
        link: "dashboard/settings",
        Icon: SettingIcon,
        title: "settings"
    },
    {
        link: "dashboard/affiliate",
        Icon: AffiliateIcon,
        title: "affiliate"
    },
    {
        link: "dashboard/calculator",
        Icon: CalculatorIcon,
        title: "calculator"
    },
]