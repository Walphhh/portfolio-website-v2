import { ReactNode } from "react";

interface FullscreenProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Fullscreen = ({ children, className, id }: FullscreenProps) => {
  return (
    <div id={id} className={`w-full min-h-dvh ${className}`}>
      {children}
    </div>
  );
};

export default Fullscreen;
