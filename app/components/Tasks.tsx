import { useState } from "react";
import { Task } from "../types";

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const numCompleted = tasks.filter((task) => task.completed).length;

  return (
    <div className="flex flex-col items-center t-[66px]">
      <div className="flex justify-between w-[736px] gap-2">
        <span className="text-[#4EA8DE]">Tasks</span>
        <span className="text-[#4EA8DE]">Completed</span>
      </div>


    </div>
  );
}