import { Image, Github, Figma, Video, FileText, Code, MessageSquare, Plus } from 'lucide-react';

export function EvidenceBoard() {
  const evidenceItems = [
    {
      type: 'Screenshot',
      title: 'Dashboard UI Implementation',
      description: 'Shows UI implementation',
      icon: Image,
      color: 'from-blue-500 to-blue-600',
      claim: 'React component development',
    },
    {
      type: 'GitHub PR',
      title: 'Pull Request #14',
      description: 'Shows feature contribution',
      icon: Github,
      color: 'from-purple-500 to-purple-600',
      claim: 'API integration & error handling',
    },
    {
      type: 'Figma',
      title: 'Initial Prototype',
      description: 'Shows design process',
      icon: Figma,
      color: 'from-pink-500 to-pink-600',
      claim: 'UX design collaboration',
    },
    {
      type: 'Test Results',
      title: 'API Test Results',
      description: 'Shows backend integration',
      icon: Code,
      color: 'from-green-500 to-green-600',
      claim: 'Backend API integration',
    },
    {
      type: 'Feedback',
      title: 'Client Feedback Notes',
      description: 'Shows stakeholder communication',
      icon: MessageSquare,
      color: 'from-orange-500 to-orange-600',
      claim: 'User feedback integration',
    },
    {
      type: 'Documentation',
      title: 'Component Documentation',
      description: 'Shows technical writing',
      icon: FileText,
      color: 'from-teal-500 to-teal-600',
      claim: 'Technical documentation',
    },
  ];

  const uploadOptions = [
    { label: 'Add GitHub Link', icon: Github },
    { label: 'Add Screenshot', icon: Image },
    { label: 'Add Figma File', icon: Figma },
    { label: 'Add Demo Video', icon: Video },
    { label: 'Add Reflection Note', icon: FileText },
    { label: 'Add Code Snippet', icon: Code },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Evidence Board</h1>
          <p className="text-slate-600">Connect artifacts to your professional claims.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
          <Plus className="w-5 h-5" />
          Add Evidence
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <h3 className="font-semibold text-slate-900 mb-4">Quick Add</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {uploadOptions.map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.label}
                className="flex flex-col items-center gap-2 p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
              >
                <Icon className="w-6 h-6 text-slate-600" />
                <span className="text-xs text-slate-700 text-center">{option.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {evidenceItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all group"
            >
              <div className={`bg-gradient-to-br ${item.color} h-32 flex items-center justify-center`}>
                <Icon className="w-12 h-12 text-white opacity-80" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wide">{item.type}</span>
                    <h3 className="font-semibold text-slate-900 mt-1 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-3">{item.description}</p>
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <div className="flex-1">
                    <p className="text-xs text-slate-500 mb-1">Supports claim:</p>
                    <p className="text-sm font-medium text-slate-900">{item.claim}</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-sm">
                    View
                  </button>
                  <button className="flex-1 px-3 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-all text-sm">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-100">
        <h3 className="font-semibold text-slate-900 mb-2">Tips for Strong Evidence</h3>
        <ul className="space-y-2 text-slate-700">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>Screenshots should show your actual work, not just the final product</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>GitHub links should point to specific PRs or commits you authored</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>Code snippets should demonstrate technical decisions you made</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>Feedback notes should show how you responded to user or client input</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
