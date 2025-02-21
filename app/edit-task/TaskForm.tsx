import Link from "next/link";
import Image from "next/image";
import Button from "../components/Button";
import ColorOptions from "./ColorOptions";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Task } from "../types";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function TaskForm() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // Fetch task if id is provided
  useEffect(() => {
    if (id) {
      const fetchTask = async () => {
        try {
          const { data }: any = await axios.get(`${API_URL}/tasks`)
          const task = data.find((task: Task) => task.id == id);

          if (task) {
            setTitle(task.title);
            setColor(task.color);
          }
        } catch (error) {
          console.error("Error fetching task:", error);
        }
      };

      fetchTask();
    }
  }, [id]);

  const submit = async (e?: any) => {
    e && e.preventDefault();

    setError("");
    if (!title) {
      setError("Please enter a title for the task.");
      return;
    } else if (!color) {
      setError("Please select a color for the task.");
      return;
    }

    try {
      if (id) {
        await axios.put(`${API_URL}/tasks/${id}`, { title, color });
      } else {
        await axios.post(`${API_URL}/tasks`, { title, color });
      }
      router.push("/");
    } catch (error) {
      console.error("Error creating task:", error);
      setError("An error occurred while creating the task. Please try again.");
    }
  };

  return (
    <form className="flex flex-col my-[91px] gap-12 w-[736px] self-center" onSubmit={(e) => { submit(e) }}>
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

      {error && <div className="text-red-500 text-sm font-bold">{error}</div>}

      <Button
        title={id ? "Save" : "Add Task"}
        type={id ? "save" : "add"}
        onClick={() => submit()}
      />
    </form>
  );
}