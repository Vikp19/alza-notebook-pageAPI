import { useRef } from "react";

export function useSwipe(onLeft: () => void, onRight: () => void) {
  const startX = useRef<number | null>(null);

  function onTouchStart(e: React.TouchEvent) {
    startX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (startX.current == null) return;

    const delta = e.changedTouches[0].clientX - startX.current;

    if (Math.abs(delta) > 50) {
      if (delta < 0) {
        onLeft();
      } else {
        onRight();
      }
    }

    startX.current = null;
  }

  return { onTouchStart, onTouchEnd };
}
