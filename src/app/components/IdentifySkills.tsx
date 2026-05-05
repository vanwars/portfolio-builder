import { Link } from 'react-router';
import { ArrowRight, Check } from 'lucide-react';

export function IdentifySkills() {
  const skills = [
    {
      name: 'React',
      description: 'Building user interfaces with React',
      confidence: 'strong',
      selected: true,
    },
    {
      name: 'API Integration',
      description: 'Connecting frontend to backend APIs',
      confidence: 'strong',
      selected: true,
    },
    {
      name: 'GitHub',
      description: 'Using Git and GitHub for version control',
      confidence: 'some',
      selected: false,
    },
    {
      name: 'Team Collaboration',
      description: 'Working with others on a shared codebase',
      confidence: 'some',
      selected: false,
    },
    {
      name: 'Database Design',
      description: 'Designing and working with databases',
      confidence: 'weak',
      selected: false,
    },
  ];

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-3xl text-slate-900">
          What skills does this show?
        </h1>
        <p className="text-lg text-slate-600">
          Based on what you told us, here are some skills this project might demonstrate. Check the ones that feel accurate.
        </p>
      </div>

      <div className="space-y-3">
        {skills.map((skill) => (
          <button
            key={skill.name}
            className={`w-full text-left border-2 rounded-lg p-6 transition-all ${
              skill.selected
                ? 'border-blue-400 bg-blue-50'
                : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-6 h-6 border-2 rounded flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  skill.selected
                    ? 'border-blue-600 bg-blue-600'
                    : 'border-slate-300 bg-white'
                }`}
              >
                {skill.selected && <Check className="w-4 h-4 text-white" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg text-slate-900">{skill.name}</h3>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      skill.confidence === 'strong'
                        ? 'bg-green-100 text-green-700'
                        : skill.confidence === 'some'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-orange-100 text-orange-700'
                    }`}
                  >
                    {skill.confidence === 'strong'
                      ? 'Strong evidence'
                      : skill.confidence === 'some'
                      ? 'Some evidence'
                      : 'Limited evidence'}
                  </span>
                </div>
                <p className="text-slate-600">{skill.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <p className="text-slate-700 mb-3">
          <strong>What do these labels mean?</strong>
        </p>
        <ul className="text-slate-700 space-y-2">
          <li>
            <strong>Strong evidence:</strong> You can clearly show and explain this skill
          </li>
          <li>
            <strong>Some evidence:</strong> You did this, but your contribution was more limited
          </li>
          <li>
            <strong>Limited evidence:</strong> You observed or learned about this, but didn't do much of it yourself
          </li>
        </ul>
        <p className="text-slate-700 mt-3">
          It's better to be honest. If you claim a skill you can't back up, an interviewer will notice.
        </p>
      </div>

      <div className="flex gap-4 pt-6">
        <Link
          to="/improve-bullet"
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
