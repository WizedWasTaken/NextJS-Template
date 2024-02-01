"use client";

import React from "react";
import DarkModeButton from "@/components/ui/dark-mode-button";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center items-center">
      <h1 className="text-4xl">Ny Websidey App</h1>
      <div className="flex flex-row">
        <DarkModeButton />
      </div>
    </main>
  );
}
