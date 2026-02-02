import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout";
import { TopicCard } from "@/components/TopicCard";
import { Button } from "@/components/ui/button";
import { getSubjectById } from "@/lib/data/subjects";
import { getTopicsBySubject } from "@/lib/data/topics";

export default function SubjectPage() {
  const { subjectId } = useParams<{ subjectId: string }>();
  const subject = subjectId ? getSubjectById(subjectId) : undefined;
  const topics = subjectId ? getTopicsBySubject(subjectId) : [];

  if (!subject) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Subject Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The subject you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/">Go Home</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <section className="bg-accent py-10 md:py-16">
        <div className="container">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link to="/" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-background text-4xl shadow-sm">
              {subject.icon}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground md:text-4xl">
                {subject.name}
              </h1>
              <p className="mt-2 text-muted-foreground">
                {subject.description}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {topics.length} topics available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics List */}
      <section className="py-10 md:py-16">
        <div className="container">
          <h2 className="mb-6 text-xl font-semibold text-foreground">
            All Topics
          </h2>
          <div className="space-y-3">
            {topics.map((topic, index) => (
              <TopicCard key={topic.id} topic={topic} index={index + 1} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
