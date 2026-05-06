import { Link } from 'react-router-dom';
import { ArrowRight, Github, Image, Link2, FileText } from 'lucide-react';

export function AddProof() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-3xl text-slate-900">
          Add one piece of proof
        </h1>
        <p className="text-lg text-slate-600">
          This helps you back up what you're saying. You can add more later.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <p className="text-slate-700">What kind of proof do you have?</p>

          <button className="w-full text-left bg-slate-50 border-2 border-slate-200 rounded-lg p-6 hover:border-sage-600 hover:bg-sage-50 transition-all group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white border border-slate-200 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:border-blue-300">
                <Github className="w-6 h-6 text-slate-600 group-hover:text-terracotta-600" />
              </div>
              <div>
                <h3 className="text-lg text-slate-900 mb-1">GitHub link</h3>
                <p className="text-slate-600">
                  A link to your repository, pull request, or commit
                </p>
              </div>
            </div>
          </button>

          <button className="w-full text-left bg-slate-50 border-2 border-slate-200 rounded-lg p-6 hover:border-sage-600 hover:bg-sage-50 transition-all group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white border border-slate-200 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:border-blue-300">
                <Image className="w-6 h-6 text-slate-600 group-hover:text-terracotta-600" />
              </div>
              <div>
                <h3 className="text-lg text-slate-900 mb-1">Screenshot</h3>
                <p className="text-slate-600">
                  A screenshot of something you built or worked on
                </p>
              </div>
            </div>
          </button>

          <button className="w-full text-left bg-slate-50 border-2 border-slate-200 rounded-lg p-6 hover:border-sage-600 hover:bg-sage-50 transition-all group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white border border-slate-200 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:border-blue-300">
                <Link2 className="w-6 h-6 text-slate-600 group-hover:text-terracotta-600" />
              </div>
              <div>
                <h3 className="text-lg text-slate-900 mb-1">Project link</h3>
                <p className="text-slate-600">
                  A link to a demo, video, or live version of your project
                </p>
              </div>
            </div>
          </button>

          <button className="w-full text-left bg-slate-50 border-2 border-slate-200 rounded-lg p-6 hover:border-sage-600 hover:bg-sage-50 transition-all group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white border border-slate-200 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:border-blue-300">
                <FileText className="w-6 h-6 text-slate-600 group-hover:text-terracotta-600" />
              </div>
              <div>
                <h3 className="text-lg text-slate-900 mb-1">Document or note</h3>
                <p className="text-slate-600">
                  Project report, documentation, feedback, or reflection notes
                </p>
              </div>
            </div>
          </button>
        </div>

        <div className="bg-sage-50 border border-sage-200 rounded-lg p-6">
          <p className="text-slate-700">
            <strong>Why add proof?</strong> When you tell an employer "I built X," they might wonder if you really did
            it yourself. A GitHub link, screenshot, or demo shows it's real. Even one piece of proof is helpful.
          </p>
        </div>
      </div>

      <div className="flex gap-4 pt-6">
        <Link
          to="/identify-skills"
          className="flex items-center gap-2 px-6 py-3 bg-terracotta-600 text-white rounded-lg hover:bg-terracotta-700 transition-all"
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
