import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, BookOpen, Bookmark, Info, MessageSquare, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { SearchBar } from "./SearchBar";
import { subjects } from "@/lib/data/subjects";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <BookOpen className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold text-foreground">CivilPrep</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1">
                Subjects <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {subjects.map((subject) => (
                <DropdownMenuItem key={subject.id} asChild>
                  <Link to={`/subject/${subject.id}`} className="flex items-center gap-2">
                    <span>{subject.icon}</span>
                    <span>{subject.name}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" asChild>
            <Link to="/bookmarks" className="gap-2">
              <Bookmark className="h-4 w-4" />
              Bookmarks
            </Link>
          </Button>

          <Button variant="ghost" asChild>
            <Link to="/about" className="gap-2">
              <Info className="h-4 w-4" />
              About
            </Link>
          </Button>

          <Button variant="ghost" asChild>
            <Link to="/feedback" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Feedback
            </Link>
          </Button>
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-3">
          <SearchBar />
          <ThemeToggle />
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-6 py-6">
                <SearchBar onSelect={() => setMobileMenuOpen(false)} />
                
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Subjects
                  </h3>
                  {subjects.map((subject) => (
                    <Link
                      key={subject.id}
                      to={`/subject/${subject.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground hover:bg-accent transition-colors"
                    >
                      <span className="text-xl">{subject.icon}</span>
                      <span>{subject.name}</span>
                    </Link>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    More
                  </h3>
                  <Link
                    to="/bookmarks"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground hover:bg-accent transition-colors"
                  >
                    <Bookmark className="h-5 w-5" />
                    <span>Bookmarks</span>
                  </Link>
                  <Link
                    to="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground hover:bg-accent transition-colors"
                  >
                    <Info className="h-5 w-5" />
                    <span>About</span>
                  </Link>
                  <Link
                    to="/feedback"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground hover:bg-accent transition-colors"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>Feedback</span>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
