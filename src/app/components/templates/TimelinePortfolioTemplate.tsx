import { Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Image } from 'lucide-react';

export function TimelinePortfolioTemplate() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <Link to="/portfolio-templates" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
          <ArrowLeft className="w-4 h-4" />
          Back to templates
        </Link>
        <Link
          to="/my-projects"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
        >
          Use this template
        </Link>
      </div>

      <div className="bg-white border-2 border-slate-300 rounded-lg shadow-lg">
        {/* Header */}
        <div className="p-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white text-center">
          <h1 className="text-4xl mb-3">Your Name</h1>
          <p className="text-xl text-slate-300 mb-2">Computer Science Student & Developer</p>
          <p className="text-slate-400 mb-6">Oregon State University | Expected 2027</p>
          <div className="flex gap-4 justify-center">
            <a href="#" className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all">
              <Github className="w-5 h-5" />
              github.com/username
            </a>
            <a href="mailto:your.email@example.com" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all">
              Get in touch
            </a>
          </div>
        </div>

        {/* About */}
        <div className="p-12 bg-slate-50 border-b border-slate-200">
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
        <div className="p-12">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Item 1 - Right side */}
                <div className="relative">
                  <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div className="hidden md:block"></div>
                    <div className="relative pl-8 md:pl-0">
                      {/* Dot */}
                      <div className="absolute left-0 md:left-[-33px] top-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white ring-2 ring-slate-200"></div>
                      {/* Date badge */}
                      <div className="mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                          Fall 2026
                        </span>
                      </div>
                      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl text-slate-900">Course Scheduler App</h3>
                          <Image className="w-10 h-10 text-blue-300 stroke-[1.5] flex-shrink-0" />
                        </div>
                        <p className="text-slate-600 text-sm mb-4">
                          Built a full-stack web application for students to manage course schedules. Developed
                          the React frontend and integrated it with backend API endpoints.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">React</span>
                          <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">Node.js</span>
                          <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">PostgreSQL</span>
                        </div>
                        <div className="flex gap-3">
                          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
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
                      <div className="absolute left-0 md:left-auto md:right-[-33px] top-2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white ring-2 ring-slate-200"></div>
                      {/* Date badge */}
                      <div className="mb-4">
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                          Spring 2026
                        </span>
                      </div>
                      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl text-slate-900">Weather Dashboard</h3>
                          <Image className="w-10 h-10 text-purple-300 stroke-[1.5] flex-shrink-0" />
                        </div>
                        <p className="text-slate-600 text-sm mb-4 md:text-right">
                          Created a responsive weather dashboard using Vue.js and the OpenWeather API.
                          Implemented data caching to improve performance.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4 md:justify-end">
                          <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded">Vue.js</span>
                          <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded">API Integration</span>
                          <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded">Tailwind CSS</span>
                        </div>
                        <div className="flex gap-3 md:justify-end">
                          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
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
                      <div className="absolute left-0 md:left-[-33px] top-2 w-4 h-4 bg-green-600 rounded-full border-4 border-white ring-2 ring-slate-200"></div>
                      {/* Date badge */}
                      <div className="mb-4">
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                          Winter 2026
                        </span>
                      </div>
                      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl text-slate-900">Data Visualization Tool</h3>
                          <Image className="w-10 h-10 text-green-300 stroke-[1.5] flex-shrink-0" />
                        </div>
                        <p className="text-slate-600 text-sm mb-4">
                          Built a Python Flask application that processes CSV data and generates interactive
                          charts using Chart.js.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded">Python</span>
                          <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded">Flask</span>
                          <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded">Chart.js</span>
                        </div>
                        <div className="flex gap-3">
                          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
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
                      <div className="absolute left-0 md:left-auto md:right-[-33px] top-2 w-4 h-4 bg-orange-600 rounded-full border-4 border-white ring-2 ring-slate-200"></div>
                      {/* Date badge */}
                      <div className="mb-4">
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">
                          Fall 2025
                        </span>
                      </div>
                      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl text-slate-900">Portfolio Website (v1)</h3>
                          <Image className="w-10 h-10 text-orange-300 stroke-[1.5] flex-shrink-0" />
                        </div>
                        <p className="text-slate-600 text-sm mb-4 md:text-right">
                          My first web project - a personal portfolio site built with HTML, CSS, and vanilla JavaScript.
                          Learned the fundamentals of web development.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4 md:justify-end">
                          <span className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded">HTML/CSS</span>
                          <span className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded">JavaScript</span>
                        </div>
                        <div className="flex gap-3 md:justify-end">
                          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
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
        <div className="p-12 bg-slate-50 border-t border-slate-200">
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

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-slate-900 mb-2">About this template</h3>
        <p className="text-slate-700 text-sm">
          The Timeline template displays your projects in chronological order, showing your growth and
          progression as a developer. Each project includes a reflection on what you learned, making
          it clear how your skills have evolved. Great for demonstrating continuous learning and
          showing how early projects led to more complex work.
        </p>
      </div>
    </div>
  );
}
