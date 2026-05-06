import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function ConnectGithub() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-3xl text-slate-900">
          Connect your GitHub repository
        </h1>
        <p className="text-lg text-slate-600">
          Linking to your GitHub repo is one of the strongest ways to show your work.
        </p>
      </div>

      <div className="space-y-6">
        <label className="block">
          <span className="text-slate-700 mb-3 block text-lg">
            GitHub repository URL
          </span>
          <input
            type="text"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="https://github.com/yourusername/course-scheduler"
          />
          <p className="text-sm text-slate-500 mt-2">
            Paste the full URL to your repository
          </p>
        </label>

        <div className="bg-sage-50 border border-sage-200 rounded-lg p-6">
          <h3 className="text-lg text-slate-900 mb-3">Before you share your GitHub repo</h3>
          <p className="text-slate-700 mb-4">
            A messy or incomplete GitHub repo can hurt more than help. Here's how to make it look professional:
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">1. Add a README file</h4>
              <p className="text-slate-700 mb-2">This is the first thing employers see. Include:</p>
              <ul className="space-y-1 text-slate-700 ml-6">
                <li>• What the project does (1-2 sentences)</li>
                <li>• Technologies used</li>
                <li>• How to run it (installation steps)</li>
                <li>• A screenshot or demo link (if you have one)</li>
                <li>• Your role (if it was a team project)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">2. Clean up your code</h4>
              <ul className="space-y-1 text-slate-700 ml-6">
                <li>• Remove commented-out code you're not using</li>
                <li>• Delete console.log() statements you used for debugging</li>
                <li>• Make sure variable names make sense</li>
                <li>• Add a few comments where the code isn't obvious</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">3. Remove sensitive information</h4>
              <ul className="space-y-1 text-slate-700 ml-6">
                <li>• Check for API keys or passwords in your code</li>
                <li>• Add a .gitignore file to hide sensitive files</li>
                <li>• If you accidentally committed secrets, you'll need to remove them from the history</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">4. Use clear commit messages</h4>
              <p className="text-slate-700 mb-2">
                Your recent commits show up on the main page. Instead of "fixed stuff" or "asdf", write:
              </p>
              <ul className="space-y-1 text-slate-700 ml-6">
                <li>• "Add user authentication"</li>
                <li>• "Fix course selection bug"</li>
                <li>• "Update README with installation steps"</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">5. Make the repo public (if you can)</h4>
              <p className="text-slate-700">
                Employers can't see private repos unless you give them access. If your school or project allows it,
                make it public. If not, you can mention it's private and offer to share access.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
          <h3 className="text-lg text-slate-900 mb-3">What if my repo is messy?</h3>
          <p className="text-slate-700 mb-3">
            That's normal for class projects. A few things you can do:
          </p>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Clean it up before sharing it.</strong> Spend 30 minutes following the tips above. You don't
              need to rewrite everything.
            </li>
            <li>
              <strong>Link to a specific pull request instead.</strong> If you made one clean contribution, link to
              that PR instead of the whole repo.
            </li>
            <li>
              <strong>Be honest.</strong> In your portfolio, you can say "This was a team project for class. I was
              responsible for the frontend (see the /src/components folder)."
            </li>
          </ul>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
          <h3 className="text-lg text-slate-900 mb-3">Example README template</h3>
          <div className="bg-white border border-slate-300 rounded-lg p-4 font-mono text-sm text-slate-800">
            <p className="mb-3"># Course Scheduler App</p>
            <p className="mb-3">
              A web app that helps students plan their course schedules, check prerequisites, and build balanced
              semester plans.
            </p>
            <p className="mb-3">**Built with:** React, FastAPI, PostgreSQL</p>
            <p className="mb-3">**My role:** Frontend developer (built the UI and connected it to the backend API)</p>
            <p className="mb-3">## How to run</p>
            <p>1. Clone this repo</p>
            <p>2. Install dependencies: `npm install`</p>
            <p>3. Start the app: `npm start`</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 pt-6">
        <Link
          to="/identify-skills"
          className="flex items-center gap-2 px-6 py-3 bg-terracotta-600 text-white rounded-lg hover:bg-terracotta-700 transition-all"
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
