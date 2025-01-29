import { ShieldAlert } from 'lucide-react';
import { ArticleAnalyzer } from './components/ArticleAnalyzer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Fake News Detector</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Real-Time Fake News Detection
          </h2>
          <p className="mt-3 text-xl text-gray-500">
            Analyze articles instantly and get credibility insights powered by AI
          </p>
        </div>

        <div className="flex justify-center">
          <ArticleAnalyzer />
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="text-center">
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;