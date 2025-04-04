
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { BookOpen } from 'lucide-react';

const QuranProgress = () => {
  // Mock data for Quran memorization progress
  const totalSurahsMemorized = 12;
  const totalSurahs = 114;
  const percentageComplete = Math.round((totalSurahsMemorized / totalSurahs) * 100);
  
  const recentProgress = [
    { surah: "Al-Mulk", juz: 29, ayahs: "1-30", date: "2023-04-02" },
    { surah: "Al-Qalam", juz: 29, ayahs: "1-20", date: "2023-03-28" },
    { surah: "Al-Muzzammil", juz: 29, ayahs: "1-20", date: "2023-03-25" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-islamic-dark">Mémorisation du Coran</h3>
        <div className="bg-islamic-primary/10 p-2 rounded-full">
          <BookOpen className="h-5 w-5 text-islamic-primary" />
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-gray-500">Progression globale</span>
          <span className="text-sm font-medium text-islamic-primary">{percentageComplete}%</span>
        </div>
        <Progress value={percentageComplete} className="h-2" />
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-500">
          <span>Sourates mémorisées: {totalSurahsMemorized}/{totalSurahs}</span>
          <span>Juz' complets: 5/30</span>
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium text-gray-500 mb-3">Progression récente</h4>
        <div className="space-y-3">
          {recentProgress.map((item, index) => (
            <div key={index} className="flex items-center justify-between border-b border-gray-100 pb-2 last:border-0">
              <div>
                <p className="text-sm font-medium text-islamic-dark">{item.surah}</p>
                <p className="text-xs text-gray-500">Juz' {item.juz}, Versets {item.ayahs}</p>
              </div>
              <div className="text-xs text-gray-400">
                {new Date(item.date).toLocaleDateString('fr-FR', { 
                  year: 'numeric', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuranProgress;
