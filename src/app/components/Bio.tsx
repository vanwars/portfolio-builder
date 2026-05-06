export function Bio() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl text-slate-900 mb-2">Bio</h1>
        <p className="text-lg text-slate-600">
          Write a short professional bio about yourself.
        </p>
      </div>

      <div className="space-y-6">
        <label className="block">
          <span className="text-slate-700 mb-3 block text-lg">
            Your bio
          </span>
          <textarea
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[200px]"
            placeholder="Write about yourself in 2-4 sentences..."
          ></textarea>
          <p className="text-sm text-slate-500 mt-2">
            This will appear on your resume and portfolio
          </p>
        </label>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
          <h3 className="text-lg text-slate-900 mb-3">Example bio</h3>
          <p className="text-slate-700">
            "I'm a computer science student at Oregon State University interested in web development and data science.
            I've built several full-stack applications using React and Python, and I'm looking for internship opportunities
            where I can contribute to real-world projects and learn from experienced developers."
          </p>
        </div>

        <div className="bg-sage-50 border border-sage-200 rounded-lg p-6">
          <h3 className="text-lg text-slate-900 mb-3">Tips for writing your bio</h3>
          <ul className="space-y-2 text-slate-700">
            <li>• Start with who you are (student, your major, your school)</li>
            <li>• Mention what you're interested in or good at</li>
            <li>• Include what you're looking for (internship, job, opportunities)</li>
            <li>• Keep it honest and conversational</li>
            <li>• 2-4 sentences is usually enough</li>
          </ul>
        </div>

        <button className="px-6 py-3 bg-terracotta-600 text-white rounded-lg hover:bg-terracotta-700 transition-all">
          Save bio
        </button>
      </div>
    </div>
  );
}
