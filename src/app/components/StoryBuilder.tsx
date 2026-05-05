import { CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';

export function StoryBuilder() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Story Builder</h1>
        <p className="text-slate-600">Let's turn your project experience into a compelling story.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
        <div className="space-y-6 mb-8">
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="bg-slate-50 rounded-2xl rounded-tl-none p-4">
                <p className="text-slate-900">Tell me about something you built or helped build.</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-slate-600 font-semibold">You</span>
            </div>
            <div className="flex-1">
              <div className="bg-blue-50 rounded-2xl rounded-tl-none p-4 border border-blue-100">
                <p className="text-slate-900">
                  We built a course scheduling app for students to plan their classes. I worked on the frontend using
                  React.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="bg-slate-50 rounded-2xl rounded-tl-none p-4">
                <p className="text-slate-900">Great! What part were you personally responsible for?</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-slate-600 font-semibold">You</span>
            </div>
            <div className="flex-1">
              <div className="bg-blue-50 rounded-2xl rounded-tl-none p-4 border border-blue-100">
                <p className="text-slate-900">
                  I helped with the frontend and connected some pages to the backend.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="bg-slate-50 rounded-2xl rounded-tl-none p-4">
                <p className="text-slate-900 mb-3">What was harder than expected?</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-slate-600 font-semibold">You</span>
            </div>
            <div className="flex-1">
              <div className="bg-blue-50 rounded-2xl rounded-tl-none p-4 border border-blue-100">
                <p className="text-slate-900">
                  Getting the API calls to work correctly and handling errors when the backend was down.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 mb-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-slate-900 mb-2">Here's a stronger version:</h3>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <p className="text-slate-900">
                  I built frontend views in React and connected them to backend API endpoints, helping the team turn
                  project requirements into a working full-stack feature. I implemented error handling for API failures
                  to improve application reliability.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all">
              <CheckCircle2 className="w-4 h-4" />
              Yes, that's accurate
            </button>
            <button className="px-4 py-2 bg-white text-slate-700 rounded-lg border border-slate-200 hover:border-slate-300 transition-all">
              Make it more specific
            </button>
            <button className="px-4 py-2 bg-white text-slate-700 rounded-lg border border-slate-200 hover:border-slate-300 transition-all">
              Ask me a follow-up
            </button>
            <button className="px-4 py-2 bg-white text-slate-700 rounded-lg border border-slate-200 hover:border-slate-300 transition-all">
              Save to project story
            </button>
          </div>
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Type your response..."
            className="flex-1 px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
