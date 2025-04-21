
import React from "react";
import DashboardLayout from "@/components/Dashboard/DashboardLayout";
// Removed unused and incorrect import "activity"
import { BookOpen, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const userProgress = [
  {
    label: "Mémorisation du Coran",
    value: 62,
    color: "bg-green-400",
  },
  {
    label: "Sessions live suivies",
    value: 15,
    color: "bg-blue-400",
  },
  {
    label: "Exercices réalisés",
    value: 27,
    color: "bg-amber-400",
  }
];

const DashboardProgress = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h2 className="text-3xl font-bold text-islamic-dark islamic-border-blue inline-block pb-2 mb-6">
          <span className="flex items-center gap-2">
            <BarChart3 className="text-blue-500" /> Progression
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {userProgress.map((item, idx) => (
            <Card key={idx} className="glass-morphism animate-fade-in">
              <CardHeader>
                <CardTitle className="text-lg">{item.label}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div className={`w-full h-3 rounded bg-gray-200`}>
                  <div
                    className={`${item.color} h-3 rounded`}
                    style={{ width: `${item.value}%`, transition: "width 1s" }}
                  />
                </div>
                <span className="mt-2 font-bold">{item.value} %</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardProgress;

