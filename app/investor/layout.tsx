import SidebarMenu from "@/components/molecule/sidebar";
import {
  HomeIcon,
  Card,
  Money,
  UserCircle,
} from "@/components/molecule/atoms/icons";
import { MenuLinksProps } from "@/types";

export const dashboard: MenuLinksProps[] = [
  {
    name: "home",
    link: "/investor/home",
    label: "Home",
    icon: <HomeIcon />,
  },
  {
    name: "account",
    link: "/investor/account",
    label: "Account",
    icon: <UserCircle />,
  },
  {
    name: "loans",
    link: "/investor/loans",
    label: "Loans",
    icon: <Money />,
  },
  {
    name: "subscription",
    link: "/investor/subscription",
    label: "Subscription",
    icon: <Card />,
  },
  {
    name: "pitches-investments",
    link: "/investor/pitches-investments",
    label: "Pitches and Investments",
    icon: <Card />,
    children: [
      {
        name: "ideas",
        link: "ideas",
        label: "Ideas",
      },
      {
        name: "investments",
        link: "investments",
        label: "Investments",
      },
    ],
  },
  {
    name: "subscriptiond",
    link: "/investor/subscription",
    label: "Subscriptionss",
    icon: <Card />,
  },
];
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen justify-between text-white">
      <SidebarMenu className="w-1/4 bg-blue-800" dashboard={dashboard} />
      <div className="w-3/4">{children}</div>
    </div>
  );
}
