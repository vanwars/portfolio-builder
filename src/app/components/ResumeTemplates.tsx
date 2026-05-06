import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

export function ResumeTemplates() {
  const templates = [
    {
      id: 1,
      name: 'Simple',
      description: 'Clean, one-column layout. Good for entry-level positions.',
      preview: 'Simple layout with clear sections for education, experience, and skills.',
      slug: 'simple',
    },
    {
      id: 2,
      name: 'Modern',
      description: 'Two-column design with a sidebar. Shows technical skills prominently.',
      preview: 'Modern design with skills sidebar and project highlights.',
      slug: 'modern',
    },
    {
      id: 3,
      name: 'Technical',
      description: 'Focused on projects and technical experience. Great for software roles.',
      preview: 'Project-focused layout with detailed technical descriptions.',
      slug: 'technical',
    },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl text-slate-900 mb-2">Resume Templates</h1>
        <p className="text-lg text-slate-600">
          Choose a template and we'll fill it with your projects and experience.
        </p>
      </div>

      <div className="space-y-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-white border-2 border-slate-200 rounded-lg overflow-hidden hover:border-blue-400 transition-all"
          >
            <div className="flex">
              <div className="w-48 bg-slate-50 border-r border-slate-200 flex items-center justify-center p-8">
                <div className="w-32 h-40 bg-white border border-slate-300 rounded shadow-sm flex items-center justify-center">
                  <FileText className="w-12 h-12 text-slate-400" />
                </div>
              </div>
              <div className="flex-1 p-6">
                <h3 className="text-xl text-slate-900 mb-2">{template.name}</h3>
                <p className="text-slate-700 mb-4">{template.description}</p>
                <p className="text-slate-600 mb-6">{template.preview}</p>
                <div className="flex gap-3">
                  <Link
                    to="/resume-builder"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all inline-block"
                  >
                    Use this template
                  </Link>
                  <Link
                    to={`/resume-template/${template.slug}`}
                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-all inline-block"
                  >
                    Preview
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <p className="text-slate-700">
          <strong>How this works:</strong> When you choose a template, we'll automatically fill it with the resume
          bullets and project descriptions you've created. You can then download it as a PDF or edit it further.
        </p>
      </div>
    </div>
  );
}
