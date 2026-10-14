import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "../ui/use-toast";
import { themeDisclaimers } from "@/data/constants";

export default function FunnyThemeToggle({
  className,
}: {
  className?: string;
}) {
  const { setTheme, theme } = useTheme();
  const [counter, setCounter] = React.useState({ dark: 0, light: 0 });
  const { toast } = useToast();

  const toggleTheme = async (newTheme: string, event?: React.MouseEvent) => {
    // @ts-ignore
    if (!document.startViewTransition || !event) {
      setTheme(newTheme);
      return;
    }

    const { top, left, width, height } = (
      event.target as HTMLElement
    ).getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    // @ts-ignore
    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme);
      });
    });

    await transition.ready;

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  const handleClick = (e: React.MouseEvent) => {
    const isDark = theme === "dark";
    const nextTheme = isDark ? "light" : "dark";

    if (nextTheme === "light") {
      const description =
        themeDisclaimers.light[counter.light % themeDisclaimers.light.length];
      setCounter((prev) => ({ ...prev, light: prev.light + 1 }));
      toast({
        description,
        className: "top-0 right-0 flex fixed md:max-w-[420px] md:top-16 md:right-4",
      });
    } else {
      const description =
        themeDisclaimers.dark[counter.dark % themeDisclaimers.dark.length];
      setCounter((prev) => ({ ...prev, dark: prev.dark + 1 }));
      toast({
        description,
        className: "top-0 right-0 flex fixed md:max-w-[420px] md:top-16 md:right-4",
      });
    }

    toggleTheme(nextTheme, e);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn("border-none bg-transparent relative", className)}
      onClick={handleClick}
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
