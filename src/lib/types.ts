export interface Subject {
  id: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  topicCount: number;
}

export interface Topic {
  id: string;
  subjectId: string;
  title: string;
  description: string;
  order: number;
}

export interface TopicContent {
  topicId: string;
  explanation: string;
  formulas: Formula[];
  keyPoints: string[];
  videos: Video[];
}

export interface Formula {
  name: string;
  formula: string;
  description?: string;
}

export interface Video {
  title: string;
  videoId: string;
  channel: string;
}

export interface BookmarkedTopic {
  topicId: string;
  subjectId: string;
  bookmarkedAt: number;
}
