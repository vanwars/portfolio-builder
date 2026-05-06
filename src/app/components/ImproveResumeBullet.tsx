import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';

export function ImproveResumeBullet() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-3xl text-slate-900">
          Let's create a resume bullet
        </h1>
        <p className="text-lg text-slate-600">
          We'll turn what you told us into a clear, professional resume bullet.
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-slate-700 mb-3">Your original description:</p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
            <p className="text-slate-900">
              "I worked on the frontend using React. I built the pages where students could see their schedule and add
              classes. I also connected those pages to the backend so the data would save."
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <ArrowDown className="w-6 h-6 text-slate-400" />
        </div>

        <div>
          <p className="text-slate-700 mb-3">Here's a stronger version:</p>
          <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-6">
            <p className="text-slate-900 text-lg">
              Developed frontend views in React and connected them to backend API endpoints to enable students to view
              and manage course schedules
            </p>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
          <p className="text-slate-700 mb-3">
            <strong>What makes this stronger?</strong>
          </p>
          <ul className="text-slate-700 space-y-2">
            <li>• Uses "Developed" instead of "worked on" (more specific action)</li>
            <li>• Mentions the technology (React, API endpoints)</li>
            <li>• Explains what the feature did for users</li>
            <li>• Sounds professional without being dishonest</li>
          </ul>
        </div>

        <div className="space-y-3">
          <p className="text-slate-700">Does this feel accurate?</p>
          <div className="flex gap-3">
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all">
              Yes, this is accurate
            </button>
            <button className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-all">
              Make it simpler
            </button>
            <button className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-all">
              Try a different version
            </button>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <p className="text-slate-700">
          <strong>Remember:</strong> This bullet should feel true to what you actually did. If it doesn't, we can
          adjust it. The goal is to sound professional while staying honest.
        </p>
      </div>

      <div className="flex gap-4 pt-6">
        <Link
          to="/build-portfolio"
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
