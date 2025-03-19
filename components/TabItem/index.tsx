"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./TabItem.module.scss";

interface Tab {
  id: string;
  title: string;
  icon: string;
  isPinned: boolean;
  isActive: boolean;
}

export default function TabItem({ tab }: { tab: Tab }) {
  const router = useRouter();
  const tabUrl = `/tabs/${encodeURIComponent(tab.title)}`;

  const handleClick = () => {
    router.push(tabUrl);
  };

  return (
    <div className={styles.tab} onClick={handleClick}>
      <Image
        src={tab.icon}
        alt={`${tab.title} icon`}
        width={16}
        height={16}
        className={styles.icon}
      />
      <span className={styles.title}>{tab.title}</span>
    </div>
  );
}
