"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./TabsContainer.module.scss";
import TabItem from "../../components/TabItem";

interface Tab {
  id: string;
  title: string;
  icon: string;
  isPinned: boolean;
  isActive: boolean;
}

export default function TabsContainer({
  onHiddenTabsChange,
}: {
  onHiddenTabsChange: (tabs: Tab[]) => void;
}) {
  const tabs: Tab[] = [
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

  const [visibleTabs, setVisibleTabs] = useState<Tab[]>(tabs);
  const [hiddenTabs, setHiddenTabs] = useState<Tab[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const DROPDOWN_WIDTH = 36; // Ширина DropdownMenu
  const GAP_BETWEEN = 8; // Відступ між TabsContainer і DropdownMenu

  const updateVisibleTabs = () => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const availableWidth = containerWidth - DROPDOWN_WIDTH - GAP_BETWEEN;

    const newVisibleTabs: Tab[] = [];
    const newHiddenTabs: Tab[] = [];
    let totalWidth = 0;

    tabs.forEach((tab) => {
      const tabElement = container.querySelector(`[data-tab-id="${tab.id}"]`) as HTMLElement;
      if (tabElement) {
        const tabWidth = tabElement.offsetWidth || 0;
        if (totalWidth + tabWidth <= availableWidth) {
          totalWidth += tabWidth;
          newVisibleTabs.push(tab);
        } else {
          newHiddenTabs.push(tab);
        }
      }
    });

    setVisibleTabs(newVisibleTabs);
    setHiddenTabs(newHiddenTabs);
    onHiddenTabsChange(newHiddenTabs);
  };

  useEffect(() => {
    const initializeTabs = () => {
      requestAnimationFrame(() => {
        updateVisibleTabs();
      });
    };

    initializeTabs();
    window.addEventListener("resize", updateVisibleTabs);
    return () => window.removeEventListener("resize", updateVisibleTabs);
  }, [onHiddenTabsChange]);

  return (
    <div className={styles.tabsContainer} ref={containerRef}>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          data-tab-id={tab.id}
          style={{ display: visibleTabs.includes(tab) ? "block" : "none" }}
        >
          <TabItem tab={tab} />
        </div>
      ))}
    </div>
  );
}
