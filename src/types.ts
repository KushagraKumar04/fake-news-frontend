export interface Article {
  id: string;
  title: string;
  content: string;
  source: string;
  url: string;
  credibilityScore: number;
  flags: string[];
  verifiedSources: string[];
  dateAnalyzed: string;
}

export interface AnalysisResult {
  credibilityScore: number;
  flags: string[];
  verifiedSources: string[];
}