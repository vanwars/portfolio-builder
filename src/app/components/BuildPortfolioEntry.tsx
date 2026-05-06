import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function BuildPortfolioEntry() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-3xl text-slate-900">
          Build a simple portfolio entry
        </h1>
        <p className="text-lg text-slate-600">
          We'll organize what you've told us into a short portfolio case study.
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <label className="block mb-3">
            <span className="text-slate-700 text-lg">Project name</span>
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value="Course Scheduler App"
            readOnly
          />
        </div>

        <div>
          <label className="block mb-3">
            <span className="text-slate-700 text-lg">Short description</span>
          </label>
          <textarea
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[100px]"
            placeholder="One or two sentences about what the project does"
            defaultValue="A course scheduling app that helps students plan their classes, check prerequisites, and build balanced semester schedules."
          ></textarea>
          <p className="text-sm text-slate-500 mt-2">
            This will appear at the top of your portfolio entry
          </p>
        </div>

        <div>
          <label className="block mb-3">
            <span className="text-slate-700 text-lg">My role</span>
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Frontend Developer, Backend Developer, Full Stack, etc."
            defaultValue="Frontend Developer"
          />
        </div>

        <div>
          <label className="block mb-3">
            <span className="text-slate-700 text-lg">What I did</span>
          </label>
          <textarea
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[120px]"
            placeholder="A few sentences about your specific contribution"
            defaultValue="I built the frontend using React, including the pages where students view and manage their course schedules. I connected these pages to backend API endpoints so student data could be saved and retrieved."
          ></textarea>
        </div>

        <div>
          <label className="block mb-3">
            <span className="text-slate-700 text-lg">
              Technologies used
            </span>
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value="React, FastAPI, PostgreSQL, GitHub"
            readOnly
          />
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
          <p className="text-slate-700 mb-3">
            <strong>Preview:</strong>
          </p>
          <div className="bg-white rounded-lg p-6 border border-slate-200">
            <h3 className="text-xl text-slate-900 mb-2">Course Scheduler App</h3>
            <p className="text-slate-600 mb-4">
              A course scheduling app that helps students plan their classes, check prerequisites, and build balanced
              semester schedules.
            </p>
            <div className="mb-4">
              <span className="text-sm text-slate-500">Role:</span>
              <span className="text-slate-900 ml-2">Frontend Developer</span>
            </div>
            <div className="mb-4">
              <span className="text-sm text-slate-500">Technologies:</span>
              <span className="text-slate-900 ml-2">React, FastAPI, PostgreSQL, GitHub</span>
            </div>
            <p className="text-slate-700">
              I built the frontend using React, including the pages where students view and manage their course
              schedules. I connected these pages to backend API endpoints so student data could be saved and retrieved.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 pt-6">
        <Link
          to="/match-job"
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
        >
          Continue
          <ArrowRight className="w-4 h-4" />
        </Link>
        <button className="px-6 py-3 text-slate-600 hover:text-slate-900 transition-colors">
          Skip for now
        </button>
        <Link
          to="/"
          className="px-6 py-3 text-slate-600 hover:text-slate-900 transition-colors ml-auto"
        >
          Save and continue later
        </Link>
      </div>
    </div>
  );
}
