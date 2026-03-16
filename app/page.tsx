"use client";

import { Welcome } from "@/components/home/Welcome";

export default function Home() {
  return (
    <main className="container mx-auto"> 
      <section id="home" className="pt-28 pb-24 lg:pt-44 lg:pb-32">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full self-center md:px-4 lg:w-1/2">
            <Welcome />
          </div>
        </div>
      </section>
    </main>
  );
}