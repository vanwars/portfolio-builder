import { Code, Users, Palette, MessageCircle, Lightbulb, CheckCircle2, AlertCircle, XCircle } from 'lucide-react';

export function SkillMap() {
  const skillClusters = [
    {
      name: 'Technical Skills',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      skills: ['React', 'FastAPI', 'PostgreSQL', 'Git', 'REST APIs', 'JavaScript', 'Python'],
    },
    {
      name: 'Collaboration',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
      skills: ['Team Communication', 'Code Review', 'Agile Workflow', 'Pair Programming'],
    },
    {
      name: 'Design & UX',
      icon: Palette,
      color: 'from-pink-500 to-pink-600',
      skills: ['UI Design', 'Responsive Design', 'User Feedback', 'Prototyping'],
    },
    {
      name: 'Communication',
      icon: MessageCircle,
      color: 'from-green-500 to-green-600',
      skills: ['Documentation', 'Client Presentations', 'Technical Writing', 'Stakeholder Updates'],
    },
    {
      name: 'Problem Solving',
      icon: Lightbulb,
      color: 'from-orange-500 to-orange-600',
      skills: ['Debugging', 'Performance Optimization', 'Error Handling', 'Architecture Design'],
    },
  ];

  const projectSkills = [
    {
      skill: 'React Development',
      evidence: 'strong',
      icon: CheckCircle2,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      skill: 'REST API Integration',
      evidence: 'strong',
      icon: CheckCircle2,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      skill: 'GitHub Pull Requests',
      evidence: 'some',
      icon: AlertCircle,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
    },
    {
      skill: 'Cloud Deployment',
      evidence: 'weak',
      icon: AlertCircle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
    },
    {
      skill: 'Agile Workflow',
      evidence: 'avoid',
      icon: XCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Skill Map</h1>
        <p className="text-slate-600">Connect your project evidence to employer-facing skills.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillClusters.map((cluster) => {
          const Icon = cluster.icon;
          return (
            <div key={cluster.name} className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${cluster.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900">{cluster.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cluster.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-50 text-slate-700 text-sm rounded-full border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
        <h2 className="text-xl font-bold text-slate-900 mb-2">Skills this project may demonstrate</h2>
        <p className="text-slate-600 mb-6">Review the evidence strength for each skill claim.</p>

        <div className="space-y-3">
          {projectSkills.map((item) => {
            const Icon = item.icon;
            const evidenceLabels: Record<string, string> = {
              strong: 'Strong evidence',
              some: 'Some evidence',
              weak: 'Weak evidence',
              avoid: 'Be careful / don\'t overclaim',
            };
            return (
              <div
                key={item.skill}
                className={`${item.bgColor} ${item.borderColor} border rounded-lg p-4 flex items-center justify-between`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${item.color}`} />
                  <div>
                    <h4 className="font-medium text-slate-900">{item.skill}</h4>
                    <p className={`text-sm ${item.color}`}>{evidenceLabels[item.evidence]}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-white text-slate-700 rounded-lg border border-slate-200 hover:border-slate-300 transition-all text-sm">
                    View Evidence
                  </button>
                  <button className="px-4 py-2 bg-white text-slate-700 rounded-lg border border-slate-200 hover:border-slate-300 transition-all text-sm">
                    Add More
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-900 mb-1">Confidence Meter Guide</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li><strong>Strong:</strong> You have clear artifacts and can explain your contribution in detail.</li>
                <li><strong>Some:</strong> You participated but evidence is limited. Add more artifacts or be specific.</li>
                <li><strong>Weak:</strong> You observed or learned but didn't directly contribute. Avoid strong claims.</li>
                <li><strong>Avoid Overclaiming:</strong> This skill isn't well-supported by your work on this project.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
