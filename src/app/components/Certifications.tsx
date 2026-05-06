import { Plus, Award } from 'lucide-react';

export function Certifications() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl text-slate-900 mb-2">Certifications</h1>
        <p className="text-lg text-slate-600">
          Add professional certifications or completed courses.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl text-slate-900 mb-4">Add a certification</h2>

          <div className="space-y-4">
            <label className="block">
              <span className="text-slate-700 mb-2 block">Certification or course name</span>
              <input
                type="text"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., AWS Certified Cloud Practitioner"
              />
            </label>

            <label className="block">
              <span className="text-slate-700 mb-2 block">Issuing organization</span>
              <input
                type="text"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Amazon Web Services, Coursera, LinkedIn Learning"
              />
            </label>

            <label className="block">
              <span className="text-slate-700 mb-2 block">Date completed</span>
              <input
                type="text"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., May 2026"
              />
            </label>

            <label className="block">
              <span className="text-slate-700 mb-2 block">
                Credential URL or ID <span className="text-slate-500">(optional)</span>
              </span>
              <input
                type="text"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Link to verify your certification"
              />
            </label>

            <button className="flex items-center gap-2 px-6 py-3 bg-terracotta-600 text-white rounded-lg hover:bg-terracotta-700 transition-all">
              <Plus className="w-5 h-5" />
              Add certification
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200">
          <h3 className="text-xl text-slate-900 mb-4">Your certifications</h3>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 text-center">
            <Award className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-600">No certifications added yet</p>
          </div>
        </div>

        <div className="bg-sage-50 border border-sage-200 rounded-lg p-6">
          <h3 className="text-lg text-slate-900 mb-3">What counts as a certification?</h3>
          <ul className="space-y-2 text-slate-700">
            <li>• Industry certifications (AWS, Google Cloud, CompTIA, etc.)</li>
            <li>• Completed online courses with certificates (Coursera, Udemy, etc.)</li>
            <li>• Professional development courses</li>
            <li>• Bootcamp or training program completions</li>
          </ul>
          <p className="text-slate-700 mt-4">
            <strong>Note:</strong> Only add certifications you've actually completed. If you're currently working on one,
            you can mention it in your bio instead.
          </p>
        </div>
      </div>
    </div>
  );
}
