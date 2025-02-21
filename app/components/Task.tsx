import { Task as TaskType} from "../types";
import Image from "next/image";

export default function Task({ task }: { task: TaskType }) {
  return (
    <div className="flex flex-row items-center bg-[#262626] rounded-lg border border-[#333333] p-4 gap-3">
      {task.completed ? (
        <Image src="/completed-check.svg" alt="check" width={24} height={24} />
      ) : (
        <Image src="/check.svg" alt="circle" width={24} height={24} />
      )}
      <span className={`${task.completed ? "line-through text-[#808080]" : ""} text-sm w-full`}>{task.title}</span>
      <Image src="/trash.svg" alt="delete" width={24} height={24} />
    </div>
  );
}