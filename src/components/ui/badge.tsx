import { cn } from "@/lib/utils";

interface BadgeProps extends React.ComponentProps<"span"> {
  variant?: "default" | "secondary" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        variant === "default" &&
          "bg-primary/10 text-primary border border-primary/20",
        variant === "secondary" &&
          "bg-secondary text-secondary-foreground",
        variant === "outline" &&
          "border border-border text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
