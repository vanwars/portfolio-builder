import { Link } from 'react-router-dom';
import { ArrowRight, Check, AlertCircle, X } from 'lucide-react';

export function MatchToJob() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-3xl text-slate-900">
          Match your project to a job
        </h1>
        <p className="text-lg text-slate-600">
          Paste in a job description, and we'll show you which parts of your project to highlight.
        </p>
      </div>

      <div className="space-y-4">
        <label className="block">
          <span className="text-slate-700 mb-3 block text-lg">
            Paste a job description here
          </span>
          <textarea
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[200px]"
            placeholder="Paste the full job description here..."
            defaultValue="Frontend Developer Internship

We're looking for a frontend developer intern to join our team. You'll work with React, TypeScript, and modern web technologies to build user-facing features.

Requirements:
- Experience with React
- Familiarity with API integration
- Version control with Git/GitHub
- Able to work on a team

Nice to have:
- TypeScript experience
- Automated testing
- Cloud deployment experience"
          ></textarea>
        </label>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
          Analyze this job
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl text-slate-900 mb-4">Here's what matches</h2>
          <p className="text-slate-600 mb-6">
            We compared your Course Scheduler App project to this job description.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-3">
              <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg text-green-900 mb-1">Strong matches</h3>
                <p className="text-green-700">You have good evidence for these</p>
              </div>
            </div>
            <ul className="space-y-2 ml-9">
              <li className="text-green-900">React experience</li>
              <li className="text-green-900">API integration</li>
              <li className="text-green-900">Git/GitHub version control</li>
              <li className="text-green-900">Team collaboration</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-3">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg text-yellow-900 mb-1">Gaps to consider</h3>
                <p className="text-yellow-700">The job wants these, but your project doesn't show them</p>
              </div>
            </div>
            <ul className="space-y-2 ml-9">
              <li className="text-yellow-900">TypeScript (they used JavaScript/React instead)</li>
              <li className="text-yellow-900">Automated testing</li>
              <li className="text-yellow-900">Cloud deployment</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <p className="text-slate-700 mb-3">
            <strong>What to do with this:</strong>
          </p>
          <ul className="text-slate-700 space-y-2">
            <li>• In your resume or cover letter, mention React, API integration, and GitHub</li>
            <li>• Be ready to talk about team collaboration in an interview</li>
            <li>• If you have other projects with TypeScript or testing, mention those too</li>
            <li>• It's okay to have gaps — nobody matches 100%</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg text-slate-900 mb-3">Suggested resume bullet for this job:</h3>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
            <p className="text-slate-900 text-lg">
              Developed frontend views in React and integrated with backend APIs to enable course scheduling features,
              collaborating with a team using Git and GitHub
            </p>
          </div>
          <p className="text-sm text-slate-500 mt-3">
            This version emphasizes the skills this employer is looking for
          </p>
        </div>
      </div>

      <div className="flex gap-4 pt-6">
        <Link
          to="/"
          className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
        >
          Done with this project
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
