import { Link } from 'react-router-dom';
import { Plus, ArrowRight } from 'lucide-react';

export function MyProjects() {
  const projects = [
    {
      id: 1,
      title: 'Course Scheduler App',
      course: 'CS 361 - Software Engineering',
      technologies: 'React, FastAPI, PostgreSQL, GitHub',
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      course: 'CS 290 - Web Development',
      technologies: 'Vue.js, OpenWeather API, Tailwind',
    },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl text-slate-900 mb-2">My Projects</h1>
        <p className="text-slate-600">
          Projects you're working on turning into portfolio stories
        </p>
      </div>

      {projects.length > 0 ? (
        <div className="space-y-4">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="block bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-300 transition-all"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl text-slate-900 mb-1">{project.title}</h3>
                  <p className="text-slate-600 mb-2">{project.course}</p>
                  <p className="text-sm text-slate-500">
                    {project.technologies}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 flex-shrink-0 mt-1" />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg text-slate-600 mb-6">You haven't added any projects yet.</p>
          <Link
            to="/choose-project"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            <Plus className="w-5 h-5" />
            Add your first project
          </Link>
        </div>
      )}

      <div className="pt-6 border-t border-slate-200">
        <Link
          to="/choose-project"
          className="text-blue-600 hover:text-blue-700 text-sm"
        >
          + Add another project
        </Link>
      </div>
    </div>
  );
}
