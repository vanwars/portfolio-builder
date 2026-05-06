import { Plus, BookOpen } from 'lucide-react';

export function Publications() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl text-slate-900 mb-2">Publications</h1>
        <p className="text-lg text-slate-600">
          Add research papers, articles, or blog posts you've written.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl text-slate-900 mb-4">Add a publication</h2>

          <div className="space-y-4">
            <label className="block">
              <span className="text-slate-700 mb-2 block">Title</span>
              <input
                type="text"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Improving Data Pipeline Performance with Caching"
              />
            </label>

            <label className="block">
              <span className="text-slate-700 mb-2 block">Type</span>
              <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Research paper</option>
                <option>Conference paper</option>
                <option>Blog post</option>
                <option>Technical article</option>
                <option>Thesis or capstone</option>
              </select>
            </label>

            <label className="block">
              <span className="text-slate-700 mb-2 block">
                Published where <span className="text-slate-500">(optional)</span>
              </span>
              <input
                type="text"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Medium, Dev.to, university journal"
              />
            </label>

            <label className="block">
              <span className="text-slate-700 mb-2 block">Date</span>
              <input
                type="text"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., May 2026"
              />
            </label>

            <label className="block">
              <span className="text-slate-700 mb-2 block">
                Link <span className="text-slate-500">(optional)</span>
              </span>
              <input
                type="text"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="URL to your publication"
              />
            </label>

            <button className="flex items-center gap-2 px-6 py-3 bg-terracotta-600 text-white rounded-lg hover:bg-terracotta-700 transition-all">
              <Plus className="w-5 h-5" />
              Add publication
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200">
          <h3 className="text-xl text-slate-900 mb-4">Your publications</h3>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 text-center">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-600">No publications added yet</p>
          </div>
        </div>

        <div className="bg-sage-50 border border-sage-200 rounded-lg p-6">
          <h3 className="text-lg text-slate-900 mb-3">What counts as a publication?</h3>
          <ul className="space-y-2 text-slate-700">
            <li>• Research papers (published or under review)</li>
            <li>• Conference presentations or posters</li>
            <li>• Technical blog posts you've written</li>
            <li>• Articles on Medium, Dev.to, or similar platforms</li>
            <li>• Senior thesis or capstone project write-ups</li>
          </ul>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
          <h3 className="text-lg text-slate-900 mb-3">Don't have publications yet?</h3>
          <p className="text-slate-700 mb-3">That's completely normal for students. You can:</p>
          <ul className="space-y-2 text-slate-700">
            <li>• Write a blog post about something you built or learned</li>
            <li>• Document your senior project or capstone</li>
            <li>• Write about a technical problem you solved</li>
            <li>• Share what you learned from a difficult project</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
