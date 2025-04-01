"use client";

import { useEffect, useState } from "react";
export default function CountDownBar() {
  const [width, setWidth] = useState(100);

  useEffect(() => {
    if (width === 0) {
      return; // Detener al llegar a cero
    }
    const interval = setInterval(() => {
      setWidth((prevWidth) => {
        if (prevWidth <= 0) {
          clearInterval(interval); // Detener el intervalo cuando llegue a 0
          return 0;
        }
        return prevWidth - 1; // Disminuir el width en 1% por cada intervalo
      });
    }, 100);
    return () => clearInterval(interval);
  }, [width]);
  return (
    <>
      <div className="w-full bg-withe h-24 border-solid border-2 border-[#E63946] rounded-full overflow-hidden">
        <div style={{ width: width + "%" }} className="bg-[#E63946] h-24"></div>
      </div>
    </>
  );
}
