import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export function YourContribution() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-3xl text-slate-900">
          What did you personally do?
        </h1>
        <p className="text-lg text-slate-600">
          If you worked on a team, what part were you responsible for?
        </p>
      </div>

      <div className="space-y-4">
        <label className="block">
          <span className="text-slate-700 mb-3 block text-lg">
            Describe your contribution
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
          <p className="text-slate-600 mb-4">
            "I worked on the frontend using React. I built the pages where students could see their schedule and add
            classes. I also connected those pages to the backend so the data would save."
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <p className="text-slate-700 mb-3">
            <strong>It's okay if you:</strong>
          </p>
          <ul className="text-slate-700 space-y-2">
            <li>• Worked on just one part of a bigger project</li>
            <li>• Followed instructions or a tutorial for some of it</li>
            <li>• Got help from teammates or your instructor</li>
            <li>• Only did a small piece</li>
          </ul>
          <p className="text-slate-700 mt-3">
            The goal is to be honest about what <em>you</em> did, so you can talk about it confidently in an interview.
          </p>
        </div>
      </div>

      <div className="flex gap-4 pt-6">
        <Link
          to="/add-proof"
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
