import { useEffect, useState } from "react";
import { Task as TaskType } from "../types";
import Task from "./Task";
import Image from "next/image";

export default function Tasks() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const numCompleted = tasks.filter((task) => task.completed).length;

  // Fetch tasks as soon as the component mounts
  useEffect(() => {
    // fetch("/api/tasks")
    //   .then((res) => res.json())
    //   .then((data) => setTasks(data));
    setTasks([
      // { id: "1", title: "Task 1", color: "red", completed: false },
      // { id: "2", title: "Task 2", color: "green", completed: true },
      // { id: "3", title: "Task 3", color: "blue", completed: false },
    ]);
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
        {tasks.length === 0 ? (
          <div className="flex flex-col items-center border-t border-t-[#333333] pt-16 gap-4">
            <Image src="/Clipboard.svg" alt="clipboard" width={56} height={56} />
            <div className="text-base text-[#808080] h-[66px] flex flex-col justify-between items-center">
              <div className="font-bold">You don&apos;t have any tasks registered yet.</div>
              <div>Create tasks and organize your to-do items.</div>
            </div>
          </div>
        ) : (
          tasks.map((task) => (
            <Task key={task.id} task={task} />
          )))
        }
      </div>

    </div>
  );
}