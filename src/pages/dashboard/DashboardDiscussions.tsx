
import React from "react";
import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import { MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const discussions = [
  {
    id: 1,
    subject: "Tafsir Sourate Al-Baqara",
    lastMessage: "Nouvelle réflexion ajoutée par Dr. Fatima",
    unread: true,
  },
  {
    id: 2,
    subject: "Questions sur la prière",
    lastMessage: "Réponse postée par Ahmed",
    unread: false,
  }
];

const DashboardDiscussions = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h2 className="text-3xl font-bold text-islamic-dark islamic-border-blue inline-block pb-2 mb-6">
          <span className="flex items-center gap-2">
            <MessageSquare className="text-blue-500" /> Discussions
          </span>
        </h2>
        
        <div className="space-y-4">
          {discussions.map((disc) => (
            <Card key={disc.id} className={`animate-fade-in ${disc.unread ? "border-blue-400" : ""}`}>
              <CardHeader>
                <CardTitle className="text-lg">{disc.subject}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">{disc.lastMessage}</p>
                <Button variant="outline" className="text-blue-500 border-blue-300 hover:bg-blue-50">
                  Voir la discussion
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardDiscussions;
