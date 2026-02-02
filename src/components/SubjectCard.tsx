import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Subject } from "@/lib/types";

interface SubjectCardProps {
  subject: Subject;
}

export function SubjectCard({ subject }: SubjectCardProps) {
  return (
    <Link to={`/subject/${subject.id}`}>
      <Card className="group h-full transition-all hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
        <CardContent className="flex flex-col p-6">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-3xl">
            {subject.icon}
          </div>
          <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {subject.name}
          </h3>
          <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-2">
            {subject.description}
          </p>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{subject.topicCount} topics</span>
            <span className="flex items-center gap-1 font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              Explore <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
