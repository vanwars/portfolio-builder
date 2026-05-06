import { Plus, X } from 'lucide-react';

export function Skills() {
  const savedSkills = [
    { name: 'React', level: 'Intermediate' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Intermediate' },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl text-slate-900 mb-2">Skills</h1>
        <p className="text-lg text-slate-600">
          List technical skills you have evidence for from your projects.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl text-slate-900 mb-4">Add a skill</h2>

          <div className="space-y-4">
            <label className="block">
              <span className="text-slate-700 mb-2 block">Skill name</span>
              <input
                type="text"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., React, Python, SQL, Git"
              />
            </label>

            <label className="block">
              <span className="text-slate-700 mb-2 block">Experience level</span>
              <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
              <p className="text-sm text-slate-500 mt-2">
                Be honest. Beginner means you've used it in a class project. Intermediate means you're comfortable with it.
                Advanced means you could teach someone else.
              </p>
            </label>

            <button className="flex items-center gap-2 px-6 py-3 bg-terracotta-600 text-white rounded-lg hover:bg-terracotta-700 transition-all">
              <Plus className="w-5 h-5" />
              Add skill
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200">
          <h3 className="text-xl text-slate-900 mb-4">Your skills</h3>

          {savedSkills.length > 0 ? (
            <div className="space-y-2">
              {savedSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white border border-slate-200 rounded-lg p-4"
                >
                  <div>
                    <h4 className="text-slate-900">{skill.name}</h4>
                    <p className="text-sm text-slate-600">{skill.level}</p>
                  </div>
                  <button className="text-slate-400 hover:text-red-600 transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-600">No skills added yet</p>
          )}
        </div>

        <div className="bg-sage-50 border border-sage-200 rounded-lg p-6">
          <h3 className="text-lg text-slate-900 mb-3">What skills should I list?</h3>
          <ul className="space-y-2 text-slate-700">
            <li>• Programming languages (Python, JavaScript, Java, etc.)</li>
            <li>• Frameworks and libraries (React, Flask, Django, etc.)</li>
            <li>• Tools (Git, Docker, VS Code, etc.)</li>
            <li>• Databases (PostgreSQL, MongoDB, MySQL, etc.)</li>
            <li>• Only list skills you've actually used in projects</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
