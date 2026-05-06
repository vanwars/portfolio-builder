import { Github, ExternalLink, Image } from 'lucide-react';
import type { Palette } from '../../lib/palettes';

interface TimelinePortfolioTemplateProps {
  palette: Palette;
}

export function TimelinePortfolioTemplate({ palette }: TimelinePortfolioTemplateProps) {
  return (
    <div className="space-y-8">
      <div className="border-2 border-slate-300 rounded-lg shadow-lg" style={{ backgroundColor: palette.colors.background }}>
        {/* Header */}
        <div className="p-16 text-white text-center" style={{ background: `linear-gradient(to bottom right, ${palette.colors.primary}, ${palette.colors.primaryDark})` }}>
          <h1 className="text-4xl mb-3">Your Name</h1>
          <p className="text-xl mb-2" style={{ color: palette.colors.primaryLight }}>Computer Science Student & Developer</p>
          <p className="mb-6" style={{ color: palette.colors.primaryLight, opacity: 0.9 }}>Oregon State University | Expected 2027</p>
          <div className="flex gap-4 justify-center">
            <a href="#" className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all">
              <Github className="w-5 h-5" />
              github.com/username
            </a>
            <a href="mailto:your.email@example.com" className="px-4 py-2 text-white rounded-lg transition-all" style={{ backgroundColor: palette.colors.accent }}>
              Get in touch
            </a>
          </div>
        </div>

        {/* About */}
        <div className="p-12 border-b" style={{ backgroundColor: palette.colors.secondaryLight, borderColor: palette.colors.border }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl text-slate-900 mb-4">My Journey</h2>
            <p className="text-slate-700 leading-relaxed">
              I'm passionate about building web applications that solve real problems. Over the past two years,
              I've worked on projects ranging from data visualization tools to full-stack web applications.
              Here's how my skills have evolved through the projects I've built.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="p-12" style={{ backgroundColor: palette.colors.background }}>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-sage-200"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Item 1 - Right side */}
                <div className="relative">
                  <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div className="hidden md:block"></div>
                    <div className="relative pl-8 md:pl-0">
                      {/* Dot */}
                      <div className="absolute left-0 md:left-[-14px] top-2 w-4 h-4 bg-terracotta-600 rounded-full border-4 border-white ring-2 ring-slate-200"></div>
                      {/* Date badge */}
                      <div className="mb-4">
                        <span className="px-3 py-1 bg-sage-50 text-terracotta-700 text-sm rounded-full">
                          Fall 2026
                        </span>
                      </div>
                      <div className="bg-sand-50 border border-sage-200 rounded-lg p-6 shadow-sm">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl text-slate-900">Course Scheduler App</h3>
                          <Image className="w-10 h-10 text-sky-500 stroke-[1.5] flex-shrink-0" />
                        </div>
                        <p className="text-slate-600 text-sm mb-4">
                          Built a full-stack web application for students to manage course schedules. Developed
                          the React frontend and integrated it with backend API endpoints.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-2 py-1 bg-sage-50 text-terracotta-700 text-xs rounded">React</span>
                          <span className="px-2 py-1 bg-sage-50 text-terracotta-700 text-xs rounded">Node.js</span>
                          <span className="px-2 py-1 bg-sage-50 text-terracotta-700 text-xs rounded">PostgreSQL</span>
                        </div>
                        <div className="flex gap-3">
                          <a href="#" className="text-sm text-terracotta-600 hover:text-terracotta-700 flex items-center gap-1">
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                          <a href="#" className="text-sm text-terracotta-600 hover:text-terracotta-700 flex items-center gap-1">
                            <ExternalLink className="w-4 h-4" />
                            Demo
                          </a>
                        </div>
                      </div>
                      <div className="mt-3 text-sm text-slate-600 italic">
                        → First time working with REST APIs and async state management
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 2 - Left side */}
                <div className="relative">
                  <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div className="relative pr-8 md:pr-0 pl-8 md:pl-0 md:text-right">
                      {/* Dot */}
                      <div className="absolute left-0 md:left-auto md:right-[-14px] top-2 w-4 h-4 bg-sage-600 rounded-full border-4 border-white ring-2 ring-slate-200"></div>
                      {/* Date badge */}
                      <div className="mb-4">
                        <span className="px-3 py-1 bg-sage-50 text-sage-700 text-sm rounded-full">
                          Spring 2026
                        </span>
                      </div>
                      <div className="bg-sand-50 border border-sage-200 rounded-lg p-6 shadow-sm">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl text-slate-900">Weather Dashboard</h3>
                          <Image className="w-10 h-10 text-sage-600 stroke-[1.5] flex-shrink-0" />
                        </div>
                        <p className="text-slate-600 text-sm mb-4 md:text-right">
                          Created a responsive weather dashboard using Vue.js and the OpenWeather API.
                          Implemented data caching to improve performance.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4 md:justify-end">
                          <span className="px-2 py-1 bg-sage-50 text-sage-700 text-xs rounded">Vue.js</span>
                          <span className="px-2 py-1 bg-sage-50 text-sage-700 text-xs rounded">API Integration</span>
                          <span className="px-2 py-1 bg-sage-50 text-sage-700 text-xs rounded">Tailwind CSS</span>
                        </div>
                        <div className="flex gap-3 md:justify-end">
                          <a href="#" className="text-sm text-terracotta-600 hover:text-terracotta-700 flex items-center gap-1">
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                          <a href="#" className="text-sm text-terracotta-600 hover:text-terracotta-700 flex items-center gap-1">
                            <ExternalLink className="w-4 h-4" />
                            Demo
                          </a>
                        </div>
                      </div>
                      <div className="mt-3 text-sm text-slate-600 italic md:text-right">
                        → Learned Vue.js and responsive design principles
                      </div>
                    </div>
                    <div className="hidden md:block"></div>
                  </div>
                </div>

                {/* Item 3 - Right side */}
                <div className="relative">
                  <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div className="hidden md:block"></div>
                    <div className="relative pl-8 md:pl-0">
                      {/* Dot */}
                      <div className="absolute left-0 md:left-[-14px] top-2 w-4 h-4 bg-sky-500 rounded-full border-4 border-white ring-2 ring-slate-200"></div>
                      {/* Date badge */}
                      <div className="mb-4">
                        <span className="px-3 py-1 bg-sky-50 text-sky-600 text-sm rounded-full">
                          Winter 2026
                        </span>
                      </div>
                      <div className="bg-sand-50 border border-sage-200 rounded-lg p-6 shadow-sm">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl text-slate-900">Data Visualization Tool</h3>
                          <Image className="w-10 h-10 text-sky-400 stroke-[1.5] flex-shrink-0" />
                        </div>
                        <p className="text-slate-600 text-sm mb-4">
                          Built a Python Flask application that processes CSV data and generates interactive
                          charts using Chart.js.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-2 py-1 bg-sky-50 text-sky-600 text-xs rounded">Python</span>
                          <span className="px-2 py-1 bg-sky-50 text-sky-600 text-xs rounded">Flask</span>
                          <span className="px-2 py-1 bg-sky-50 text-sky-600 text-xs rounded">Chart.js</span>
                        </div>
                        <div className="flex gap-3">
                          <a href="#" className="text-sm text-terracotta-600 hover:text-terracotta-700 flex items-center gap-1">
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                        </div>
                      </div>
                      <div className="mt-3 text-sm text-slate-600 italic">
                        → First Python web project, learned backend development basics
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 4 - Left side */}
                <div className="relative">
                  <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div className="relative pr-8 md:pr-0 pl-8 md:pl-0 md:text-right">
                      {/* Dot */}
                      <div className="absolute left-0 md:left-auto md:right-[-14px] top-2 w-4 h-4 bg-terracotta-600 rounded-full border-4 border-white ring-2 ring-slate-200"></div>
                      {/* Date badge */}
                      <div className="mb-4">
                        <span className="px-3 py-1 bg-terracotta-50 text-terracotta-700 text-sm rounded-full">
                          Fall 2025
                        </span>
                      </div>
                      <div className="bg-sand-50 border border-sage-200 rounded-lg p-6 shadow-sm">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl text-slate-900">Portfolio Website (v1)</h3>
                          <Image className="w-10 h-10 text-terracotta-600 stroke-[1.5] flex-shrink-0" />
                        </div>
                        <p className="text-slate-600 text-sm mb-4 md:text-right">
                          My first web project - a personal portfolio site built with HTML, CSS, and vanilla JavaScript.
                          Learned the fundamentals of web development.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4 md:justify-end">
                          <span className="px-2 py-1 bg-terracotta-50 text-terracotta-700 text-xs rounded">HTML/CSS</span>
                          <span className="px-2 py-1 bg-terracotta-50 text-terracotta-700 text-xs rounded">JavaScript</span>
                        </div>
                        <div className="flex gap-3 md:justify-end">
                          <a href="#" className="text-sm text-terracotta-600 hover:text-terracotta-700 flex items-center gap-1">
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                        </div>
                      </div>
                      <div className="mt-3 text-sm text-slate-600 italic md:text-right">
                        → Where it all began - first time writing HTML/CSS
                      </div>
                    </div>
                    <div className="hidden md:block"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="p-12 border-t" style={{ backgroundColor: palette.colors.secondaryLight, borderColor: palette.colors.border }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl text-slate-900 mb-6 text-center">Skills I've Developed</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-sm uppercase tracking-wide text-slate-500 mb-2">Frontend</p>
                <p className="text-slate-900 text-sm">React, Vue.js, Tailwind CSS</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide text-slate-500 mb-2">Backend</p>
                <p className="text-slate-900 text-sm">Node.js, Python, Flask</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide text-slate-500 mb-2">Database</p>
                <p className="text-slate-900 text-sm">PostgreSQL, MongoDB</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide text-slate-500 mb-2">Tools</p>
                <p className="text-slate-900 text-sm">Git, VS Code, APIs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
