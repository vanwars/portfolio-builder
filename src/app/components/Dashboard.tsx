import { Link } from 'react-router';
import { Plus, Target, TrendingUp, FileText, Folder, CheckCircle2 } from 'lucide-react';

export function Dashboard() {
  const stats = [
    { label: 'Projects Captured', value: 5, icon: Folder, color: 'from-blue-500 to-blue-600' },
    { label: 'Resume Bullets Drafted', value: 12, icon: FileText, color: 'from-purple-500 to-purple-600' },
    { label: 'Portfolio Case Studies', value: 3, icon: TrendingUp, color: 'from-green-500 to-green-600' },
    { label: 'Evidence Items Saved', value: 28, icon: CheckCircle2, color: 'from-orange-500 to-orange-600' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Course Scheduler App',
      course: 'CS 361 - Software Engineering',
      technologies: ['React', 'FastAPI', 'PostgreSQL', 'GitHub'],
      skills: ['React', 'API Integration', 'Team Collaboration'],
      progress: 70,
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      course: 'CS 290 - Web Development',
      technologies: ['Vue.js', 'OpenWeather API', 'Tailwind'],
      skills: ['Vue.js', 'API Integration', 'Responsive Design'],
      progress: 90,
    },
    {
      id: 3,
      title: 'Machine Learning Classifier',
      course: 'CS 434 - Machine Learning',
      technologies: ['Python', 'scikit-learn', 'Jupyter'],
      skills: ['Python', 'Data Analysis', 'Model Training'],
      progress: 50,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Welcome back!</h1>
          <p className="text-slate-600 mt-1">Turn your projects into professional stories.</p>
        </div>
        <div className="flex gap-3">
          <Link
            to="/story-builder"
            className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-slate-200 text-slate-700 rounded-lg hover:border-slate-300 transition-all"
          >
            <Plus className="w-5 h-5" />
            Add a Project
          </Link>
          <Link
            to="/job-match"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
          >
            <Target className="w-5 h-5" />
            Tailor to a Job
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-start justify-between mb-3">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Continue Reflection</h3>
            <p className="text-sm text-slate-600">Pick up where you left off</p>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 mb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-slate-900">Course Scheduler App</span>
            <span className="text-sm text-blue-600">70% complete</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '70%' }}></div>
          </div>
        </div>
        <Link
          to="/project/1"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
        >
          Continue working
        </Link>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">Your Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group"
            >
              <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-slate-600 mb-4">{project.course}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">{project.progress}% complete</span>
                <div className="w-24 bg-slate-100 rounded-full h-1.5">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
