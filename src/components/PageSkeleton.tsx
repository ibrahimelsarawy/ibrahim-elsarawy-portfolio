import { Skeleton } from "@/components/ui/skeleton";

export function PageSkeleton() {
  return (
    <div className="min-h-screen">
      <Skeleton className="fixed top-0 left-0 right-0 h-16 z-50 rounded-none" />

      <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 pt-20">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-16 w-80 max-w-full" />
        <Skeleton className="h-8 w-64 max-w-full" />
        <Skeleton className="h-20 w-[32rem] max-w-full" />
        <div className="flex gap-4">
          <Skeleton className="h-12 w-36" />
          <Skeleton className="h-12 w-36" />
        </div>
      </div>

      <div className="section-padding container-custom space-y-16">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="space-y-6">
            <Skeleton className="h-8 w-48 mx-auto" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(3)].map((_, j) => (
                <Skeleton key={j} className="h-64 rounded-2xl" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
