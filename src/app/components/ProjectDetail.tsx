import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function ProjectDetail() {
  const steps = [
    {
      label: 'Tell the story',
      helper: 'Describe what you built in your own words',
      completed: true,
      path: '/tell-story'
    },
    {
      label: 'What did you do?',
      helper: 'Explain your specific contribution',
      completed: true,
      path: '/your-contribution'
    },
    {
      label: 'Add proof',
      helper: 'Show evidence that you did this work',
      completed: false,
      path: '/add-proof'
    },
    {
      label: 'What skills does this show?',
      helper: 'Identify which skills you can talk about',
      completed: false,
      path: '/identify-skills'
    },
    {
      label: 'Improve your resume bullet',
      helper: 'Turn your description into a professional bullet point',
      completed: false,
      path: '/improve-bullet'
    },
    {
      label: 'Build portfolio entry',
      helper: 'Create a short case study',
      completed: false,
      path: '/build-portfolio'
    },
    {
      label: 'Match to a job',
      helper: 'See how this project fits a job description',
      completed: false,
      path: '/match-job'
    },
  ];

  const nextStep = steps.find((step) => !step.completed);

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl text-slate-900 mb-2">Course Scheduler App</h1>
        <p className="text-slate-600">CS 361 - Software Engineering</p>
      </div>

      {nextStep && (
        <div>
          <p className="text-slate-700 mb-4">Next step:</p>
          <Link
            to={nextStep.path}
            className="block bg-gradient-to-br from-sage-50 to-sage-200 border-2 border-sage-200 rounded-xl p-8 hover:border-sage-600 hover:shadow-lg transition-all group"
          >
            <div className="space-y-3">
              <h2 className="text-2xl text-slate-900 group-hover:text-terracotta-700 transition-colors">
                {nextStep.label}
              </h2>
              <p className="text-slate-700">
                {nextStep.helper}
              </p>
              <div className="flex items-center gap-2 text-terracotta-700 pt-2">
                <span className="text-sm font-medium">Continue</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </Link>
        </div>
      )}

      <div className="pt-8 border-t border-slate-200">
        <p className="text-slate-600 mb-6">All steps for this project:</p>
        <div className="space-y-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`border rounded-lg p-4 ${
                step.completed
                  ? 'border-green-200 bg-green-50'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 ${
                    step.completed
                      ? 'bg-green-600 text-white'
                      : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {step.completed ? '✓' : index + 1}
                </div>
                <div className="flex-1">
                  <div className={`font-medium ${step.completed ? 'text-green-900' : 'text-slate-900'}`}>
                    {step.label}
                  </div>
                  <p className={`text-sm mt-1 ${step.completed ? 'text-green-700' : 'text-slate-600'}`}>
                    {step.helper}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
        <p className="text-sm text-slate-700">
          You can work through these steps in order, or skip around. Everything saves automatically so you can come back anytime.
        </p>
      </div>
    </div>
  );
}
