import { Link } from 'react-router';
import { ArrowRight, Upload } from 'lucide-react';

export function AddScreenshot() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-3xl text-slate-900">
          Add a screenshot
        </h1>
        <p className="text-lg text-slate-600">
          A screenshot shows what you actually built. It helps employers see your work.
        </p>
      </div>

      <div className="space-y-8">
        <div className="border-2 border-dashed border-slate-300 rounded-lg p-12 text-center hover:border-blue-400 hover:bg-blue-50 transition-all cursor-pointer">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center">
              <Upload className="w-8 h-8 text-slate-600" />
            </div>
            <div>
              <p className="text-lg text-slate-900 mb-1">Click to upload a screenshot</p>
              <p className="text-slate-600">or drag and drop</p>
            </div>
            <p className="text-sm text-slate-500">PNG, JPG, or GIF</p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg text-slate-900 mb-3">Tips for good screenshots</h3>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>
                <strong>Show your work, not just the final product.</strong> If you built a specific page or feature,
                screenshot that part.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>
                <strong>Make sure it's clear and readable.</strong> Take the screenshot on a larger screen if possible.
                Avoid tiny text.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>
                <strong>Remove personal or sensitive information.</strong> Blur out real student data, API keys, or
                anything private.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>
                <strong>Multiple screenshots are fine.</strong> If you worked on several features, you can upload more
                than one.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>
                <strong>Context helps.</strong> A screenshot of a form you built is more useful than a screenshot of a
                login page everyone uses.
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
          <h3 className="text-lg text-slate-900 mb-3">What should I screenshot?</h3>
          <p className="text-slate-700 mb-3">Here are some examples:</p>
          <ul className="space-y-2 text-slate-700">
            <li>• A page or feature you built</li>
            <li>• The user interface you designed</li>
            <li>• A data visualization or chart you created</li>
            <li>• Before and after comparisons (if you improved something)</li>
            <li>• The app running with real data</li>
          </ul>
        </div>
      </div>

      <div className="flex gap-4 pt-6">
        <Link
          to="/identify-skills"
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
