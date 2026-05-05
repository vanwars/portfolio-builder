import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export function ProjectDetail() {
  const steps = [
    { label: 'Tell the story', completed: true, path: '/tell-story' },
    { label: 'What did you do?', completed: true, path: '/your-contribution' },
    { label: 'Add proof', completed: false, path: '/add-proof' },
    { label: 'What skills does this show?', completed: false, path: '/identify-skills' },
    { label: 'Improve resume bullet', completed: false, path: '/improve-bullet' },
    { label: 'Build portfolio entry', completed: false, path: '/build-portfolio' },
    { label: 'Match to a job', completed: false, path: '/match-job' },
  ];

  const nextStep = steps.find((step) => !step.completed);

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl text-slate-900 mb-2">Course Scheduler App</h1>
        <p className="text-lg text-slate-600">CS 361 - Software Engineering</p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
        <p className="text-slate-700 mb-1">
          <strong>Technologies:</strong> React, FastAPI, PostgreSQL, GitHub
        </p>
        <p className="text-slate-700">
          <strong>Your role:</strong> Frontend Developer
        </p>
      </div>

      {nextStep && (
        <div>
          <h2 className="text-2xl text-slate-900 mb-4">Next step</h2>
          <Link
            to={nextStep.path}
            className="block bg-blue-50 border-2 border-blue-200 rounded-lg p-8 hover:border-blue-400 transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl text-slate-900 group-hover:text-blue-700 transition-colors">
                  {nextStep.label}
                </h3>
              </div>
              <ArrowRight className="w-6 h-6 text-blue-600" />
            </div>
          </Link>
        </div>
      )}

      <div>
        <h2 className="text-2xl text-slate-900 mb-4">All steps</h2>
        <div className="space-y-2">
          {steps.map((step, index) => (
            <Link
              key={index}
              to={step.path}
              className={`block border rounded-lg p-4 transition-all ${
                step.completed
                  ? 'border-green-200 bg-green-50'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                      step.completed
                        ? 'bg-green-600 text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {step.completed ? '✓' : index + 1}
                  </div>
                  <span className={step.completed ? 'text-green-900' : 'text-slate-900'}>
                    {step.label}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
