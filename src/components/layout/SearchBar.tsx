import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearch, SearchResult } from "@/hooks/useSearch";

interface SearchBarProps {
  onSelect?: () => void;
}

export function SearchBar({ onSelect }: SearchBarProps) {
  const { query, setQuery, results } = useSearch();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (result: SearchResult) => {
    if (result.type === "subject") {
      navigate(`/subject/${result.id}`);
    } else {
      navigate(`/topic/${result.subjectId}/${result.id}`);
    }
    setQuery("");
    setIsOpen(false);
    onSelect?.();
  };

  return (
    <div ref={containerRef} className="relative w-full md:w-64">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search topics..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="pl-9 pr-9"
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full w-9 hover:bg-transparent"
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 max-h-80 overflow-auto rounded-md border bg-popover p-1 shadow-lg">
          {results.map((result) => (
            <button
              key={`${result.type}-${result.id}`}
              onClick={() => handleSelect(result)}
              className="flex w-full flex-col items-start gap-1 rounded-sm px-3 py-2 text-left hover:bg-accent transition-colors"
            >
              <div className="flex items-center gap-2">
                {result.type === "subject" && (
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                    Subject
                  </span>
                )}
                {result.type === "topic" && result.subjectName && (
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded">
                    {result.subjectName}
                  </span>
                )}
                <span className="font-medium text-sm">{result.title}</span>
              </div>
              <span className="text-xs text-muted-foreground line-clamp-1">
                {result.description}
              </span>
            </button>
          ))}
        </div>
      )}

      {isOpen && query && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 rounded-md border bg-popover p-4 shadow-lg text-center text-sm text-muted-foreground">
          No results found for "{query}"
        </div>
      )}
    </div>
  );
}
