import { Github, ExternalLink, ChevronRight, Image } from 'lucide-react';
import type { Palette } from '../../lib/palettes';

interface CaseStudyPortfolioTemplateProps {
  palette: Palette;
}

export function CaseStudyPortfolioTemplate({ palette }: CaseStudyPortfolioTemplateProps) {
  return (
    <div className="space-y-8">
      <div className="border-2 border-slate-300 rounded-lg shadow-lg" style={{ backgroundColor: palette.colors.background }}>
        {/* Navigation */}
        <div className="border-b border-slate-200 p-6">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <h1 className="text-xl text-slate-900">Your Name</h1>
            <nav className="flex gap-6 text-sm">
              <a href="#" className="text-slate-600 hover:text-slate-900">Home</a>
              <a href="#" style={{ color: palette.colors.accent }}>Projects</a>
              <a href="#" className="text-slate-600 hover:text-slate-900">About</a>
              <a href="#" className="text-slate-600 hover:text-slate-900">Contact</a>
            </nav>
          </div>
        </div>

        {/* Project Hero */}
        <div className="p-12" style={{ background: `linear-gradient(to bottom right, ${palette.colors.primaryLight}, ${palette.colors.secondaryLight})` }}>
          <div className="max-w-5xl mx-auto">
            <div className="mb-3">
              <span className="px-3 py-1 rounded-full" style={{ backgroundColor: palette.colors.primaryLight, color: palette.colors.primaryDark }}>Case Study</span>
            </div>
            <h2 className="text-4xl text-slate-900 mb-4">Course Scheduler App</h2>
            <p className="text-xl text-slate-600 mb-6">
              A web application helping students manage their course schedules efficiently
            </p>
            <div className="flex gap-4">
              <a href="#" className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all">
                <Github className="w-5 h-5" />
                View Code
              </a>
              <a href="#" className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-all">
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Project Image */}
        <div className="px-12 pt-12" style={{ backgroundColor: palette.colors.background }}>
          <div className="max-w-5xl mx-auto">
            <div className="h-96 rounded-lg flex items-center justify-center border border-slate-200" style={{ background: `linear-gradient(to bottom right, ${palette.colors.primaryLight}, ${palette.colors.secondaryLight})` }}>
              <Image className="w-32 h-32 stroke-[1.5]" style={{ color: palette.colors.primary }} />
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="p-12" style={{ backgroundColor: palette.colors.background }}>
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Overview */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm uppercase tracking-wide text-slate-500 mb-2">Role</h3>
                <p className="text-slate-900">Full-Stack Developer</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wide text-slate-500 mb-2">Timeline</h3>
                <p className="text-slate-900">Fall 2026 (10 weeks)</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wide text-slate-500 mb-2">Technologies</h3>
                <p className="text-slate-900">React, Node.js, PostgreSQL</p>
              </div>
            </div>

            {/* Problem */}
            <div>
              <h3 className="text-2xl text-slate-900 mb-4">The Challenge</h3>
              <p className="text-slate-700 leading-relaxed">
                For our Software Engineering course (CS 361), our team was asked to build a web application
                that would help students manage their course schedules. The existing university system was
                difficult to use and didn't let students easily visualize their weekly schedule or check
                for time conflicts.
              </p>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-2xl text-slate-900 mb-4">My Contribution</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                I focused on the frontend development using React. I created several key views including
                the weekly calendar view, the course search interface, and the schedule management page.
                I also connected these views to our backend API endpoints so students could save and retrieve
                their schedules.
              </p>
              <p className="text-slate-700 leading-relaxed">
                One challenge I encountered was handling time zone conversions and displaying courses correctly
                across different calendar views. I solved this by creating a utility function that normalized
                all times to the user's local timezone before rendering.
              </p>
            </div>

            {/* What I Learned */}
            <div>
              <h3 className="text-2xl text-slate-900 mb-4">What I Learned</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <ChevronRight className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: palette.colors.accent }} />
                  <span>
                    <strong>Working with APIs:</strong> This was my first time connecting a React frontend
                    to a REST API, and I learned a lot about async/await, error handling, and state management.
                  </span>
                </li>
                <li className="flex gap-3">
                  <ChevronRight className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: palette.colors.accent }} />
                  <span>
                    <strong>Team collaboration:</strong> Working with a backend developer taught me the importance
                    of clear API contracts and good communication about data structures.
                  </span>
                </li>
                <li className="flex gap-3">
                  <ChevronRight className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: palette.colors.accent }} />
                  <span>
                    <strong>User experience:</strong> I realized how important it is to handle loading states
                    and error messages well - users need to know what's happening.
                  </span>
                </li>
              </ul>
            </div>

            {/* Technologies Deep Dive */}
            <div className="border rounded-lg p-8" style={{ backgroundColor: palette.colors.secondaryLight, borderColor: palette.colors.border }}>
              <h3 className="text-xl text-slate-900 mb-4">Technical Implementation</h3>
              <div className="space-y-4 text-slate-700">
                <div>
                  <p className="font-medium mb-1">Frontend (React)</p>
                  <p className="text-sm">
                    Built reusable components for the calendar view, course cards, and schedule management.
                    Used React hooks for state management and implemented custom hooks for API calls.
                  </p>
                </div>
                <div>
                  <p className="font-medium mb-1">API Integration</p>
                  <p className="text-sm">
                    Connected to REST endpoints for fetching courses, creating schedules, and managing enrollments.
                    Implemented error handling and loading states for better user experience.
                  </p>
                </div>
                <div>
                  <p className="font-medium mb-1">Testing</p>
                  <p className="text-sm">
                    Wrote unit tests for utility functions and integration tests for API calls.
                    Manually tested UI across different screen sizes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Project */}
        <div className="p-12 bg-sage-50 border-t border-sage-200">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 mb-1">Next Project</p>
                <h3 className="text-2xl text-slate-900">Weather Dashboard</h3>
              </div>
              <a href="#" className="flex items-center gap-2 px-6 py-3 bg-terracotta-600 text-white rounded-lg hover:bg-terracotta-700 transition-all">
                View Case Study
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
