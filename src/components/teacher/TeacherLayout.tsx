
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  Users, 
  BookOpen, 
  Video, 
  FileText, 
  Calendar, 
  Settings,
  MessageSquare,
  Bell,
  LogOut
} from 'lucide-react';

type SidebarItemProps = {
  icon: React.ElementType;
  label: string;
  href: string;
  active: boolean;
};

const SidebarItem = ({ icon: Icon, label, href, active }: SidebarItemProps) => (
  <Link
    to={href}
    className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
      active 
        ? 'bg-islamic-primary text-white' 
        : 'text-gray-600 hover:bg-islamic-primary/10 hover:text-islamic-primary'
    }`}
  >
    <Icon className="h-5 w-5 mr-3" />
    <span>{label}</span>
  </Link>
);

const TeacherLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const menuItems = [
    { icon: BarChart3, label: 'Tableau de bord', href: '/teacher-dashboard' },
    { icon: Users, label: 'Mes élèves', href: '/teacher/students' },
    { icon: BookOpen, label: 'Mes cours', href: '/teacher/courses' },
    { icon: Video, label: 'Sessions live', href: '/teacher/live' },
    { icon: FileText, label: 'Devoirs & Évaluations', href: '/teacher/assignments' },
    { icon: Calendar, label: 'Emploi du temps', href: '/teacher/schedule' },
    { icon: MessageSquare, label: 'Messages', href: '/teacher/messages' },
    { icon: Settings, label: 'Paramètres', href: '/teacher/settings' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-100">
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-islamic-primary flex items-center justify-center">
              <span className="text-white font-amiri font-bold text-xl">م</span>
            </div>
            <span className="ml-2 text-xl font-bold text-islamic-dark">Moalimin</span>
          </Link>
        </div>
        
        <div className="flex-1 overflow-auto py-4 px-3">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <SidebarItem 
                key={item.href}
                icon={item.icon}
                label={item.label}
                href={item.href}
                active={currentPath === item.href || 
                       (item.href !== '/teacher-dashboard' && currentPath.startsWith(item.href))}
              />
            ))}
          </div>
        </div>
        
        <div className="p-4 border-t border-gray-100">
          <Link
            to="/login"
            className="flex items-center px-4 py-2 text-gray-600 hover:bg-red-50 hover:text-red-500 rounded-lg transition-colors"
          >
            <LogOut className="h-5 w-5 mr-3" />
            <span>Déconnexion</span>
          </Link>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <header className="h-16 bg-white border-b border-gray-100 px-6 flex items-center justify-between">
          <h2 className="text-lg font-medium">Espace enseignant</h2>
          
          <div className="flex items-center space-x-4">
            <button className="p-1.5 rounded-full hover:bg-gray-100">
              <Bell className="h-5 w-5 text-gray-500" />
            </button>
            
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <Users className="h-5 w-5 text-gray-500" />
              </div>
              <div>
                <p className="text-sm font-medium">Dr. Ahmed Benali</p>
                <p className="text-xs text-gray-500">Professeur</p>
              </div>
            </div>
          </div>
        </header>
        
        <main>
          {children}
        </main>
      </div>
    </div>
  );
};

export default TeacherLayout;
