import { useEffect, useRef } from "react";

export default function useIsFirstRender(): boolean {
  const isMountRef = useRef(true);
  useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
}
