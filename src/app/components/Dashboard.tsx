import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="space-y-16">
      <div className="space-y-3">
        <h1 className="text-3xl text-slate-900">
          DraftPath
        </h1>
        <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">
          Translate experience into evidence-backed career materials.
        </p>
        <p className="text-lg text-slate-600">
          A guided platform for helping learners, workers, and career changers communicate their skills, decisions, contributions, and growth across resumes, portfolios, interviews, and advancement opportunities.
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg text-slate-700 mb-4">Pick up where you left off</h2>

          <Link
            to="/project/1"
            className="block bg-gradient-to-br from-sage-50 to-sage-200 border-2 border-sage-200 rounded-xl p-8 hover:border-sage-600 hover:shadow-lg transition-all group"
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl text-slate-900 mb-2 group-hover:text-terracotta-700 transition-colors">
                  Continue: Course Scheduler App
                </h3>
                <p className="text-slate-700">CS 361 - Software Engineering</p>
              </div>

              <div className="flex items-center gap-2 text-terracotta-700">
                <span className="text-sm font-medium">Continue reflecting on your project</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </Link>

          <p className="text-sm text-slate-500 mt-3">
            We'll walk you through describing what you built, adding proof, and creating resume bullets.
          </p>
        </div>

        <div className="pt-8 border-t border-slate-200">
          <p className="text-slate-600 mb-4">
            Want to work on something else?
          </p>

          <div className="space-y-3">
            <Link
              to="/choose-project"
              className="block bg-white border border-slate-200 rounded-lg p-5 hover:border-slate-300 transition-all text-slate-700 hover:text-slate-900"
            >
              <div className="flex items-center justify-between">
                <span>Add a different project</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </div>
            </Link>

            <Link
              to="/my-projects"
              className="block bg-white border border-slate-200 rounded-lg p-5 hover:border-slate-300 transition-all text-slate-700 hover:text-slate-900"
            >
              <div className="flex items-center justify-between">
                <span>View all your projects</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
        <p className="text-slate-700 text-sm">
          Once you've worked through a project, you can use our templates to create a resume or portfolio.
          Or add your work history and other information to make everything complete.
        </p>
      </div>
    </div>
  );
}
