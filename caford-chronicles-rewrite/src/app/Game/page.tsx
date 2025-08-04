"use client";

import TopBar from "@/components/GameUI/TopBar";
import Sidebar from "@/components/GameUI/Sidebar";
import MainArea from "@/components/GameUI/MainArea";
import BottomBar from "@/components/GameUI/BottomBar";

export default function Game() {
  return (
    <div className="min-h-screen bg-background text-foreground font-vt flex flex-col">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainArea />
      </div>
      <BottomBar />
    </div>
  );
}
