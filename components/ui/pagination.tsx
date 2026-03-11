"use client";

import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-1.5 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          "px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",
          "border border-slate-300 dark:border-slate-700",
          currentPage === 1
            ? "opacity-40 cursor-not-allowed text-slate-400"
            : "text-slate-600 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer",
        )}
      >
        Prev
      </button>

      {getPages().map((page, i) =>
        typeof page === "string" ? (
          <span key={`dots-${i}`} className="px-2 text-slate-400 text-sm">
            …
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={cn(
              "w-8 h-8 rounded-lg text-sm font-medium transition-colors cursor-pointer",
              page === currentPage
                ? "bg-accent text-accent-foreground font-semibold"
                : "text-slate-600 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800",
            )}
          >
            {page}
          </button>
        ),
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          "px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",
          "border border-slate-300 dark:border-slate-700",
          currentPage === totalPages
            ? "opacity-40 cursor-not-allowed text-slate-400"
            : "text-slate-600 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer",
        )}
      >
        Next
      </button>
    </div>
  );
}
