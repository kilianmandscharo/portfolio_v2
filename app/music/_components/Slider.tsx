import {
  MouseEvent as ReactMouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";

interface Props {
  min: number;
  max: number;
  value: number;
  onValueChange: (val: number) => void;
}

const containerPadding = 12;

export default function Slider({ min, max, value, onValueChange }: Props) {
  const [clicked, setClicked] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const containerWidth = containerRef.current?.clientWidth ?? 0;
  const containerOffsetLeft = containerRef.current?.offsetLeft ?? 0;
  const barWidth = Math.max(0, containerWidth - containerPadding * 2);

  const pos = max === 0 ? 0 : (value / max) * barWidth;

  const handleMouseMove = (e: MouseEvent) => {
    if (!clicked) return;

    const mouseXPosition = e.clientX - containerOffsetLeft - containerPadding;
    const val = (max * mouseXPosition) / barWidth;
    onValueChange(Math.max(min, Math.min(val, max)));
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [clicked]);

  const handleClick = (e: ReactMouseEvent<HTMLDivElement>) => {
    const mouseXPosition = e.clientX - containerOffsetLeft - containerPadding;
    onValueChange((max * mouseXPosition) / barWidth);
  };

  return (
    <div
      className="w-full relative h-6 flex items-center p-3"
      ref={containerRef}
    >
      <div
        className="w-full h-2 bg-orange-400 rounded-xl cursor-pointer"
        onClick={handleClick}
      />
      <div
        className="h-2 bg-blue-400 rounded-xl pointer-events-none absolute left-3"
        style={{
          width: pos,
        }}
      />
      <div
        className={`w-6 h-6 rounded-full bg-blue-400 absolute`}
        style={{ left: pos }}
        onMouseDown={() => setClicked(true)}
        onMouseUp={() => setClicked(false)}
      />
    </div>
  );
}
