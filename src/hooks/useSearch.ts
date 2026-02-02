import { useState, useMemo } from "react";
import { topics } from "@/lib/data/topics";
import { subjects } from "@/lib/data/subjects";

export interface SearchResult {
  type: "topic" | "subject";
  id: string;
  title: string;
  description: string;
  subjectId?: string;
  subjectName?: string;
}

export function useSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo<SearchResult[]>(() => {
    if (!query.trim()) return [];

    const lowerQuery = query.toLowerCase();

    const topicResults: SearchResult[] = topics
      .filter(
        (topic) =>
          topic.title.toLowerCase().includes(lowerQuery) ||
          topic.description.toLowerCase().includes(lowerQuery)
      )
      .map((topic) => {
        const subject = subjects.find((s) => s.id === topic.subjectId);
        return {
          type: "topic" as const,
          id: topic.id,
          title: topic.title,
          description: topic.description,
          subjectId: topic.subjectId,
          subjectName: subject?.shortName,
        };
      });

    const subjectResults: SearchResult[] = subjects
      .filter(
        (subject) =>
          subject.name.toLowerCase().includes(lowerQuery) ||
          subject.description.toLowerCase().includes(lowerQuery)
      )
      .map((subject) => ({
        type: "subject" as const,
        id: subject.id,
        title: subject.name,
        description: subject.description,
      }));

    return [...subjectResults, ...topicResults].slice(0, 10);
  }, [query]);

  return { query, setQuery, results };
}
