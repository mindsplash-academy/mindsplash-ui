"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

export default function PrimaryButton({
  content,
  className,
}: {
  content: string;
  className?: string;
  handleAction?: () => void;
}) {
  const handleAction = () => {
    // Define the action to be performed on button click
    console.log("Button clicked:", content);
  };
  return (
    <Button
      type="button"
      className={`group ${className}`}
      onClick={handleAction}
    >
      {content}
      <div className="self-center group-hover:opacity-100 right-4 h-5 w-5 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 ease-out transform group-hover:translate-x-1">
        <ChevronRight className="text-foreground" />
      </div>
    </Button>
  );
}
