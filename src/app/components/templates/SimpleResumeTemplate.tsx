import { Link } from 'react-router';
import { ArrowLeft, Download } from 'lucide-react';

export function SimpleResumeTemplate() {
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

      <div className="bg-white border-2 border-slate-300 rounded-lg shadow-lg max-w-2xl mx-auto">
        <div className="p-12 space-y-6">
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-4">
            <h1 className="text-3xl text-slate-900 mb-1">Your Name</h1>
            <p className="text-slate-600">your.email@example.com | (555) 123-4567 | Portland, OR</p>
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <h2 className="text-lg text-slate-900 uppercase tracking-wide">Summary</h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              Computer science student at Oregon State University interested in web development and data science.
              Built several full-stack applications using React and Python. Looking for internship opportunities
              to contribute to real-world projects and learn from experienced developers.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-lg text-slate-900 uppercase tracking-wide">Education</h2>
            <div>
              <div className="flex justify-between items-baseline">
                <p className="text-slate-900">Oregon State University</p>
                <p className="text-sm text-slate-600">Expected 2027</p>
              </div>
              <p className="text-slate-700 text-sm">Bachelor of Science in Computer Science</p>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <h2 className="text-lg text-slate-900 uppercase tracking-wide">Technical Skills</h2>
            <p className="text-slate-700 text-sm">
              <strong>Languages:</strong> JavaScript, Python, HTML/CSS, SQL
            </p>
            <p className="text-slate-700 text-sm">
              <strong>Frameworks & Tools:</strong> React, Node.js, Git, PostgreSQL
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-lg text-slate-900 uppercase tracking-wide">Projects</h2>

            <div className="space-y-1">
              <div className="flex justify-between items-baseline">
                <p className="text-slate-900">Course Scheduler App</p>
                <p className="text-sm text-slate-600">Fall 2026</p>
              </div>
              <p className="text-slate-700 text-sm">
                Developed frontend views in React and connected them to backend API endpoints to enable students
                to view and manage course schedules
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-baseline">
                <p className="text-slate-900">Weather Dashboard</p>
                <p className="text-sm text-slate-600">Spring 2026</p>
              </div>
              <p className="text-slate-700 text-sm">
                Built a responsive weather dashboard using Vue.js and the OpenWeather API to display real-time
                weather data
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
        <h3 className="text-slate-900 mb-2">About this template</h3>
        <p className="text-slate-700 text-sm">
          The Simple template uses a clean, one-column layout with clear section headings.
          It's easy to read and works well for entry-level positions where you want to
          present information clearly without too much visual complexity.
        </p>
      </div>
    </div>
  );
}
