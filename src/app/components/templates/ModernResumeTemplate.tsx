import { Link } from 'react-router';
import { ArrowLeft, Download, Mail, MapPin, Github, Linkedin } from 'lucide-react';

export function ModernResumeTemplate() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <Link to="/resume-templates" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
          <ArrowLeft className="w-4 h-4" />
          Back to templates
        </Link>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-all">
            <Download className="w-4 h-4" />
            Download PDF
          </button>
          <Link
            to="/resume-builder"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            Use this template
          </Link>
        </div>
      </div>

      <div className="bg-white border-2 border-slate-300 rounded-lg shadow-lg max-w-4xl mx-auto">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-slate-900 text-white p-8 space-y-6">
            <div className="space-y-3">
              <h1 className="text-2xl">Your Name</h1>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>your.email@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Portland, OR</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <span>github.com/username</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  <span>linkedin.com/in/username</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-sm uppercase tracking-wide text-slate-400">Technical Skills</h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium mb-1">Languages</p>
                  <p className="text-xs text-slate-300">JavaScript, Python, HTML/CSS, SQL</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Frameworks</p>
                  <p className="text-xs text-slate-300">React, Node.js, Express</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Tools</p>
                  <p className="text-xs text-slate-300">Git, PostgreSQL, VS Code</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-sm uppercase tracking-wide text-slate-400">Education</h2>
              <div>
                <p className="text-sm font-medium">Oregon State University</p>
                <p className="text-xs text-slate-300">B.S. Computer Science</p>
                <p className="text-xs text-slate-400">Expected 2027</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8 space-y-6">
            <div className="space-y-2">
              <h2 className="text-sm uppercase tracking-wide text-slate-500 border-b border-slate-200 pb-1">Summary</h2>
              <p className="text-slate-700 text-sm leading-relaxed">
                Computer science student passionate about building user-friendly web applications.
                Experience developing full-stack projects using modern frameworks and collaborating
                on team-based software engineering coursework.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-wide text-slate-500 border-b border-slate-200 pb-1">Projects</h2>

              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-slate-900 font-medium">Course Scheduler App</h3>
                  <span className="text-xs text-slate-500">Fall 2026</span>
                </div>
                <p className="text-slate-700 text-sm">
                  Developed frontend views in React and connected them to backend API endpoints to enable students
                  to view and manage course schedules
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">REST API</span>
                  <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">JavaScript</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-slate-900 font-medium">Weather Dashboard</h3>
                  <span className="text-xs text-slate-500">Spring 2026</span>
                </div>
                <p className="text-slate-700 text-sm">
                  Built a responsive weather dashboard using Vue.js and the OpenWeather API to display real-time
                  weather data
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">Vue.js</span>
                  <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">API Integration</span>
                  <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">Responsive Design</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-sm uppercase tracking-wide text-slate-500 border-b border-slate-200 pb-1">Experience</h2>
              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-slate-900 font-medium">Teaching Assistant</h3>
                  <span className="text-xs text-slate-500">Sept 2025 - Present</span>
                </div>
                <p className="text-sm text-slate-600">Oregon State University</p>
                <p className="text-slate-700 text-sm">
                  Assist students in CS 161 (Intro to Computer Science) during lab sessions and office hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-4xl mx-auto">
        <h3 className="text-slate-900 mb-2">About this template</h3>
        <p className="text-slate-700 text-sm">
          The Modern template uses a two-column layout with a dark sidebar for contact info and skills.
          It highlights technical skills prominently and uses tags to show technologies used in each project.
          Great for technical roles where you want to make your skills immediately visible.
        </p>
      </div>
    </div>
  );
}
