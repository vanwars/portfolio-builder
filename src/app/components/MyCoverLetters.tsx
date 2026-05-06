import { Link } from 'react-router-dom';
import { Plus, Mail } from 'lucide-react';

export function MyCoverLetters() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl text-slate-900 mb-2">Cover Letters I've Made</h1>
        <p className="text-slate-600">
          Different cover letters tailored to specific jobs
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 text-center">
        <Mail className="w-12 h-12 text-slate-400 mx-auto mb-3" />
        <p className="text-slate-600 mb-6">You haven't written any cover letters yet</p>
        <Link
          to="/cover-letter-guide"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
        >
          <Plus className="w-5 h-5" />
          Write your first cover letter
        </Link>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg text-slate-900 mb-3">Why write cover letters?</h3>
        <p className="text-slate-700 mb-3">
          Many students skip cover letters, but they can help you stand out:
        </p>
        <ul className="space-y-2 text-slate-700">
          <li>• Shows you did more than click "Apply"</li>
          <li>• Lets you explain why you want this specific job</li>
          <li>• Gives context that your resume can't show</li>
          <li>• Demonstrates that you can write clearly</li>
        </ul>
        <p className="text-slate-700 mt-4">
          You don't need a different cover letter for every application. But having 2-3 templates for different
          types of jobs (frontend, backend, data science, etc.) makes it easier.
        </p>
      </div>
    </div>
  );
}
