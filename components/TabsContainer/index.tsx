"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./TabsContainer.module.scss";
import TabItem from "../../components/TabItem";
import { Tab, tabs } from "./tabsData";

export default function TabsContainer({
  onHiddenTabsChange,
}: {
  onHiddenTabsChange: (tabs: Tab[]) => void;
}) {
  const [visibleTabs, setVisibleTabs] = useState<Tab[]>(tabs);
  const [hiddenTabs, setHiddenTabs] = useState<Tab[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]); // Тип масиву рефів
  const DROPDOWN_WIDTH = 44;
  const GAP_BETWEEN = 8;

  const updateVisibleTabs = () => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const availableWidth = containerWidth - DROPDOWN_WIDTH - GAP_BETWEEN;

    const newVisibleTabs: Tab[] = [];
    const newHiddenTabs: Tab[] = [];
    let totalWidth = 0;

    tabs.forEach((tab, index) => {
      const tabElement = tabRefs.current[index];
      const tabWidth = tabElement ? tabElement.offsetWidth + GAP_BETWEEN : 0;
      if (totalWidth + tabWidth <= availableWidth) {
        totalWidth += tabWidth;
        newVisibleTabs.push(tab);
      } else {
        newHiddenTabs.push(tab);
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
      {visibleTabs.map((tab, index) => (
        <div
          key={tab.id}
          data-tab-id={tab.id}
          ref={(el) => {
            tabRefs.current[index] = el; // Присвоюємо без повернення значення
          }}
        >
          <TabItem tab={tab} />
        </div>
      ))}
    </div>
  );
}
