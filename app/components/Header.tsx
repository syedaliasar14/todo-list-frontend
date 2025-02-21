import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#0D0D0D] flex justify-center items-center h-[200px]">
      <div className="flex items-center gap-3 font-black text-[40px]">
        <Image className="self-center mt-1"
          src="/rocket.svg" alt="rocket" width={22} height={36} />
        <span className="text-[#4EA8DE]">Todo</span>
        <span className="text-[#5E60CE]">App</span>
      </div>
    </header>
  );
}

