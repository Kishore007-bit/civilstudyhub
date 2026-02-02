import { useState, useEffect, useCallback } from "react";
import { BookmarkedTopic } from "@/lib/types";

const STORAGE_KEY = "civilprep-bookmarks";

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<BookmarkedTopic[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setBookmarks(JSON.parse(stored));
      } catch {
        setBookmarks([]);
      }
    }
  }, []);

  const saveBookmarks = useCallback((newBookmarks: BookmarkedTopic[]) => {
    setBookmarks(newBookmarks);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newBookmarks));
  }, []);

  const isBookmarked = useCallback(
    (topicId: string) => {
      return bookmarks.some((b) => b.topicId === topicId);
    },
    [bookmarks]
  );

  const toggleBookmark = useCallback(
    (topicId: string, subjectId: string) => {
      if (isBookmarked(topicId)) {
        saveBookmarks(bookmarks.filter((b) => b.topicId !== topicId));
      } else {
        saveBookmarks([
          ...bookmarks,
          { topicId, subjectId, bookmarkedAt: Date.now() },
        ]);
      }
    },
    [bookmarks, isBookmarked, saveBookmarks]
  );

  const removeBookmark = useCallback(
    (topicId: string) => {
      saveBookmarks(bookmarks.filter((b) => b.topicId !== topicId));
    },
    [bookmarks, saveBookmarks]
  );

  const clearAllBookmarks = useCallback(() => {
    saveBookmarks([]);
  }, [saveBookmarks]);

  return {
    bookmarks,
    isBookmarked,
    toggleBookmark,
    removeBookmark,
    clearAllBookmarks,
  };
}
