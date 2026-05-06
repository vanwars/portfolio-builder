import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, Folder, FileText, Briefcase, User, ChevronLeft, ChevronRight, ChevronDown, Award, History, BookOpen, Mail } from 'lucide-react';
import { useState } from 'react';

export function Layout() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isCreateExpanded, setIsCreateExpanded] = useState(false);
  const [isResumeExpanded, setIsResumeExpanded] = useState(false);
  const [isCoverLetterExpanded, setIsCoverLetterExpanded] = useState(false);
  const [isBackgroundExpanded, setIsBackgroundExpanded] = useState(false);

  const mainItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/my-projects', label: 'My Project Portfolio', icon: Folder },
  ];

  const resumeItems = [
    { path: '/resume-templates', label: 'Resume Templates', icon: FileText },
    { path: '/my-resumes', label: "Resumes I've Made", icon: FileText },
  ];

  const coverLetterItems = [
    { path: '/cover-letter-guide', label: 'How to Write a Cover Letter', icon: Mail },
    { path: '/my-cover-letters', label: "Cover Letters I've Made", icon: Mail },
  ];

  const portfolioItems = [
    { path: '/portfolio-templates', label: 'Portfolio Templates', icon: Briefcase },
  ];

  const backgroundItems = [
    { path: '/bio', label: 'Bio', icon: User },
    { path: '/skills', label: 'Skills', icon: Award },
    { path: '/work-history', label: 'Work History', icon: History },
    { path: '/certifications', label: 'Certifications', icon: Award },
  ];

  return (
    <div className="min-h-screen bg-white flex">
      <aside className={`border-r border-slate-200 flex-shrink-0 transition-all ${isCollapsed ? 'w-20' : 'w-64'}`}>
        <div className={`p-6 border-b border-slate-200 flex items-center justify-between ${isCollapsed ? 'px-4' : ''}`}>
          {!isCollapsed && (
            <Link to="/" className="text-xl text-slate-900">
              DraftPath
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
            {mainItems.map((item) => {
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
                Create from my portfolio
              </p>
            )}
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => setIsResumeExpanded(!isResumeExpanded)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-slate-600 hover:bg-slate-50 ${
                    isCollapsed ? 'justify-center' : ''
                  }`}
                  title={isCollapsed ? 'Resume' : ''}
                >
                  <FileText className="w-5 h-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <>
                      <span className="text-sm flex-1 text-left">Resume</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isResumeExpanded ? 'rotate-180' : ''}`} />
                    </>
                  )}
                </button>

                {isResumeExpanded && !isCollapsed && (
                  <ul className="mt-1 ml-6 space-y-1">
                    {resumeItems.map((item) => {
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

              <li>
                <button
                  onClick={() => setIsCreateExpanded(!isCreateExpanded)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-slate-600 hover:bg-slate-50 ${
                    isCollapsed ? 'justify-center' : ''
                  }`}
                  title={isCollapsed ? 'Portfolio' : ''}
                >
                  <Briefcase className="w-5 h-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <>
                      <span className="text-sm flex-1 text-left">Portfolio</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isCreateExpanded ? 'rotate-180' : ''}`} />
                    </>
                  )}
                </button>

                {isCreateExpanded && !isCollapsed && (
                  <ul className="mt-1 ml-6 space-y-1">
                    {portfolioItems.map((item) => {
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

              <li>
                <button
                  onClick={() => setIsCoverLetterExpanded(!isCoverLetterExpanded)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-slate-600 hover:bg-slate-50 ${
                    isCollapsed ? 'justify-center' : ''
                  }`}
                  title={isCollapsed ? 'Cover Letter' : ''}
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <>
                      <span className="text-sm flex-1 text-left">Cover Letter</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isCoverLetterExpanded ? 'rotate-180' : ''}`} />
                    </>
                  )}
                </button>

                {isCoverLetterExpanded && !isCollapsed && (
                  <ul className="mt-1 ml-6 space-y-1">
                    {coverLetterItems.map((item) => {
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

          <div className="mt-6 pt-6 border-t border-slate-200">
            {!isCollapsed && (
              <p className="px-3 mb-2 text-xs uppercase tracking-wide text-slate-500">
                My background
              </p>
            )}
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => setIsBackgroundExpanded(!isBackgroundExpanded)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-slate-600 hover:bg-slate-50 ${
                    isCollapsed ? 'justify-center' : ''
                  }`}
                  title={isCollapsed ? 'My background' : ''}
                >
                  <User className="w-5 h-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <>
                      <span className="text-sm flex-1 text-left">My background</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isBackgroundExpanded ? 'rotate-180' : ''}`} />
                    </>
                  )}
                </button>

                {isBackgroundExpanded && !isCollapsed && (
                  <ul className="mt-1 ml-6 space-y-1">
                    {backgroundItems.map((item) => {
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
