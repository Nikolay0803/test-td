import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto max-w-[1200px]">
      {children}
    </div>
  );
}
