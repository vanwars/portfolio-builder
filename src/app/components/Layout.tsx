import { Outlet, Link, useLocation } from 'react-router';
import { Home, Folder, MessageSquare, Map, FileText, Lightbulb, Briefcase, Target } from 'lucide-react';

export function Layout() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Dashboard', icon: Home },
    { path: '/projects', label: 'My Projects', icon: Folder },
    { path: '/story-builder', label: 'Story Builder', icon: MessageSquare },
    { path: '/skill-map', label: 'Skill Map', icon: Map },
    { path: '/evidence-board', label: 'Evidence Board', icon: FileText },
    { path: '/bullet-lab', label: 'Bullet Lab', icon: Lightbulb },
    { path: '/portfolio-builder', label: 'Portfolio Builder', icon: Briefcase },
    { path: '/job-match', label: 'Job Match Studio', icon: Target },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-semibold text-slate-900">Portfolio Builder</h1>
                <p className="text-xs text-slate-500">Turn projects into stories</p>
              </div>
            </div>
            <div className="flex gap-1 ml-auto overflow-x-auto">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}
