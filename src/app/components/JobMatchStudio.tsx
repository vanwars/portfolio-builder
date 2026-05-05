import { Target, CheckCircle2, AlertCircle, XCircle, TrendingUp, FileText, MessageSquare, Lightbulb } from 'lucide-react';

export function JobMatchStudio() {
  const strongMatches = [
    { skill: 'React Components', evidence: 'Course Scheduler App, Weather Dashboard' },
    { skill: 'API Integration', evidence: 'Course Scheduler App' },
    { skill: 'GitHub Workflow', evidence: 'Multiple projects with PR history' },
  ];

  const someEvidence = [
    { skill: 'UX Feedback', evidence: 'User testing sessions documented' },
    { skill: 'Testing', evidence: 'Limited test coverage shown' },
  ];

  const weakOrMissing = [
    { skill: 'TypeScript', gap: true },
    { skill: 'Automated Testing', gap: true },
    { skill: 'Production Deployment', gap: true },
  ];

  const recommendations = [
    'Feature "Course Scheduler App" first in your portfolio',
    'Use the React/API integration bullet from Bullet Lab',
    'Link the dashboard screenshot and GitHub PR #14',
    'Do not overemphasize cloud deployment (weak evidence)',
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Job Match Studio</h1>
        <p className="text-slate-600">Find your strongest evidence for this job.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <h3 className="font-semibold text-slate-900 mb-3">Paste a job description</h3>
        <textarea
          className="w-full h-40 p-4 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none mb-3"
          placeholder="Paste the job description here..."
          defaultValue="Frontend Developer Internship

We're looking for a frontend developer intern to join our team. You'll work with React, TypeScript, and modern web technologies to build user-facing features. Experience with API integration, testing, and version control (Git/GitHub) is required. Familiarity with cloud deployment is a plus.

Responsibilities:
- Build and maintain React components
- Integrate with backend APIs
- Write automated tests
- Participate in code reviews
- Deploy to production environments"
        ></textarea>
        <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
          Analyze Match
        </button>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Frontend Developer Internship</h2>
            <p className="text-slate-600">Match Analysis</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
            <h3 className="font-semibold text-slate-900">Strong Matches</h3>
          </div>
          <div className="space-y-3">
            {strongMatches.map((item, index) => (
              <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-3">
                <h4 className="font-medium text-green-900 text-sm mb-1">{item.skill}</h4>
                <p className="text-xs text-green-700">{item.evidence}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-6 h-6 text-yellow-600" />
            <h3 className="font-semibold text-slate-900">Some Evidence</h3>
          </div>
          <div className="space-y-3">
            {someEvidence.map((item, index) => (
              <div key={index} className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <h4 className="font-medium text-yellow-900 text-sm mb-1">{item.skill}</h4>
                <p className="text-xs text-yellow-700">{item.evidence}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          <div className="flex items-center gap-2 mb-4">
            <XCircle className="w-6 h-6 text-red-600" />
            <h3 className="font-semibold text-slate-900">Weak or Missing</h3>
          </div>
          <div className="space-y-3">
            {weakOrMissing.map((item, index) => (
              <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-3">
                <h4 className="font-medium text-red-900 text-sm mb-1">{item.skill}</h4>
                <p className="text-xs text-red-700">{item.gap ? 'Skill gap - consider building this' : 'Limited evidence'}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="w-6 h-6 text-blue-600" />
          <h3 className="font-semibold text-slate-900">Recommendations</h3>
        </div>
        <ul className="space-y-2">
          {recommendations.map((rec, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span className="text-slate-700">{rec}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100">
        <div className="border-b border-slate-200">
          <div className="flex gap-4 px-6">
            <button className="px-4 py-3 border-b-2 border-blue-600 text-blue-600 font-medium">
              Tailored Resume Bullets
            </button>
            <button className="px-4 py-3 text-slate-600 hover:text-slate-900">
              Portfolio Projects to Feature
            </button>
            <button className="px-4 py-3 text-slate-600 hover:text-slate-900">
              Interview Talking Points
            </button>
            <button className="px-4 py-3 text-slate-600 hover:text-slate-900">
              Skill Gaps to Work On
            </button>
          </div>
        </div>

        <div className="p-6">
          <h4 className="font-semibold text-slate-900 mb-4">Tailored Resume Bullets</h4>
          <div className="space-y-4">
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-start justify-between mb-2">
                <span className="text-xs text-slate-500 uppercase tracking-wide">Recommended #1</span>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Strong match</span>
              </div>
              <p className="text-slate-900">
                Developed reusable React components and connected frontend views to backend API endpoints in a team-based
                full-stack application serving 200+ students.
              </p>
              <div className="flex gap-2 mt-3">
                <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-all">
                  Copy
                </button>
                <button className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm hover:bg-slate-200 transition-all">
                  Edit
                </button>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-start justify-between mb-2">
                <span className="text-xs text-slate-500 uppercase tracking-wide">Recommended #2</span>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Strong match</span>
              </div>
              <p className="text-slate-900">
                Collaborated with team using GitHub workflow including pull requests, code reviews, and version control to
                deliver features on schedule.
              </p>
              <div className="flex gap-2 mt-3">
                <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-all">
                  Copy
                </button>
                <button className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm hover:bg-slate-200 transition-all">
                  Edit
                </button>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 opacity-60">
              <div className="flex items-start justify-between mb-2">
                <span className="text-xs text-slate-500 uppercase tracking-wide">Use Carefully</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">Weak evidence</span>
              </div>
              <p className="text-slate-900">
                Gained exposure to deployment workflows and cloud infrastructure concepts through team collaboration.
              </p>
              <div className="flex gap-2 mt-3">
                <button className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm hover:bg-slate-200 transition-all">
                  View Warning
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
