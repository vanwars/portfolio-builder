import { Link } from 'react-router';
import { Plus, FileText } from 'lucide-react';

export function MyResumes() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl text-slate-900 mb-2">Resumes I've Made</h1>
        <p className="text-slate-600">
          Different versions of your resume tailored to specific jobs
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 text-center">
        <FileText className="w-12 h-12 text-slate-400 mx-auto mb-3" />
        <p className="text-slate-600 mb-6">You haven't created any resumes yet</p>
        <Link
          to="/resume-templates"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
        >
          <Plus className="w-5 h-5" />
          Create your first resume
        </Link>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg text-slate-900 mb-3">Why create multiple resumes?</h3>
        <p className="text-slate-700 mb-3">
          Different jobs want to see different things. You might have:
        </p>
        <ul className="space-y-2 text-slate-700">
          <li>• A resume focused on frontend work (React, JavaScript, UI)</li>
          <li>• A resume focused on backend work (Python, APIs, databases)</li>
          <li>• A resume for data science roles (Python, pandas, visualization)</li>
          <li>• A general resume that shows a bit of everything</li>
        </ul>
        <p className="text-slate-700 mt-4">
          Once you create a resume, you can duplicate it and adjust it for different types of jobs.
        </p>
      </div>
    </div>
  );
}
