import { useState, useRef, useEffect } from "react";

type FadeInSectionProps = {
  children: React.ReactNode; // Type for children
  fadeDistance?: number; // Optional fadeDistance prop
};

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  fadeDistance = 300,
}) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null); // Explicitly typed ref

  const checkVisibility = () => {
    if (!domRef.current) return;

    const topPosition = domRef.current.getBoundingClientRect().top;
    const triggerPosition = window.innerHeight - fadeDistance;
    if (topPosition < triggerPosition) {
      setVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
    return () => window.removeEventListener("scroll", checkVisibility);
  }, [fadeDistance]);

  return (
    <div
      className={`fade-in-section ${
        isVisible ? "is-visible" : ""
      } border-t border-solid border-slate-300 border-l-0 border-r-0 border-b-0 `}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
