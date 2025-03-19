"use client";

import { useState } from "react";
import styles from "./DropdownMenu.module.scss";
import TabItem from "../TabItem";

interface Tab {
  id: string;
  title: string;
  icon: string;
  isPinned: boolean;
  isActive: boolean;
}

export default function DropdownMenu({ hiddenTabs }: { hiddenTabs: Tab[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.square} onClick={toggleDropdown}></div>
      {isOpen && hiddenTabs.length > 0 && (
        <div className={styles.dropdownMenu}>
          {hiddenTabs.map((tab) => (
            <TabItem key={tab.id} tab={tab} />
          ))}
        </div>
      )}
    </div>
  );
}
