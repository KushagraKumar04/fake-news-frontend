import React, { useState } from 'react';
import { Search, AlertCircle, Link as LinkIcon, FileText } from 'lucide-react';
import { CredibilityMeter } from './CredibilityMeter';
import type { AnalysisResult } from '../types';

export function ArticleAnalyzer() {
  const [analysisType, setAnalysisType] = useState<'url' | 'text'>('url');
  const [url, setUrl] = useState('');
  const [articleText, setArticleText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setResult({
        credibilityScore: Math.floor(Math.random() * 100),
        flags: ['Misleading headline', 'Unverified sources'],
        verifiedSources: ['reuters.com', 'apnews.com']
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setAnalysisType('url')}
          className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center gap-2 ${
            analysisType === 'url'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <LinkIcon className="w-4 h-4" />
          Analyze URL
        </button>
        <button
          onClick={() => setAnalysisType('text')}
          className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center gap-2 ${
            analysisType === 'text'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <FileText className="w-4 h-4" />
          Analyze Text
        </button>
      </div>

      <form onSubmit={handleAnalyze} className="space-y-4">
        {analysisType === 'url' ? (
          <div className="relative">
            <LinkIcon className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter article URL to analyze"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
        ) : (
          <div className="relative">
            <textarea
              value={articleText}
              onChange={(e) => setArticleText(e.target.value)}
              placeholder="Paste article text here to analyze"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[200px]"
              required
            />
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 flex items-center justify-center gap-2"
        >
          <Search className="w-4 h-4" />
          Analyze {analysisType === 'url' ? 'URL' : 'Text'}
        </button>
      </form>

      {loading && (
        <div className="mt-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Analyzing article...</p>
        </div>
      )}

      {result && (
        <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Credibility Score</h3>
            <CredibilityMeter score={result.credibilityScore} />
          </div>

          {result.flags.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Potential Issues</h3>
              <div className="space-y-2">
                {result.flags.map((flag, index) => (
                  <div key={index} className="flex items-center gap-2 text-red-600">
                    <AlertCircle className="w-4 h-4" />
                    <span>{flag}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h3 className="text-lg font-semibold mb-2">Verified Sources</h3>
            <div className="flex flex-wrap gap-2">
              {result.verifiedSources.map((source, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                >
                  {source}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}