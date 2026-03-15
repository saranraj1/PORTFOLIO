import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setTimeout(() => setRingPos({ x: e.clientX, y: e.clientY }), 50);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        className="custom-cursor hidden md:block"
        style={{ left: pos.x - 4, top: pos.y - 4 }}
      />
      <div
        className="cursor-ring hidden md:block"
        style={{ left: ringPos.x - 16, top: ringPos.y - 16 }}
      />
    </>
  );
};

export default CustomCursor;
