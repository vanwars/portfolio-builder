import { Github, ExternalLink, Image } from 'lucide-react';
import type { Palette } from '../../lib/palettes';

interface GridPortfolioTemplateProps {
  palette: Palette;
}

export function GridPortfolioTemplate({ palette }: GridPortfolioTemplateProps) {
  return (
    <div className="space-y-8">
      <div className="border-2 border-slate-300 rounded-lg shadow-lg" style={{ backgroundColor: palette.colors.background }}>
        {/* Portfolio Header */}
        <div className="text-white p-16 text-center" style={{ background: `linear-gradient(to bottom right, ${palette.colors.primary}, ${palette.colors.primaryDark})` }}>
          <h1 className="text-4xl mb-3">Your Name</h1>
          <p className="text-xl mb-6" style={{ color: palette.colors.primaryLight }}>Computer Science Student & Web Developer</p>
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
        <div className="p-12 border-b" style={{ backgroundColor: palette.colors.secondaryLight, borderColor: palette.colors.border }}>
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
        <div className="p-12" style={{ backgroundColor: palette.colors.background }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl text-slate-900 mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-all group" style={{ backgroundColor: palette.colors.backgroundAlt, borderColor: palette.colors.border }}>
                <div className="h-48 flex items-center justify-center" style={{ background: `linear-gradient(to bottom right, ${palette.colors.primaryLight}, ${palette.colors.primary}20)` }}>
                  <Image className="w-16 h-16 stroke-[1.5]" style={{ color: palette.colors.primary }} />
                </div>
                <div className="p-6 space-y-3" style={{ backgroundColor: palette.colors.backgroundAlt }}>
                  <h3 className="text-xl text-slate-900 transition-colors">
                    Course Scheduler App
                  </h3>
                  <p className="text-slate-600 text-sm">
                    A web application that helps students view and manage their course schedules.
                    Built with React and connected to a backend API.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs rounded" style={{ backgroundColor: palette.colors.primaryLight, color: palette.colors.primaryDark }}>React</span>
                    <span className="px-2 py-1 text-xs rounded" style={{ backgroundColor: palette.colors.primaryLight, color: palette.colors.primaryDark }}>JavaScript</span>
                    <span className="px-2 py-1 text-xs rounded" style={{ backgroundColor: palette.colors.primaryLight, color: palette.colors.primaryDark }}>REST API</span>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <a href="#" className="text-sm flex items-center gap-1" style={{ color: palette.colors.accent }}>
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a href="#" className="text-sm flex items-center gap-1" style={{ color: palette.colors.accent }}>
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-all group" style={{ backgroundColor: palette.colors.backgroundAlt, borderColor: palette.colors.border }}>
                <div className="h-48 flex items-center justify-center" style={{ background: `linear-gradient(to bottom right, ${palette.colors.secondaryLight}, ${palette.colors.secondary}20)` }}>
                  <Image className="w-16 h-16 stroke-[1.5]" style={{ color: palette.colors.secondary }} />
                </div>
                <div className="p-6 space-y-3" style={{ backgroundColor: palette.colors.backgroundAlt }}>
                  <h3 className="text-xl text-slate-900 transition-colors">
                    Weather Dashboard
                  </h3>
                  <p className="text-slate-600 text-sm">
                    A responsive weather dashboard that displays real-time weather data using the OpenWeather API.
                    Shows current conditions and forecasts.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs rounded" style={{ backgroundColor: palette.colors.secondaryLight, color: palette.colors.secondaryDark }}>Vue.js</span>
                    <span className="px-2 py-1 text-xs rounded" style={{ backgroundColor: palette.colors.secondaryLight, color: palette.colors.secondaryDark }}>API Integration</span>
                    <span className="px-2 py-1 text-xs rounded" style={{ backgroundColor: palette.colors.secondaryLight, color: palette.colors.secondaryDark }}>CSS</span>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <a href="#" className="text-sm flex items-center gap-1" style={{ color: palette.colors.accent }}>
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a href="#" className="text-sm flex items-center gap-1" style={{ color: palette.colors.accent }}>
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-all group" style={{ backgroundColor: palette.colors.backgroundAlt, borderColor: palette.colors.border }}>
                <div className="h-48 flex items-center justify-center" style={{ background: `linear-gradient(to bottom right, ${palette.colors.accentLight}, ${palette.colors.accent}20)` }}>
                  <Image className="w-16 h-16 stroke-[1.5]" style={{ color: palette.colors.accent }} />
                </div>
                <div className="p-6 space-y-3" style={{ backgroundColor: palette.colors.backgroundAlt }}>
                  <h3 className="text-xl text-slate-900 transition-colors">
                    Data Visualization Tool
                  </h3>
                  <p className="text-slate-600 text-sm">
                    A Python Flask application that processes CSV data and generates interactive charts
                    and visualizations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs rounded" style={{ backgroundColor: palette.colors.accentLight, color: palette.colors.accentDark }}>Python</span>
                    <span className="px-2 py-1 text-xs rounded" style={{ backgroundColor: palette.colors.accentLight, color: palette.colors.accentDark }}>Flask</span>
                    <span className="px-2 py-1 text-xs rounded" style={{ backgroundColor: palette.colors.accentLight, color: palette.colors.accentDark }}>Chart.js</span>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <a href="#" className="text-sm flex items-center gap-1" style={{ color: palette.colors.accent }}>
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 4 */}
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-all group" style={{ backgroundColor: palette.colors.backgroundAlt, borderColor: palette.colors.border }}>
                <div className="h-48 flex items-center justify-center" style={{ background: `linear-gradient(to bottom right, ${palette.colors.primaryLight}, ${palette.colors.secondaryLight})` }}>
                  <Image className="w-16 h-16 stroke-[1.5]" style={{ color: palette.colors.primary }} />
                </div>
                <div className="p-6 space-y-3" style={{ backgroundColor: palette.colors.backgroundAlt }}>
                  <h3 className="text-xl text-slate-900 transition-colors">
                    Chat Application
                  </h3>
                  <p className="text-slate-600 text-sm">
                    A real-time chat application using WebSockets. Supports multiple rooms and
                    shows typing indicators.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs rounded" style={{ backgroundColor: palette.colors.primaryLight, color: palette.colors.primaryDark }}>Node.js</span>
                    <span className="px-2 py-1 text-xs rounded" style={{ backgroundColor: palette.colors.primaryLight, color: palette.colors.primaryDark }}>Socket.io</span>
                    <span className="px-2 py-1 text-xs rounded" style={{ backgroundColor: palette.colors.primaryLight, color: palette.colors.primaryDark }}>React</span>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <a href="#" className="text-sm flex items-center gap-1" style={{ color: palette.colors.accent }}>
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
        <div className="p-12 border-t" style={{ backgroundColor: palette.colors.secondaryLight, borderColor: palette.colors.border }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl text-slate-900 mb-4">Get In Touch</h2>
            <p className="text-slate-600 mb-6">
              I'm currently looking for internship opportunities. Feel free to reach out!
            </p>
            <a
              href="mailto:your.email@example.com"
              className="inline-block px-6 py-3 text-white rounded-lg transition-all"
              style={{ backgroundColor: palette.colors.accent }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = palette.colors.accentDark}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = palette.colors.accent}
            >
              Send me an email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
