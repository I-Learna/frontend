import { useEffect, useRef } from "react";

/**
 * A custom useEffect hook that only triggers on updates, not on initial mount
 * @param effect - The effect callback function to run on updates
 * @param dependencies - The array of dependencies for the effect
 */
export default function useUpdateEffect(
  effect: () => void | (() => void | undefined),
  deps: React.DependencyList = []
): void {
  let isFirstRender = true;

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }

    return effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
