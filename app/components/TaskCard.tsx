import { useRouter } from "next/navigation";
import { Task as TaskType} from "../types";
import Image from "next/image";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function TaskCard({ task, tasks, setTasks }: { task: TaskType, tasks: TaskType[], setTasks: any }) {
  const router = useRouter();

  const completeTask = async () => {
    try {
      const updatedTask = { ...task, completed: !task.completed };
      await axios.put(`${API_URL}/tasks/${task.id}`, updatedTask);
      setTasks(tasks.map((t) => (t.id === task.id ? updatedTask : t)));
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const deleteTask = async () => {
    try {
      await axios.delete(`${API_URL}/tasks/${task.id}`);
      setTasks(tasks.filter((t) => t.id !== task.id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };
  
  return (
    <div className="flex flex-row items-center bg-[#262626] rounded-lg border border-[#333333] p-4 gap-3">
      <Image className="cursor-pointer"
        src={task.completed ? "/completed-check.svg" : "/check.svg"}
        alt="check" width={24} height={24} 
        onClick={completeTask}/>

      <span className={`${task.completed ? "line-through text-[#808080]" : ""} text-sm w-full cursor-pointer`}
        onClick={() => { router.push(`/edit-task?id=${task.id}`)}}>{task.title}</span>

      <Image className="cursor-pointer" src="/trash.svg" alt="delete" width={24} height={24} onClick={deleteTask}/>
    </div>
  );
}