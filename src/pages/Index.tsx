import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, GraduationCap, Target, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import { SubjectCard } from "@/components/SubjectCard";
import { subjects } from "@/lib/data/subjects";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent to-background py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              100% Free • No Login Required
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              First-Year Civil Engineering
              <span className="text-primary"> Made Simple</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Master core subjects with easy explanations, important formulas, and curated Tamil YouTube videos. Study smarter, not harder.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="#subjects" className="gap-2">
                  Start Learning <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 border-b">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold">Simple Explanations</h3>
              <p className="text-sm text-muted-foreground">
                Mixed Tamil-English approach for easy understanding
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold">Key Formulas</h3>
              <p className="text-sm text-muted-foreground">
                Important formulas organized for quick revision
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold">Tamil Videos</h3>
              <p className="text-sm text-muted-foreground">
                Curated YouTube videos for each concept
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold">Bookmark Topics</h3>
              <p className="text-sm text-muted-foreground">
                Save topics for quick access anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section id="subjects" className="py-12 md:py-16">
        <div className="container">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
              Choose Your Subject
            </h2>
            <p className="text-muted-foreground">
              All 4 core subjects covered with topic-wise study materials
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {subjects.map((subject) => (
              <SubjectCard key={subject.id} subject={subject} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-accent">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
              Ready to Start Studying?
            </h2>
            <p className="mb-6 text-muted-foreground">
              Pick any subject and begin your learning journey. No registration required.
            </p>
            <Button size="lg" asChild>
              <a href="#subjects" className="gap-2">
                Browse Subjects <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
