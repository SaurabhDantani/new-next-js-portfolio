"use client"
import { useActiveSectionContext } from "./active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";
// import type { SectionName } from "./active-section-context";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
