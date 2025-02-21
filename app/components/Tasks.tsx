import { useEffect, useState } from "react";
import { Task as TaskType } from "../types";
import TaskCard from "./TaskCard";
import Image from "next/image";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Tasks() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const numCompleted = tasks.filter((task) => task.completed).length;
  const [loading, setLoading] = useState(true);

  // Fetch tasks as soon as the component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/tasks`);
        setTasks(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="flex flex-col items-center my-[66px]">
      <div className="flex justify-between w-[736px] gap-2">
        <span className="text-[#4EA8DE] font-bold text-sm flex justify-center items-center gap-3">
          Tasks
          <span className="text-[#D9D9D9] bg-[#333333] rounded-full px-2 pt-[2px]">{tasks.length}</span>
        </span>
        <span className="text-[#8284FA] font-bold text-sm flex justify-center items-center gap-3">
          Completed
          <span className="text-[#D9D9D9] bg-[#333333] rounded-full px-2 pt-[2px]">{numCompleted} of {tasks.length}</span>
        </span>
      </div>

      <div className="w-[736px] mt-6 flex flex-col gap-3">
        {loading ? (
          <div className="flex justify-center items-center mt-16 text-sm text-[#808080] font-bold">Loading...</div>
        ) : (
          tasks.length === 0 ? (
            <div className="flex flex-col items-center border-t border-t-[#333333] pt-16 gap-4">
              <Image src="/Clipboard.svg" alt="clipboard" width={56} height={56} />
              <div className="text-base text-[#808080] h-[66px] flex flex-col justify-between items-center">
                <div className="font-bold">You don&apos;t have any tasks registered yet.</div>
                <div>Create tasks and organize your to-do items.</div>
              </div>
            </div>
          ) : (
            tasks.map((task) => (
              <TaskCard key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
            ))))
        }
      </div>

    </div>
  );
}