import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-4xl text-slate-900">
          Turn your class projects into portfolio stories
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          We'll help you reflect on what you built, explain what you learned, and show your work to employers.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl text-slate-900">
          Let's start with one project
        </h2>

        <Link
          to="/choose-project"
          className="block bg-slate-50 border-2 border-slate-200 rounded-lg p-8 hover:border-blue-400 hover:bg-blue-50 transition-all group"
        >
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h3 className="text-xl text-slate-900 group-hover:text-blue-700 transition-colors">
                Add a new project
              </h3>
              <p className="text-slate-600">
                Tell us about something you built for a class, team, or client
              </p>
            </div>
            <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors" />
          </div>
        </Link>

        <div className="pt-8 border-t border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <p className="text-slate-600">
              Or continue working on a project you started
            </p>
            <Link to="/my-projects" className="text-blue-600 hover:text-blue-700">
              View all projects
            </Link>
          </div>

          <Link
            to="/project/1"
            className="block bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-300 transition-all"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg text-slate-900">Course Scheduler App</h3>
                <p className="text-slate-600 mt-1">CS 361 - Software Engineering</p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400" />
            </div>
          </Link>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <p className="text-slate-700 mb-4">
          <strong>How this works:</strong> We'll ask you a few questions about a project you worked on.
          Then we'll help you turn your answers into resume bullets, portfolio entries, and interview talking points.
          You can save your progress anytime and come back later.
        </p>
        <div className="flex gap-4 pt-4 border-t border-blue-200">
          <Link to="/resume-templates" className="text-blue-700 hover:text-blue-900 underline">
            Browse resume templates
          </Link>
          <Link to="/portfolio-templates" className="text-blue-700 hover:text-blue-900 underline">
            Browse portfolio templates
          </Link>
        </div>
      </div>
    </div>
  );
}
