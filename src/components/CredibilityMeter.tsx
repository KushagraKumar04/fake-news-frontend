import { AlertTriangle, CheckCircle, Shield } from 'lucide-react';

interface CredibilityMeterProps {
  score: number;
}

export function CredibilityMeter({ score }: CredibilityMeterProps) {
  const getColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 50) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="w-6 h-6" />;
    if (score >= 50) return <Shield className="w-6 h-6" />;
    return <AlertTriangle className="w-6 h-6" />;
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`${getColor(score)}`}>
        {getIcon(score)}
      </div>
      <div className="flex-1">
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className={`h-2 rounded-full ${getColor(score)} score-bar`}
          />
        </div>
      </div>
      <span className={`font-semibold ${getColor(score)}`}>{score}%</span>
    </div>
  );
}