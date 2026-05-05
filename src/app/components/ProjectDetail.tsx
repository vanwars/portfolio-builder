import { Link } from 'react-router';
import { ArrowLeft, Users, Code, CheckCircle2, FileText, Briefcase, TrendingUp } from 'lucide-react';

export function ProjectDetail() {
  const milestones = [
    { label: 'Prototype', date: 'Week 4', status: 'completed' },
    { label: 'API Integration', date: 'Week 6', status: 'completed' },
    { label: 'User Feedback', date: 'Week 8', status: 'completed' },
    { label: 'Final Demo', date: 'Week 10', status: 'current' },
  ];

  const progressSections = [
    { label: 'Story', value: 70, icon: FileText, color: 'blue' },
    { label: 'Evidence', value: 50, icon: CheckCircle2, color: 'green' },
    { label: 'Resume Bullets', value: 80, icon: TrendingUp, color: 'purple' },
    { label: 'Portfolio Case Study', value: 40, icon: Briefcase, color: 'orange' },
  ];

  return (
    <div className="space-y-6">
      <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Dashboard
      </Link>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Course Scheduler App</h1>
            <p className="text-slate-600">CS 361 - Software Engineering</p>
          </div>
          <div className="flex gap-2">
            <Link
              to="/story-builder"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
            >
              Continue Reflection
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Code className="w-5 h-5 text-slate-600" />
              <span className="font-medium text-slate-700">Technologies</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['React', 'FastAPI', 'PostgreSQL', 'GitHub'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white text-slate-700 rounded-md text-sm border border-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-slate-600" />
              <span className="font-medium text-slate-700">Team & Role</span>
            </div>
            <p className="text-sm text-slate-600">Team of 4</p>
            <p className="font-medium text-slate-900">Frontend + API Integration</p>
          </div>

          <div className="bg-slate-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-5 h-5 text-slate-600" />
              <span className="font-medium text-slate-700">Skill Badges</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['React', 'API Integration', 'GitHub Workflow', 'Team Collaboration', 'UX Feedback'].map((skill) => (
                <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="font-semibold text-slate-900 mb-4">Progress</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {progressSections.map((section) => {
              const Icon = section.icon;
              const colorMap: Record<string, { bg: string; text: string; bar: string }> = {
                blue: { bg: 'bg-blue-50', text: 'text-blue-700', bar: 'bg-blue-500' },
                green: { bg: 'bg-green-50', text: 'text-green-700', bar: 'bg-green-500' },
                purple: { bg: 'bg-purple-50', text: 'text-purple-700', bar: 'bg-purple-500' },
                orange: { bg: 'bg-orange-50', text: 'text-orange-700', bar: 'bg-orange-500' },
              };
              const colors = colorMap[section.color];
              return (
                <div key={section.label} className={`${colors.bg} rounded-lg p-4`}>
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className={`w-4 h-4 ${colors.text}`} />
                    <span className="text-sm font-medium text-slate-700">{section.label}</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-2">{section.value}%</div>
                  <div className="w-full bg-white rounded-full h-2">
                    <div className={`${colors.bar} h-2 rounded-full`} style={{ width: `${section.value}%` }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900 mb-4">Project Timeline</h3>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200"></div>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start gap-4">
                  <div
                    className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center ${
                      milestone.status === 'completed'
                        ? 'bg-green-500'
                        : milestone.status === 'current'
                        ? 'bg-blue-500 ring-4 ring-blue-100'
                        : 'bg-slate-300'
                    }`}
                  >
                    {milestone.status === 'completed' && <CheckCircle2 className="w-5 h-5 text-white" />}
                    {milestone.status === 'current' && <div className="w-3 h-3 bg-white rounded-full"></div>}
                  </div>
                  <div className="flex-1 bg-slate-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-slate-900">{milestone.label}</h4>
                      <span className="text-sm text-slate-600">{milestone.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
