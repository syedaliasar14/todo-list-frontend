import Image from "next/image";

export default function Button({ title, onClick }: { title: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="bg-[#1E6F9F] w-full h-[52px] gap-2 rounded-lg font-bold self-center text-white flex justify-center items-center">
      <span>{title}</span>
      <Image src="/plus.svg" alt="plus" width={16} height={16} />
    </button>
  );
}
