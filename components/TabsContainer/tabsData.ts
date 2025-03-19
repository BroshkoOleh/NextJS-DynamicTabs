// tabsData.ts
export interface Tab {
  id: string;
  title: string;
  icon: string;
  isPinned: boolean;
  isActive: boolean;
}

export const tabs: Tab[] = [
  {
    id: "1",
    title: "Lagerverwaltung",
    icon: "/icons/lagerverwaltung.svg",
    isPinned: false,
    isActive: false,
  },
  {
    id: "2",
    title: "Dashboard",
    icon: "/icons/fi-rs-apps.svg",
    isPinned: false,
    isActive: false,
  },
  { id: "3", title: "Banking", icon: "/icons/fi-rs-bank.svg", isPinned: false, isActive: false },
  {
    id: "4",
    title: "Telefonie",
    icon: "/icons/fi-rs-phone-call.svg",
    isPinned: false,
    isActive: false,
  },
  {
    id: "5",
    title: "Accounting",
    icon: "/icons/fi-rs-user-add.svg",
    isPinned: false,
    isActive: false,
  },
  { id: "6", title: "Verkauf", icon: "/icons/fi-rs-shop.svg", isPinned: false, isActive: false },
  {
    id: "7",
    title: "Statistik",
    icon: "/icons/fi-rs-chart-pie.svg",
    isPinned: false,
    isActive: false,
  },
  {
    id: "8",
    title: "Post Office",
    icon: "/icons/post-office.svg",
    isPinned: false,
    isActive: false,
  },
  {
    id: "9",
    title: "Administration",
    icon: "/icons/administration.svg",
    isPinned: false,
    isActive: false,
  },
  { id: "10", title: "Help", icon: "/icons/help.svg", isPinned: false, isActive: false },
  {
    id: "11",
    title: "Warenbestand",
    icon: "/icons/warenbestand.svg",
    isPinned: false,
    isActive: false,
  },
  {
    id: "12",
    title: "Auswahllisten",
    icon: "/icons/auswahllisten.svg",
    isPinned: false,
    isActive: false,
  },
  { id: "13", title: "Einkauf", icon: "/icons/einkauf.svg", isPinned: false, isActive: false },
  { id: "14", title: "Rechn", icon: "/icons/rechn.svg", isPinned: false, isActive: false },
];
