import { GripVertical, CheckCircle2, Circle, Eye } from 'lucide-react';

export function PortfolioBuilder() {
  const sections = [
    { id: 'overview', label: 'Overview', completed: true },
    { id: 'role', label: 'My Role', completed: true },
    { id: 'process', label: 'Process', completed: true },
    { id: 'challenge', label: 'Challenge', completed: false },
    { id: 'technical', label: 'Technical Decisions', completed: false },
    { id: 'outcome', label: 'Outcome', completed: false },
    { id: 'learned', label: 'What I Learned', completed: false },
    { id: 'evidence', label: 'Evidence', completed: true },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Portfolio Builder</h1>
          <p className="text-slate-600">Assemble your case study sections.</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Course Scheduler App</h2>
              <p className="text-slate-600 text-sm">Case Study</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-right mr-3">
                <p className="text-sm text-slate-600">Progress</p>
                <p className="font-semibold text-slate-900">4/8 sections</p>
              </div>
              <div className="w-16 h-16">
                <svg className="transform -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#e2e8f0" strokeWidth="3"></circle>
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    strokeDasharray="50, 100"
                    strokeLinecap="round"
                  ></circle>
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {sections.map((section) => (
              <div
                key={section.id}
                className={`flex items-center gap-4 p-4 rounded-lg border-2 transition-all cursor-move hover:shadow-md ${
                  section.completed
                    ? 'bg-green-50 border-green-200'
                    : 'bg-white border-slate-200 hover:border-blue-300'
                }`}
              >
                <GripVertical className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {section.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-400" />
                    )}
                    <h3 className={`font-medium ${section.completed ? 'text-green-900' : 'text-slate-900'}`}>
                      {section.label}
                    </h3>
                  </div>
                </div>
                <button
                  className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                    section.completed
                      ? 'bg-white text-green-700 border border-green-300'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {section.completed ? 'Edit' : 'Start'}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-900">
              <strong>Tip:</strong> Drag sections to reorder them. Click "Start" to add content to incomplete sections.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          <h3 className="font-semibold text-slate-900 mb-4">Section: Overview</h3>
          <textarea
            className="w-full h-32 p-4 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="Write your overview..."
            defaultValue="A full-stack course scheduling application built for students to plan their academic schedules more effectively. The app helps students visualize course requirements, check prerequisites, and build balanced semester plans."
          ></textarea>
          <div className="flex gap-3 mt-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-sm">
              Save Changes
            </button>
            <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-all text-sm">
              Generate Suggestions
            </button>
          </div>
        </div>
      </div>

      <div className="lg:col-span-1">
        <div className="sticky top-24">
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900">Preview</h3>
              <Eye className="w-5 h-5 text-slate-400" />
            </div>

            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <div className="mb-6">
                <div className="w-full h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4"></div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">Course Scheduler App</h2>
                <p className="text-sm text-slate-600 mb-4">
                  A full-stack course scheduling application built for students to plan their academic schedules more
                  effectively.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase mb-2">My Role</h4>
                  <p className="text-sm text-slate-700">Frontend Developer & API Integration</p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {['React', 'FastAPI', 'PostgreSQL'].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-white text-slate-700 text-xs rounded border border-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase mb-2">Process</h4>
                  <p className="text-sm text-slate-700">
                    Collaborated with team to define requirements, built React components, integrated with backend API...
                  </p>
                </div>
              </div>
            </div>

            <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
              Export Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
