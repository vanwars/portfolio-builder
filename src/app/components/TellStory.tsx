import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function TellStory() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-3xl text-slate-900">
          Tell us about your project
        </h1>
        <p className="text-lg text-slate-600">
          In your own words, what did your team build?
        </p>
      </div>

      <div className="space-y-4">
        <label className="block">
          <span className="text-slate-700 mb-3 block text-lg">
            What did you build?
          </span>
          <textarea
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[160px]"
            placeholder="Start typing here..."
          ></textarea>
        </label>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
          <p className="text-slate-700 mb-3">
            <strong>Example answer:</strong>
          </p>
          <p className="text-slate-600">
            "We built a course scheduling app for students to plan their classes. It helped students see what courses
            they needed, check prerequisites, and build a schedule for each semester."
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <p className="text-slate-700">
            <strong>Tip:</strong> Don't worry about making this sound professional yet. Just describe what the project
            was for and what it did. We'll help you refine it later.
          </p>
        </div>
      </div>

      <div className="flex gap-4 pt-6">
        <Link
          to="/your-contribution"
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
