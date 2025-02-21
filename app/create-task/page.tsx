"use client";

import Link from "next/link";
import Header from "../components/Header";
import Image from "next/image";
import Button from "../components/Button";

export default function EditTask() {
  return (
    <div className="min-h-screen flex flex-col items-stretch">
      <Header />
      <div className="flex flex-col mt-[91px] gap-12 w-[736px] self-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/arrow-left.svg" alt="back" width={24} height={24} />
        </Link>
        <div></div>
        <Button title="Add Task" onClick={() => {}} />
      </div>
    </div>
  );
}