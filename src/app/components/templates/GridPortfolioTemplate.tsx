import { Link } from 'react-router';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

export function GridPortfolioTemplate() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <Link to="/portfolio-templates" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
          <ArrowLeft className="w-4 h-4" />
          Back to templates
        </Link>
        <Link
          to="/my-projects"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
        >
          Use this template
        </Link>
      </div>

      <div className="bg-white border-2 border-slate-300 rounded-lg shadow-lg">
        {/* Portfolio Header */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-16 text-center">
          <h1 className="text-4xl mb-3">Your Name</h1>
          <p className="text-xl text-blue-100 mb-6">Computer Science Student & Web Developer</p>
          <div className="flex gap-4 justify-center">
            <a href="#" className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all">
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a href="#" className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all">
              <ExternalLink className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* About Section */}
        <div className="p-12 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl text-slate-900 mb-4">About Me</h2>
            <p className="text-slate-700 leading-relaxed">
              I'm a computer science student at Oregon State University passionate about building web applications
              that solve real problems. I enjoy working with modern frameworks like React and Vue, and I'm always
              learning new technologies. Currently looking for internship opportunities where I can contribute
              to meaningful projects and grow as a developer.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="p-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl text-slate-900 mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-all group">
                <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  <div className="text-6xl text-blue-200">📅</div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
                    Course Scheduler App
                  </h3>
                  <p className="text-slate-600 text-sm">
                    A web application that helps students view and manage their course schedules.
                    Built with React and connected to a backend API.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">React</span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">JavaScript</span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">REST API</span>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-all group">
                <div className="h-48 bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center">
                  <div className="text-6xl text-purple-200">🌤️</div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
                    Weather Dashboard
                  </h3>
                  <p className="text-slate-600 text-sm">
                    A responsive weather dashboard that displays real-time weather data using the OpenWeather API.
                    Shows current conditions and forecasts.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded">Vue.js</span>
                    <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded">API Integration</span>
                    <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded">CSS</span>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-all group">
                <div className="h-48 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                  <div className="text-6xl text-green-200">📊</div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
                    Data Visualization Tool
                  </h3>
                  <p className="text-slate-600 text-sm">
                    A Python Flask application that processes CSV data and generates interactive charts
                    and visualizations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded">Python</span>
                    <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded">Flask</span>
                    <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded">Chart.js</span>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 4 */}
              <div className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-all group">
                <div className="h-48 bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">
                  <div className="text-6xl text-orange-200">💬</div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
                    Chat Application
                  </h3>
                  <p className="text-slate-600 text-sm">
                    A real-time chat application using WebSockets. Supports multiple rooms and
                    shows typing indicators.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded">Node.js</span>
                    <span className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded">Socket.io</span>
                    <span className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded">React</span>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="p-12 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl text-slate-900 mb-4">Get In Touch</h2>
            <p className="text-slate-600 mb-6">
              I'm currently looking for internship opportunities. Feel free to reach out!
            </p>
            <a
              href="mailto:your.email@example.com"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
            >
              Send me an email
            </a>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-slate-900 mb-2">About this template</h3>
        <p className="text-slate-700 text-sm">
          The Grid Layout template displays your projects in a card-based grid. Each project gets
          equal visual weight with a preview image, description, and tech tags. Great for showing
          multiple projects and letting viewers quickly scan your work.
        </p>
      </div>
    </div>
  );
}
