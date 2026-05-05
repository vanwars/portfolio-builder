import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export function ChooseProject() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-3xl text-slate-900">
          What project would you like to add?
        </h1>
        <p className="text-lg text-slate-600">
          Pick a class project, team project, client work, or technical assignment you've worked on.
        </p>
      </div>

      <div className="space-y-4">
        <label className="block">
          <span className="text-slate-700 mb-2 block">Project name</span>
          <input
            type="text"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Course Scheduler App"
          />
        </label>

        <label className="block">
          <span className="text-slate-700 mb-2 block">What class or context was this for?</span>
          <input
            type="text"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="CS 361 - Software Engineering"
          />
          <p className="text-sm text-slate-500 mt-2">
            Example: "CS 290 - Web Development" or "Freelance client project"
          </p>
        </label>

        <label className="block">
          <span className="text-slate-700 mb-2 block">
            What technologies did you use? <span className="text-slate-500">(optional)</span>
          </span>
          <input
            type="text"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="React, FastAPI, PostgreSQL, GitHub"
          />
          <p className="text-sm text-slate-500 mt-2">
            Separate with commas. Example: "Python, Flask, SQLite"
          </p>
        </label>
      </div>

      <div className="flex gap-4 pt-6">
        <Link
          to="/tell-story"
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
        >
          Continue
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          to="/"
          className="px-6 py-3 text-slate-600 hover:text-slate-900 transition-colors"
        >
          Save and continue later
        </Link>
      </div>
    </div>
  );
}
