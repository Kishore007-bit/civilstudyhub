import { Link } from "react-router-dom";
import { BookOpen, Heart } from "lucide-react";
import { subjects } from "@/lib/data/subjects";
export function Footer() {
  return <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <BookOpen className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold">CivilPrep</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Helping first-year Civil Engineering students study smarter with simple explanations and curated resources.
            </p>
          </div>

          {/* Subjects */}
          <div className="space-y-4">
            <h3 className="font-semibold">Subjects</h3>
            <ul className="space-y-2 text-sm">
              {subjects.map(subject => <li key={subject.id}>
                  <Link to={`/subject/${subject.id}`} className="text-muted-foreground hover:text-foreground transition-colors">
                    {subject.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/bookmarks" className="text-muted-foreground hover:text-foreground transition-colors">
                  My Bookmarks
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-muted-foreground hover:text-foreground transition-colors">
                  Send Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Credits */}
          <div className="space-y-4">
            <h3 className="font-semibold">Credits</h3>
            <p className="text-sm text-muted-foreground">
              All notes are original summaries. YouTube videos belong to their respective creators.
            </p>
            <p className="text-sm text-muted-foreground">
              No login required. 100% free to use.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-destructive fill-destructive" /> by Muthu Krishnan
          </p>
          <p className="mt-1">© 2026 CivilPrep. Free educational resource for Civil Engineering students.</p>
        </div>
      </div>
    </footer>;
}