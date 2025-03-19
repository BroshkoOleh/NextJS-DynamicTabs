"use client";

import { useState } from "react";
import TabsContainer from "../components/TabsContainer";
import DropdownMenu from "../components/DropdownMenu";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [hiddenTabs, setHiddenTabs] = useState<any[]>([]);

  return (
    <html lang="en">
      <body>
        <header>
          <TabsContainer onHiddenTabsChange={setHiddenTabs} />
          <DropdownMenu hiddenTabs={hiddenTabs} />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
