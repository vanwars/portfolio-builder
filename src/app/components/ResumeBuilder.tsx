import { Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { useState } from 'react';

export function ResumeBuilder() {
  const [selectedBio, setSelectedBio] = useState(true);
  const [selectedSkills, setSelectedSkills] = useState<string[]>(['React', 'Python', 'JavaScript']);
  const [selectedProjects, setSelectedProjects] = useState<number[]>([1]);
  const [selectedJobs, setSelectedJobs] = useState<number[]>([]);
  const [selectedCerts, setSelectedCerts] = useState<number[]>([]);

  // Sample data - in real app this would come from the user's saved data
  const bio = "I'm a computer science student at Oregon State University interested in web development and data science. I've built several full-stack applications using React and Python, and I'm looking for internship opportunities where I can contribute to real-world projects and learn from experienced developers.";

  const skills = [
    { name: 'React', level: 'Intermediate' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'PostgreSQL', level: 'Beginner' },
    { name: 'Git', level: 'Intermediate' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Course Scheduler App',
      bullet: 'Developed frontend views in React and connected them to backend API endpoints to enable students to view and manage course schedules',
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      bullet: 'Built a responsive weather dashboard using Vue.js and the OpenWeather API to display real-time weather data',
    },
  ];

  const jobs: any[] = [];

  const certifications: any[] = [];

  return (
    <div className="space-y-12">
      <div>
        <Link to="/resume-templates" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to templates
        </Link>
        <h1 className="text-3xl text-slate-900 mb-2">Build Your Resume</h1>
        <p className="text-slate-600">
          Select what you want to include from the information you've already added
        </p>
      </div>

      <div className="space-y-8">
        {/* Bio Section */}
        <div className="border border-slate-200 rounded-lg p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg text-slate-900 mb-1">Bio</h3>
              <p className="text-sm text-slate-600">A short introduction about yourself</p>
            </div>
            <button
              onClick={() => setSelectedBio(!selectedBio)}
              className={`px-4 py-2 rounded-lg border-2 transition-all ${
                selectedBio
                  ? 'bg-sage-50 border-blue-400 text-terracotta-700'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              {selectedBio ? (
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  Included
                </span>
              ) : (
                'Add to resume'
              )}
            </button>
          </div>

          {bio ? (
            <div className="bg-slate-50 rounded-lg p-4">
              <p className="text-slate-700 text-sm">{bio}</p>
              <Link to="/bio" className="text-sm text-terracotta-600 hover:text-terracotta-700 mt-2 inline-block">
                Edit bio
              </Link>
            </div>
          ) : (
            <div className="bg-slate-50 rounded-lg p-4">
              <p className="text-slate-600 text-sm mb-2">You haven't written a bio yet</p>
              <Link to="/bio" className="text-sm text-terracotta-600 hover:text-terracotta-700">
                Add bio
              </Link>
            </div>
          )}
        </div>

        {/* Skills Section */}
        <div className="border border-slate-200 rounded-lg p-6">
          <div className="mb-4">
            <h3 className="text-lg text-slate-900 mb-1">Skills</h3>
            <p className="text-sm text-slate-600">Select which skills to include</p>
          </div>

          {skills.length > 0 ? (
            <div className="space-y-2">
              {skills.map((skill) => {
                const isSelected = selectedSkills.includes(skill.name);
                return (
                  <button
                    key={skill.name}
                    onClick={() => {
                      if (isSelected) {
                        setSelectedSkills(selectedSkills.filter(s => s !== skill.name));
                      } else {
                        setSelectedSkills([...selectedSkills, skill.name]);
                      }
                    }}
                    className={`w-full text-left border-2 rounded-lg p-4 transition-all ${
                      isSelected
                        ? 'border-blue-400 bg-sage-50'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 border-2 rounded flex items-center justify-center ${
                          isSelected ? 'border-blue-600 bg-terracotta-600' : 'border-slate-300 bg-white'
                        }`}>
                          {isSelected && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <div>
                          <span className="text-slate-900">{skill.name}</span>
                          <span className="text-sm text-slate-600 ml-3">{skill.level}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
              <Link to="/skills" className="text-sm text-terracotta-600 hover:text-terracotta-700 inline-block mt-2">
                Manage skills
              </Link>
            </div>
          ) : (
            <div className="bg-slate-50 rounded-lg p-4">
              <p className="text-slate-600 text-sm mb-2">You haven't added any skills yet</p>
              <Link to="/skills" className="text-sm text-terracotta-600 hover:text-terracotta-700">
                Add skills
              </Link>
            </div>
          )}
        </div>

        {/* Projects Section */}
        <div className="border border-slate-200 rounded-lg p-6">
          <div className="mb-4">
            <h3 className="text-lg text-slate-900 mb-1">Projects</h3>
            <p className="text-sm text-slate-600">Select which projects to include</p>
          </div>

          {projects.length > 0 ? (
            <div className="space-y-2">
              {projects.map((project) => {
                const isSelected = selectedProjects.includes(project.id);
                return (
                  <button
                    key={project.id}
                    onClick={() => {
                      if (isSelected) {
                        setSelectedProjects(selectedProjects.filter(id => id !== project.id));
                      } else {
                        setSelectedProjects([...selectedProjects, project.id]);
                      }
                    }}
                    className={`w-full text-left border-2 rounded-lg p-4 transition-all ${
                      isSelected
                        ? 'border-blue-400 bg-sage-50'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-5 h-5 border-2 rounded flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        isSelected ? 'border-blue-600 bg-terracotta-600' : 'border-slate-300 bg-white'
                      }`}>
                        {isSelected && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <div>
                        <h4 className="text-slate-900 mb-1">{project.title}</h4>
                        <p className="text-sm text-slate-600">{project.bullet}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
              <Link to="/my-projects" className="text-sm text-terracotta-600 hover:text-terracotta-700 inline-block mt-2">
                Manage projects
              </Link>
            </div>
          ) : (
            <div className="bg-slate-50 rounded-lg p-4">
              <p className="text-slate-600 text-sm mb-2">You haven't added any projects yet</p>
              <Link to="/my-projects" className="text-sm text-terracotta-600 hover:text-terracotta-700">
                Add projects
              </Link>
            </div>
          )}
        </div>

        {/* Work History Section */}
        <div className="border border-slate-200 rounded-lg p-6">
          <div className="mb-4">
            <h3 className="text-lg text-slate-900 mb-1">Work History</h3>
            <p className="text-sm text-slate-600">Select which jobs to include</p>
          </div>

          {jobs.length > 0 ? (
            <div className="space-y-2">
              {/* Jobs would be mapped here */}
            </div>
          ) : (
            <div className="bg-slate-50 rounded-lg p-4">
              <p className="text-slate-600 text-sm mb-2">You haven't added any work history yet</p>
              <Link to="/work-history" className="text-sm text-terracotta-600 hover:text-terracotta-700">
                Add work history
              </Link>
            </div>
          )}
        </div>

        {/* Certifications Section */}
        <div className="border border-slate-200 rounded-lg p-6">
          <div className="mb-4">
            <h3 className="text-lg text-slate-900 mb-1">Certifications</h3>
            <p className="text-sm text-slate-600">Select which certifications to include</p>
          </div>

          {certifications.length > 0 ? (
            <div className="space-y-2">
              {/* Certifications would be mapped here */}
            </div>
          ) : (
            <div className="bg-slate-50 rounded-lg p-4">
              <p className="text-slate-600 text-sm mb-2">You haven't added any certifications yet</p>
              <Link to="/certifications" className="text-sm text-terracotta-600 hover:text-terracotta-700">
                Add certifications
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
        <div className="space-y-4">
          <label className="block">
            <span className="text-slate-700 mb-2 block">Name this resume</span>
            <input
              type="text"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., Frontend Developer Resume"
            />
            <p className="text-sm text-slate-500 mt-2">
              Give it a name so you can find it later
            </p>
          </label>

          <div className="flex gap-3">
            <button className="px-6 py-3 bg-terracotta-600 text-white rounded-lg hover:bg-terracotta-700 transition-all">
              Save resume
            </button>
            <Link
              to="/my-resumes"
              className="px-6 py-3 text-slate-600 hover:text-slate-900 transition-colors"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-sage-50 border border-sage-200 rounded-lg p-6">
        <p className="text-slate-700 text-sm">
          <strong>Next step:</strong> After you save this resume, you'll be able to download it as a PDF
          or edit it to create different versions for different types of jobs.
        </p>
      </div>
    </div>
  );
}
