"use client"
import { Repositories } from "@/components/repositories";
import { SideNav } from "@/components/side-nav";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
    <SideNav className="hidden md:flex" />
    <main className="flex-1">
      <Repositories />
    </main>
  </div>
  );
}
