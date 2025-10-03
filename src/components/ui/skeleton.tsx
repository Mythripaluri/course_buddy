import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={cn("rounded-md bg-skeleton animate-shimmer", className)} 
      style={{
        backgroundImage: 'linear-gradient(90deg, transparent, hsl(var(--skeleton) / 0.5), transparent)',
        backgroundSize: '200% 100%'
      }}
      {...props} 
    />
  );
}

export { Skeleton };
