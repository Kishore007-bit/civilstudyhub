import { ExternalLink, MessageSquare, Lightbulb, HelpCircle, ThumbsUp } from "lucide-react";
import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FeedbackPage() {
  // Placeholder Google Form URL - replace with actual form when ready
  const googleFormUrl = "#";

  return (
    <Layout>
      {/* Header */}
      <section className="bg-accent py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <MessageSquare className="h-8 w-8" />
            </div>
            <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Share Your Feedback
            </h1>
            <p className="text-lg text-muted-foreground">
              Help us improve CivilPrep by sharing your thoughts, suggestions, or topic requests.
            </p>
          </div>
        </div>
      </section>

      {/* Feedback Types */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-xl font-semibold text-foreground">
              What Can You Share?
            </h2>
            <div className="grid gap-4 sm:grid-cols-3 mb-10">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Lightbulb className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <h3 className="font-semibold">Topic Requests</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Suggest new topics you'd like us to cover
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <HelpCircle className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <h3 className="font-semibold">Doubts & Questions</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Ask questions about any concept
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <ThumbsUp className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <h3 className="font-semibold">Suggestions</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Ideas to make CivilPrep better
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Google Form Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Submit Your Feedback</CardTitle>
              </CardHeader>
              <CardContent className="text-center py-8">
                <div className="mb-6 rounded-lg border-2 border-dashed border-muted-foreground/25 bg-muted/50 p-8">
                  <MessageSquare className="mx-auto mb-4 h-12 w-12 text-muted-foreground/50" />
                  <p className="text-muted-foreground mb-4">
                    Google Form will be embedded here once ready.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    For now, you can reach out through the button below.
                  </p>
                </div>

                <Button size="lg" className="gap-2" disabled>
                  <ExternalLink className="h-4 w-4" />
                  Open Feedback Form
                </Button>

                <p className="mt-6 text-sm text-muted-foreground">
                  <strong>No login required</strong> — Your feedback is anonymous unless you choose to share your contact details.
                </p>
              </CardContent>
            </Card>

            {/* Alternative Contact */}
            <div className="mt-8 text-center text-sm text-muted-foreground">
              <p>
                Want to contribute content or report errors?{" "}
                <a
                  href="mailto:feedback@civilprep.example.com"
                  className="text-primary hover:underline"
                >
                  Email us directly
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Note */}
      <section className="bg-muted/30 py-12">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              Thank You for Helping Us Improve! 🙏
            </h2>
            <p className="text-muted-foreground">
              Your feedback helps us create better content for Civil Engineering students across Tamil Nadu and beyond.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
