import { Link } from 'react-router';
import { Plus, ArrowRight } from 'lucide-react';

export function MyProjects() {
  const projects = [
    {
      id: 1,
      title: 'Course Scheduler App',
      course: 'CS 361 - Software Engineering',
      technologies: 'React, FastAPI, PostgreSQL, GitHub',
      stepsCompleted: 2,
      totalSteps: 7,
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      course: 'CS 290 - Web Development',
      technologies: 'Vue.js, OpenWeather API, Tailwind',
      stepsCompleted: 5,
      totalSteps: 7,
    },
  ];

  return (
    <div className="space-y-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl text-slate-900 mb-2">My Projects</h1>
          <p className="text-lg text-slate-600">
            All the projects you've added to your portfolio builder
          </p>
        </div>
        <Link
          to="/choose-project"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
        >
          <Plus className="w-5 h-5" />
          Add Project
        </Link>
      </div>

      {projects.length > 0 ? (
        <div className="space-y-4">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="block bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-300 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl text-slate-900 mb-1">{project.title}</h3>
                  <p className="text-slate-600">{project.course}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400" />
              </div>
              <p className="text-slate-600 mb-3">
                <strong>Technologies:</strong> {project.technologies}
              </p>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-slate-100 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${(project.stepsCompleted / project.totalSteps) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm text-slate-600">
                  {project.stepsCompleted} of {project.totalSteps} steps
                </span>
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
    </div>
  );
}
