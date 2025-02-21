import Image from "next/image";

export default function Button({ title, type, onClick }: { title: string; type: string, onClick: () => void }) {
  return (
    <button onClick={onClick} className="bg-[#1E6F9F] w-full h-[52px] gap-2 rounded-lg font-bold self-center text-sm flex justify-center items-center">
      <span>{title}</span>
      {type === "add" && <Image src="/plus.svg" alt="plus" width={16} height={16} />}
      {type === "save" && <Image src="/mdi_check-bold.svg" alt="save" width={20} height={20} />}
    </button>
  );
}
