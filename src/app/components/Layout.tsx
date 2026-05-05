import { Outlet, Link, useLocation } from 'react-router';
import { Home, Folder, FileText, Briefcase, User, ChevronLeft, ChevronRight, ChevronDown, Award, History, BookOpen } from 'lucide-react';
import { useState } from 'react';

export function Layout() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isInfoExpanded, setIsInfoExpanded] = useState(false);

  const sidebarItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/my-projects', label: 'My Projects', icon: Folder },
  ];

  const secondaryItems = [
    { path: '/resume-templates', label: 'Resume Templates', icon: FileText },
    { path: '/portfolio-templates', label: 'Portfolio Templates', icon: Briefcase },
  ];

  const infoItems = [
    { path: '/bio', label: 'Bio', icon: User },
    { path: '/skills', label: 'Skills', icon: Award },
    { path: '/work-history', label: 'Work History', icon: History },
    { path: '/certifications', label: 'Certifications', icon: Award },
    { path: '/publications', label: 'Publications', icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-white flex">
      <aside className={`border-r border-slate-200 flex-shrink-0 transition-all ${isCollapsed ? 'w-20' : 'w-64'}`}>
        <div className={`p-6 border-b border-slate-200 flex items-center justify-between ${isCollapsed ? 'px-4' : ''}`}>
          {!isCollapsed && (
            <Link to="/" className="text-xl text-slate-900">
              Portfolio Builder
            </Link>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5 text-slate-600" />
            ) : (
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            )}
          </button>
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
                    } ${isCollapsed ? 'justify-center' : ''}`}
                    title={isCollapsed ? item.label : ''}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    {!isCollapsed && <span>{item.label}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 pt-6 border-t border-slate-200">
            {!isCollapsed && (
              <p className="px-3 mb-2 text-xs uppercase tracking-wide text-slate-500">
                Other Tools
              </p>
            )}
            <ul className="space-y-1">
              {secondaryItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-slate-600 hover:bg-slate-50'
                      } ${isCollapsed ? 'justify-center' : ''}`}
                      title={isCollapsed ? item.label : ''}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      {!isCollapsed && <span className="text-sm">{item.label}</span>}
                    </Link>
                  </li>
                );
              })}

              <li>
                <button
                  onClick={() => setIsInfoExpanded(!isInfoExpanded)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-slate-600 hover:bg-slate-50 ${
                    isCollapsed ? 'justify-center' : ''
                  }`}
                  title={isCollapsed ? 'Your Information' : ''}
                >
                  <User className="w-5 h-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <>
                      <span className="text-sm flex-1 text-left">Your Information</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isInfoExpanded ? 'rotate-180' : ''}`} />
                    </>
                  )}
                </button>

                {isInfoExpanded && !isCollapsed && (
                  <ul className="mt-1 ml-6 space-y-1">
                    {infoItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = location.pathname === item.path;
                      return (
                        <li key={item.path}>
                          <Link
                            to={item.path}
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                              isActive
                                ? 'bg-blue-50 text-blue-700'
                                : 'text-slate-600 hover:bg-slate-50'
                            }`}
                          >
                            <Icon className="w-4 h-4 flex-shrink-0" />
                            <span className="text-sm">{item.label}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            </ul>
          </div>
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
