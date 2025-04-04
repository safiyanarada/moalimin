
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  Video, 
  MessageSquare, 
  BarChart3, 
  Settings,
  Book,
  Calendar,
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

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const menuItems = [
    { icon: Home, label: 'Tableau de bord', href: '/dashboard' },
    { icon: BookOpen, label: 'Mes cours', href: '/dashboard/courses' },
    { icon: Book, label: 'Coran', href: '/dashboard/quran' },
    { icon: Video, label: 'Sessions live', href: '/dashboard/live' },
    { icon: MessageSquare, label: 'Discussions', href: '/dashboard/discussions' },
    { icon: Calendar, label: 'Calendrier', href: '/dashboard/calendar' },
    { icon: BarChart3, label: 'Progression', href: '/dashboard/progress' },
    { icon: Settings, label: 'Paramètres', href: '/dashboard/settings' },
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
                active={currentPath === item.href}
              />
            ))}
          </div>
        </div>
        
        <div className="p-4 border-t border-gray-100">
          <Link
            to="/logout"
            className="flex items-center px-4 py-2 text-gray-600 hover:bg-red-50 hover:text-red-500 rounded-lg transition-colors"
          >
            <LogOut className="h-5 w-5 mr-3" />
            <span>Déconnexion</span>
          </Link>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
