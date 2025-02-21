"use client";

import { useRouter } from "next/navigation";
import Button from "./components/Button";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-stretch">
      <Header />
      <div className="flex flex-col -mt-[26px] w-[736px] self-center">
        <Button title="Create Task" onClick={() => { router.push("/create-task") }} />
      </div>
      <Tasks />
    </div>
  );
}
