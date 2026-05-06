export function SimpleResumeTemplate() {
  return (
    <div className="space-y-8">
      <div className="bg-white border-2 border-slate-300 rounded-lg shadow-lg max-w-2xl mx-auto">
        <div className="p-12 space-y-6">
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-4">
            <h1 className="text-3xl text-slate-900 mb-1">Your Name</h1>
            <p className="text-slate-600">your.email@example.com | (555) 123-4567 | Portland, OR</p>
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <h2 className="text-lg text-slate-900 uppercase tracking-wide">Summary</h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              Computer science student at Oregon State University interested in web development and data science.
              Built several full-stack applications using React and Python. Looking for internship opportunities
              to contribute to real-world projects and learn from experienced developers.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-lg text-slate-900 uppercase tracking-wide">Education</h2>
            <div>
              <div className="flex justify-between items-baseline">
                <p className="text-slate-900">Oregon State University</p>
                <p className="text-sm text-slate-600">Expected 2027</p>
              </div>
              <p className="text-slate-700 text-sm">Bachelor of Science in Computer Science</p>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <h2 className="text-lg text-slate-900 uppercase tracking-wide">Technical Skills</h2>
            <p className="text-slate-700 text-sm">
              <strong>Languages:</strong> JavaScript, Python, HTML/CSS, SQL
            </p>
            <p className="text-slate-700 text-sm">
              <strong>Frameworks & Tools:</strong> React, Node.js, Git, PostgreSQL
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-lg text-slate-900 uppercase tracking-wide">Projects</h2>

            <div className="space-y-1">
              <div className="flex justify-between items-baseline">
                <p className="text-slate-900">Course Scheduler App</p>
                <p className="text-sm text-slate-600">Fall 2026</p>
              </div>
              <p className="text-slate-700 text-sm">
                Developed frontend views in React and connected them to backend API endpoints to enable students
                to view and manage course schedules
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-baseline">
                <p className="text-slate-900">Weather Dashboard</p>
                <p className="text-sm text-slate-600">Spring 2026</p>
              </div>
              <p className="text-slate-700 text-sm">
                Built a responsive weather dashboard using Vue.js and the OpenWeather API to display real-time
                weather data
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
