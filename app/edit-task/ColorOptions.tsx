export default function ColorOptions({ selectedColor, onSelectColor }: { selectedColor: string, onSelectColor: (color: string) => void }) {
  const colorMap: { [key: string]: string } = {
    red: "#FF3B30",
    orange: "#FF9500",
    yellow: "#FFCC00",
    green: "#34C759",
    blue: "#007AFF",
    indigo: "#5856D6",
    purple: "#AF52DE",
    pink: "#FF2D55",
    brown: "#A2845E",
  };

  return (
    <div className="flex flex-row items-start gap-4">
      {Object.keys(colorMap).map((color) => (
        <div key={color} className={`rounded-full w-[52px] h-[52px] cursor-pointer`}
          style={{ backgroundColor: colorMap[color], border: color === selectedColor ? "2px solid #FFFFFF" : "" }}
          onClick={() => onSelectColor(color)}>
        </div>
      ))}
    </div>
  );
}
