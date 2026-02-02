import { Link } from "react-router-dom";
import { BookOpen, Heart, GraduationCap, Users, Shield, Mail } from "lucide-react";
import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-accent py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <BookOpen className="h-8 w-8" />
            </div>
            <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              About CivilPrep
            </h1>
            <p className="text-lg text-muted-foreground">
              A free educational platform created to help first-year Civil Engineering students study smarter and succeed in their exams.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold text-foreground">Our Mission</h2>
            <p className="mb-4 text-muted-foreground">
              CivilPrep was born from a simple observation: many first-year Civil Engineering students struggle with core subjects because existing resources are either too complex or not accessible in their preferred language.
            </p>
            <p className="mb-4 text-muted-foreground">
              We believe every student deserves clear, simple explanations that make learning enjoyable. Our content follows a mixed Tamil-English approach, keeping technical terms in English while explaining concepts in simple Tamil for better understanding.
            </p>
            <p className="text-muted-foreground">
              Whether you're preparing for exams or trying to build a strong foundation, CivilPrep is here to support your learning journey.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted/30 py-12 md:py-16">
        <div className="container">
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground">
            What Makes Us Different
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">Student-Focused Content</h3>
                <p className="text-sm text-muted-foreground">
                  Written by students, for students. We understand your challenges.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">100% Free Forever</h3>
                <p className="text-sm text-muted-foreground">
                  No subscriptions, no hidden charges. Education should be accessible to all.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">No Login Required</h3>
                <p className="text-sm text-muted-foreground">
                  Start learning immediately. Your privacy is respected.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold text-foreground">Meet the Founder</h2>
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary/10 text-3xl font-bold text-primary">
                    MK
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Muthu Krishnan</h3>
                    <p className="mt-1 text-muted-foreground">Civil Engineering Student & Founder</p>
                    <p className="mt-4 text-muted-foreground">
                      "I created CivilPrep to help my juniors and classmates who were struggling with the same subjects I once found difficult. By organizing notes, formulas, and the best YouTube explanations in one place, I hope to make learning easier for every first-year Civil Engineering student."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-muted/30 py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold text-foreground">Important Notes</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Original Content:</strong> All explanations and notes on CivilPrep are original summaries created for educational purposes.
              </p>
              <p>
                <strong className="text-foreground">Video Credits:</strong> All embedded YouTube videos belong to their respective creators. We only curate and embed videos that we find helpful for students.
              </p>
              <p>
                <strong className="text-foreground">No PDF Downloads:</strong> We do not provide PDF book downloads or any copyrighted textbook content.
              </p>
              <p>
                <strong className="text-foreground">Accuracy:</strong> While we strive for accuracy, we recommend students also refer to their official textbooks and class notes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              Ready to Start Learning?
            </h2>
            <p className="mb-6 text-muted-foreground">
              Explore all subjects and topics for free. No registration needed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/">Browse Subjects</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/feedback" className="gap-2">
                  <Mail className="h-4 w-4" />
                  Send Feedback
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
