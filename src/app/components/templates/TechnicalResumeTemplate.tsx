import { ExternalLink } from 'lucide-react';

export function TechnicalResumeTemplate() {
  return (
    <div className="space-y-8">
      <div className="bg-white border-2 border-slate-300 rounded-lg shadow-lg max-w-3xl mx-auto">
        <div className="p-10 space-y-5">
          {/* Header */}
          <div className="space-y-1">
            <h1 className="text-3xl text-slate-900">Your Name</h1>
            <p className="text-slate-600 text-sm">
              Portland, OR | your.email@example.com | github.com/username | portfolio.dev
            </p>
          </div>

          {/* Technical Skills - Prominent */}
          <div className="space-y-2 bg-slate-50 border border-slate-200 rounded p-4">
            <h2 className="text-sm text-slate-900 font-medium">TECHNICAL SKILLS</h2>
            <div className="text-sm text-slate-700 space-y-1">
              <p><strong>Languages:</strong> JavaScript (ES6+), Python, TypeScript, SQL, HTML/CSS</p>
              <p><strong>Frameworks & Libraries:</strong> React, Node.js, Express, Vue.js, Flask</p>
              <p><strong>Tools & Technologies:</strong> Git, PostgreSQL, MongoDB, Docker, REST APIs, Agile/Scrum</p>
            </div>
          </div>

          {/* Projects - Main Focus */}
          <div className="space-y-4">
            <h2 className="text-sm text-slate-900 font-medium border-b-2 border-slate-900 pb-1">TECHNICAL PROJECTS</h2>

            <div className="space-y-2">
              <div className="flex items-baseline justify-between">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-slate-900 font-medium">Course Scheduler App</h3>
                  <a href="#" className="text-terracotta-600 hover:text-terracotta-700">
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <span className="text-xs text-slate-500">React, Node.js, PostgreSQL</span>
              </div>
              <ul className="space-y-1 text-sm text-slate-700 ml-4">
                <li className="list-disc">
                  Developed frontend views in React and connected them to backend API endpoints to enable students
                  to view and manage course schedules
                </li>
                <li className="list-disc">
                  Implemented user authentication system with JWT tokens and secure session management
                </li>
                <li className="list-disc">
                  Designed and normalized PostgreSQL database schema for efficient course and student data storage
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline justify-between">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-slate-900 font-medium">Weather Dashboard</h3>
                  <a href="#" className="text-terracotta-600 hover:text-terracotta-700">
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <span className="text-xs text-slate-500">Vue.js, OpenWeather API</span>
              </div>
              <ul className="space-y-1 text-sm text-slate-700 ml-4">
                <li className="list-disc">
                  Built a responsive weather dashboard using Vue.js and the OpenWeather API to display real-time
                  weather data for multiple cities
                </li>
                <li className="list-disc">
                  Implemented data caching to reduce API calls and improve application performance by 60%
                </li>
                <li className="list-disc">
                  Created responsive design using Tailwind CSS, ensuring optimal experience across mobile and desktop devices
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline justify-between">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-slate-900 font-medium">Data Visualization Tool</h3>
                  <a href="#" className="text-terracotta-600 hover:text-terracotta-700">
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <span className="text-xs text-slate-500">Python, Flask, Chart.js</span>
              </div>
              <ul className="space-y-1 text-sm text-slate-700 ml-4">
                <li className="list-disc">
                  Developed Python Flask application to process CSV data and generate interactive visualizations
                </li>
                <li className="list-disc">
                  Integrated Chart.js library to create dynamic bar, line, and pie charts from uploaded datasets
                </li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-sm text-slate-900 font-medium border-b-2 border-slate-900 pb-1">EDUCATION</h2>
            <div className="flex justify-between items-baseline">
              <div>
                <p className="text-slate-900 text-sm"><strong>Oregon State University</strong> — B.S. Computer Science</p>
                <p className="text-slate-600 text-sm">Relevant Coursework: Data Structures, Algorithms, Software Engineering, Web Development, Databases</p>
              </div>
              <span className="text-sm text-slate-600">Expected 2027</span>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <h2 className="text-sm text-slate-900 font-medium border-b-2 border-slate-900 pb-1">EXPERIENCE</h2>
            <div className="space-y-1">
              <div className="flex justify-between items-baseline">
                <p className="text-slate-900 text-sm"><strong>Teaching Assistant</strong> — Oregon State University</p>
                <span className="text-sm text-slate-600">Sept 2025 - Present</span>
              </div>
              <ul className="space-y-1 text-sm text-slate-700 ml-4">
                <li className="list-disc">
                  Assist students in CS 161 (Intro to Computer Science) during lab sessions, explaining Python concepts and debugging code
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
