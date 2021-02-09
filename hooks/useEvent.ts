import { useEffect } from "react";

export default function useEvent<T extends keyof WindowEventMap>(
  event: T,
  handler: (e?: WindowEventMap[T]) => void,
  options?: { initCallback?: boolean },
) {
  useEffect(() => {
    if (options?.initCallback) {
      handler();
    }
    window.addEventListener(event, handler);
    return () => window.removeEventListener(event, handler);
  }, [event, handler, options?.initCallback]);
}
