"use client";

import Link from "next/link";
import Header from "../components/Header";
import Image from "next/image";
import Button from "../components/Button";
import { useState } from "react";
import ColorOptions from "./ColorOptions";

export default function EditTask() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-stretch">
      <Header />
      <form className="flex flex-col my-[91px] gap-12 w-[736px] self-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/arrow-left.svg" alt="back" width={24} height={24} />
        </Link>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <label className="text-[#4EA8DE] font-bold text-sm" htmlFor="title">Title</label>
            <input className="bg-[#262626] rounded-lg border border-[#333333] p-4 w-full text-sm"
              placeholder="Ex. Brush your teeth"
              type="text" id="title"
              value={title} onChange={(e) => { setTitle(e.target.value) }} />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-[#4EA8DE] font-bold text-sm" htmlFor="color">Color</label>
            <ColorOptions selectedColor={color} onSelectColor={(color) => { setColor(color) }} />
          </div>
        </div>

        <Button title="Add Task" onClick={() => { }} />
      </form>
    </div>
  );
}