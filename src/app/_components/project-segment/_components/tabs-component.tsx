"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface TabItem {
  label: string;
  content: React.ReactNode;
  value: string;
}

interface AdminTabsProps {
  tabs: TabItem[];
}

export default function TabsDemo({ tabs }: AdminTabsProps) {
  const defaultValue = tabs.length > 0 ? tabs[0].value : "";

  return (
    <Tabs defaultValue={defaultValue} className={`w-full max-w-full`}>
      <TabsList>
        {tabs.map(({ label, value }) => (
          <TabsTrigger key={value} value={value}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map(({ value, content }) => (
        <TabsContent key={value} value={value} className="">
          {content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
