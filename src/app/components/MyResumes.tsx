import { Link } from 'react-router';
import { Plus, FileText, Download, Edit } from 'lucide-react';

export function MyResumes() {
  // Sample data - in real app this would be from database
  const resumes = [
    {
      id: 1,
      name: 'Frontend Developer Resume',
      lastEdited: 'May 3, 2026',
      sections: ['Bio', '3 Skills', '1 Project'],
    },
  ];

  const hasResumes = resumes.length > 0;

  return (
    <div className="space-y-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl text-slate-900 mb-2">Resumes I've Made</h1>
          <p className="text-slate-600">
            Different versions of your resume tailored to specific jobs
          </p>
        </div>
        {hasResumes && (
          <Link
            to="/resume-templates"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            <Plus className="w-5 h-5" />
            New Resume
          </Link>
        )}
      </div>

      {hasResumes ? (
        <div className="space-y-4">
          {resumes.map((resume) => (
            <div
              key={resume.id}
              className="bg-white border border-slate-200 rounded-lg p-6"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-xl text-slate-900 mb-1">{resume.name}</h3>
                  <p className="text-sm text-slate-600">
                    Last edited {resume.lastEdited}
                  </p>
                  <div className="flex gap-2 mt-2">
                    {resume.sections.map((section, i) => (
                      <span key={i} className="text-xs text-slate-500">
                        {section}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-3 pt-4 border-t border-slate-100">
                <Link
                  to={`/resume-builder/${resume.id}`}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                >
                  <Edit className="w-4 h-4" />
                  Edit
                </Link>
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-all">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
                <button className="px-4 py-2 text-slate-600 hover:text-slate-900 transition-colors">
                  Duplicate
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
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
      )}

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
