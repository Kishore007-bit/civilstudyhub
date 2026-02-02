import { Link } from "react-router-dom";
import { Bookmark, Trash2, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useBookmarks } from "@/hooks/useBookmarks";
import { getTopicById } from "@/lib/data/topics";
import { getSubjectById } from "@/lib/data/subjects";

export default function BookmarksPage() {
  const { bookmarks, removeBookmark, clearAllBookmarks } = useBookmarks();

  const bookmarkedTopics = bookmarks
    .map((b) => {
      const topic = getTopicById(b.topicId);
      const subject = getSubjectById(b.subjectId);
      return topic && subject ? { ...b, topic, subject } : null;
    })
    .filter(Boolean)
    .sort((a, b) => (b?.bookmarkedAt || 0) - (a?.bookmarkedAt || 0));

  return (
    <Layout>
      <section className="py-10 md:py-16">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">My Bookmarks</h1>
              <p className="mt-2 text-muted-foreground">
                {bookmarks.length === 0
                  ? "Save topics for quick access later"
                  : `${bookmarks.length} topic${bookmarks.length !== 1 ? "s" : ""} saved`}
              </p>
            </div>
            {bookmarks.length > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={clearAllBookmarks}
                className="gap-2"
              >
                <Trash2 className="h-4 w-4" />
                Clear All
              </Button>
            )}
          </div>

          {bookmarkedTopics.length === 0 ? (
            <Card className="py-16 text-center">
              <CardContent>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                  <Bookmark className="h-8 w-8 text-muted-foreground" />
                </div>
                <h2 className="mb-2 text-xl font-semibold">No Bookmarks Yet</h2>
                <p className="mb-6 text-muted-foreground">
                  Start exploring topics and bookmark the ones you want to revisit.
                </p>
                <Button asChild>
                  <Link to="/">Browse Subjects</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-3">
              {bookmarkedTopics.map(
                (item) =>
                  item && (
                    <Card key={item.topicId} className="group">
                      <CardContent className="flex items-center gap-4 p-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-xl">
                          {item.subject.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <Link
                            to={`/topic/${item.subject.id}/${item.topic.id}`}
                            className="font-medium text-foreground hover:text-primary transition-colors"
                          >
                            {item.topic.title}
                          </Link>
                          <p className="text-sm text-muted-foreground">
                            {item.subject.name}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-destructive"
                            onClick={() => removeBookmark(item.topicId)}
                            aria-label="Remove bookmark"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                            <Link to={`/topic/${item.subject.id}/${item.topic.id}`}>
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )
              )}
            </div>
          )}

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Bookmarks are saved locally in your browser. No login required.
          </p>
        </div>
      </section>
    </Layout>
  );
}
