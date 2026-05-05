import { ArrowRight, CheckCircle2, Sparkles, TrendingUp, Users, Code } from 'lucide-react';

export function BulletLab() {
  const bulletOptions = [
    {
      label: 'A',
      text: 'Helped build a web app using React.',
      strength: 'weak',
      score: 2,
    },
    {
      label: 'B',
      text: 'Built React components for a course scheduling application.',
      strength: 'moderate',
      score: 3,
    },
    {
      label: 'C',
      text: 'Developed reusable React components and connected frontend views to backend API endpoints in a team-based full-stack application.',
      strength: 'strong',
      score: 5,
      isRecommended: true,
    },
  ];

  const improvements = [
    { icon: Code, label: 'Names the technology', color: 'text-blue-600' },
    { icon: CheckCircle2, label: 'States the contribution', color: 'text-green-600' },
    { icon: Users, label: 'Adds team context', color: 'text-purple-600' },
    { icon: TrendingUp, label: 'Shows technical depth', color: 'text-orange-600' },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Bullet Lab</h1>
        <p className="text-slate-600">Transform your project work into compelling resume bullets.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1">
            <h3 className="text-sm font-medium text-slate-500 mb-2">STUDENT DRAFT</h3>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-slate-900">Helped with the frontend.</p>
            </div>
          </div>
          <ArrowRight className="w-8 h-8 text-slate-400 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-sm font-medium text-slate-500 mb-2">GENERATED OPTIONS</h3>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-green-600" />
                <p className="text-sm text-green-700 font-medium">Stronger versions below</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {bulletOptions.map((option) => (
            <div
              key={option.label}
              className={`rounded-xl p-5 border-2 transition-all ${
                option.isRecommended
                  ? 'bg-green-50 border-green-400 shadow-md'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 ${
                    option.isRecommended
                      ? 'bg-green-600 text-white'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {option.label}
                </div>
                <div className="flex-1">
                  <p className="text-slate-900 mb-3">{option.text}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < option.score
                              ? option.isRecommended
                                ? 'bg-green-500'
                                : 'bg-blue-500'
                              : 'bg-slate-200'
                          }`}
                        ></div>
                      ))}
                    </div>
                    <span className={`text-sm font-medium ${
                      option.isRecommended ? 'text-green-700' : 'text-slate-600'
                    }`}>
                      {option.strength.charAt(0).toUpperCase() + option.strength.slice(1)}
                    </span>
                    {option.isRecommended && (
                      <span className="ml-auto flex items-center gap-1 text-sm text-green-700 font-medium">
                        <CheckCircle2 className="w-4 h-4" />
                        Recommended
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
          <h4 className="font-semibold text-blue-900 mb-3">Why Option C is strongest:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {improvements.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-2">
                  <Icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-sm text-slate-700">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all">
            <CheckCircle2 className="w-4 h-4" />
            Use this bullet
          </button>
          <button className="px-4 py-2 bg-white text-slate-700 rounded-lg border border-slate-200 hover:border-slate-300 transition-all">
            Make more concise
          </button>
          <button className="px-4 py-2 bg-white text-slate-700 rounded-lg border border-slate-200 hover:border-slate-300 transition-all">
            Make more technical
          </button>
          <button className="px-4 py-2 bg-white text-slate-700 rounded-lg border border-slate-200 hover:border-slate-300 transition-all">
            Make more collaboration-focused
          </button>
          <button className="px-4 py-2 bg-white text-slate-700 rounded-lg border border-slate-200 hover:border-slate-300 transition-all">
            Check for overclaiming
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-5 border border-slate-100">
          <h4 className="font-semibold text-slate-900 mb-2">Saved Bullets</h4>
          <p className="text-2xl font-bold text-blue-600">12</p>
          <p className="text-sm text-slate-600 mt-1">Ready for your resume</p>
        </div>
        <div className="bg-white rounded-lg p-5 border border-slate-100">
          <h4 className="font-semibold text-slate-900 mb-2">Projects Covered</h4>
          <p className="text-2xl font-bold text-purple-600">5</p>
          <p className="text-sm text-slate-600 mt-1">Across different experiences</p>
        </div>
        <div className="bg-white rounded-lg p-5 border border-slate-100">
          <h4 className="font-semibold text-slate-900 mb-2">Skills Highlighted</h4>
          <p className="text-2xl font-bold text-green-600">18</p>
          <p className="text-sm text-slate-600 mt-1">Employer-facing skills</p>
        </div>
      </div>
    </div>
  );
}
