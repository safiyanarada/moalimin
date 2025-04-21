
import React from "react";
import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import { Video } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const liveSessions = [
  {
    id: 1,
    title: "Tajwid - Direct avec Cheikh Hassan",
    time: "Aujourd'hui, 14:00",
    description: "Séance en direct sur les règles du Noon Saakin.",
    inProgress: true,
  },
  {
    id: 2,
    title: "Fiqh - Réponses en direct",
    time: "Demain, 18:00",
    description: "FAQ en live sur les obligations du jeûne.",
    inProgress: false,
  }
];

const DashboardLive = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h2 className="text-3xl font-bold text-islamic-dark islamic-border-blue inline-block pb-2 mb-6">
          <span className="flex items-center gap-2">
            <Video className="text-blue-500" /> Sessions live
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {liveSessions.map(session => (
            <Card key={session.id} className="glass-morphism animate-fade-in">
              <CardHeader>
                <CardTitle className="text-xl">
                  {session.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">{session.time}</p>
                <p className="mb-4">{session.description}</p>
                <Button 
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                  disabled={!session.inProgress}
                >
                  {session.inProgress ? "Rejoindre le direct" : "Bientôt disponible"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardLive;
