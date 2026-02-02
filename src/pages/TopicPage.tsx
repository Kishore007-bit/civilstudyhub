import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Bookmark, ChevronRight } from "lucide-react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { FormulaCard } from "@/components/FormulaCard";
import { getTopicById, getAdjacentTopics } from "@/lib/data/topics";
import { getSubjectById } from "@/lib/data/subjects";
import { getTopicContent } from "@/lib/data/content";
import { useBookmarks } from "@/hooks/useBookmarks";
import { cn } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function TopicPage() {
  const { subjectId, topicId } = useParams<{ subjectId: string; topicId: string }>();
  const topic = topicId ? getTopicById(topicId) : undefined;
  const subject = subjectId ? getSubjectById(subjectId) : undefined;
  const content = topicId ? getTopicContent(topicId) : undefined;
  const { prev, next } = topicId ? getAdjacentTopics(topicId) : {};
  const { isBookmarked, toggleBookmark } = useBookmarks();

  const bookmarked = topic ? isBookmarked(topic.id) : false;

  if (!topic || !subject || !content) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Topic Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The topic you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/">Go Home</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const handleBookmarkClick = () => {
    toggleBookmark(topic.id, topic.subjectId);
  };

  return (
    <Layout>
      {/* Breadcrumb & Header */}
      <section className="border-b bg-muted/30 py-6">
        <div className="container">
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={`/subject/${subject.id}`}>{subject.shortName}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>{topic.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{subject.icon}</span>
                <span className="text-sm text-muted-foreground">{subject.name}</span>
              </div>
              <h1 className="text-2xl font-bold text-foreground md:text-3xl">
                {topic.title}
              </h1>
            </div>
            <Button
              variant={bookmarked ? "default" : "outline"}
              onClick={handleBookmarkClick}
              className="gap-2 shrink-0"
            >
              <Bookmark className={cn("h-4 w-4", bookmarked && "fill-current")} />
              {bookmarked ? "Bookmarked" : "Bookmark"}
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 md:py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-10">
            {/* Explanation */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Concept Explanation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  {content.explanation.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="mb-4 last:mb-0 whitespace-pre-wrap leading-relaxed">
                      {paragraph.split("**").map((part, j) =>
                        j % 2 === 1 ? (
                          <strong key={j} className="font-semibold text-foreground">
                            {part}
                          </strong>
                        ) : (
                          part
                        )
                      )}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Formulas */}
            {content.formulas.length > 0 && (
              <div>
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  Important Formulas
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {content.formulas.map((formula, i) => (
                    <FormulaCard key={i} formula={formula} />
                  ))}
                </div>
              </div>
            )}

            {/* Key Points */}
            {content.keyPoints.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Key Points to Remember</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {content.keyPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                          {i + 1}
                        </span>
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Videos */}
            {content.videos.length > 0 && (
              <div>
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  Video Tutorials (Tamil)
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {content.videos.map((video, i) => (
                    <div key={i} className="space-y-2">
                      <YouTubeEmbed videoId={video.videoId} title={video.title} />
                      <div className="px-1">
                        <h3 className="font-medium text-sm text-foreground">
                          {video.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">{video.channel}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-muted-foreground text-center">
                  * Videos belong to their respective creators. We only curate and embed.
                </p>
              </div>
            )}

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t pt-8">
              {prev ? (
                <Button variant="outline" asChild className="w-full sm:w-auto">
                  <Link to={`/topic/${subject.id}/${prev.id}`} className="gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    <span className="truncate">{prev.title}</span>
                  </Link>
                </Button>
              ) : (
                <div />
              )}
              {next ? (
                <Button asChild className="w-full sm:w-auto">
                  <Link to={`/topic/${subject.id}/${next.id}`} className="gap-2">
                    <span className="truncate">{next.title}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <Button asChild className="w-full sm:w-auto">
                  <Link to={`/subject/${subject.id}`} className="gap-2">
                    Back to Topics
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
