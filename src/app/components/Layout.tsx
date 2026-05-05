import { Outlet, Link, useLocation } from 'react-router';
import { Home, Folder, FileText, Briefcase, History } from 'lucide-react';

export function Layout() {
  const location = useLocation();

  const sidebarItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/my-projects', label: 'My Projects', icon: Folder },
    { path: '/resume-templates', label: 'Resume Templates', icon: FileText },
    { path: '/portfolio-templates', label: 'Portfolio Templates', icon: Briefcase },
    { path: '/work-history', label: 'Work History', icon: History },
  ];

  return (
    <div className="min-h-screen bg-white flex">
      <aside className="w-64 border-r border-slate-200 flex-shrink-0">
        <div className="p-6 border-b border-slate-200">
          <Link to="/" className="text-xl text-slate-900">
            Portfolio Builder
          </Link>
        </div>
        <nav className="p-4">
          <ul className="space-y-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 overflow-auto">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
