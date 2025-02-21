"use client";

import Header from "./components/Header";
import Tasks from "./components/Tasks";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-stretch">
      <Header />
      <button className="bg-[#1E6F9F] w-[736px] h-[52px] gap-2 rounded-lg font-bold self-center -mt-[26px] text-white flex justify-center items-center">
        <span>Create Task</span>
      </button>
      <Tasks />
    </div>
  );
}
