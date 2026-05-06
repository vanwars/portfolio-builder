import { Plus, Briefcase } from 'lucide-react';

export function WorkHistory() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl text-slate-900 mb-2">Work History</h1>
        <p className="text-lg text-slate-600">
          Add jobs, internships, or volunteer work to include on your resume.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl text-slate-900 mb-4">Add a job or internship</h2>

          <div className="space-y-4">
            <label className="block">
              <span className="text-slate-700 mb-2 block">Job title</span>
              <input
                type="text"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Software Engineering Intern"
              />
            </label>

            <label className="block">
              <span className="text-slate-700 mb-2 block">Company or organization</span>
              <input
                type="text"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., ABC Tech Company"
              />
            </label>

            <div className="grid grid-cols-2 gap-4">
              <label className="block">
                <span className="text-slate-700 mb-2 block">Start date</span>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., June 2025"
                />
              </label>

              <label className="block">
                <span className="text-slate-700 mb-2 block">End date</span>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., August 2025 or 'Present'"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-slate-700 mb-2 block">What did you do?</span>
              <textarea
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[120px]"
                placeholder="Describe your responsibilities and accomplishments. We'll help you turn this into bullet points."
              ></textarea>
            </label>

            <button className="flex items-center gap-2 px-6 py-3 bg-terracotta-600 text-white rounded-lg hover:bg-terracotta-700 transition-all">
              <Plus className="w-5 h-5" />
              Add this job
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200">
          <h3 className="text-xl text-slate-900 mb-4">Your work history</h3>
          <p className="text-slate-600 mb-6">Jobs and internships you've added will appear here.</p>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 text-center">
            <Briefcase className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-600">No work history added yet</p>
          </div>
        </div>

        <div className="bg-sage-50 border border-sage-200 rounded-lg p-6">
          <h3 className="text-lg text-slate-900 mb-3">What counts as work experience?</h3>
          <ul className="space-y-2 text-slate-700">
            <li>• Paid jobs (full-time, part-time, seasonal)</li>
            <li>• Internships (paid or unpaid)</li>
            <li>• Volunteer work related to your field</li>
            <li>• Teaching assistant or research assistant positions</li>
            <li>• Freelance or contract work</li>
          </ul>
          <p className="text-slate-700 mt-4">
            <strong>Note:</strong> You can add non-technical jobs too. Even retail or food service shows you can show
            up, work with people, and handle responsibility.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
          <h3 className="text-lg text-slate-900 mb-3">Don't have work experience yet?</h3>
          <p className="text-slate-700">
            That's completely normal. Your class projects can take the place of work experience on your resume. Focus
            on building strong project entries instead.
          </p>
        </div>
      </div>
    </div>
  );
}
