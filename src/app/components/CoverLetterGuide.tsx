import { Link } from 'react-router';

export function CoverLetterGuide() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl text-slate-900 mb-2">How to Write a Cover Letter</h1>
        <p className="text-slate-600">
          We'll help you write a simple, honest cover letter step by step
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg text-slate-900 mb-3">What is a cover letter?</h3>
          <p className="text-slate-700 mb-3">
            A cover letter is a short note (3-4 paragraphs) that you send with your resume when applying for a job.
            It explains:
          </p>
          <ul className="space-y-2 text-slate-700">
            <li>• Why you're interested in this specific job</li>
            <li>• What relevant experience or skills you have</li>
            <li>• Why you'd be a good fit</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl text-slate-900 mb-4">Basic structure</h2>

          <div className="space-y-4">
            <div className="bg-white border border-slate-200 rounded-lg p-5">
              <h3 className="font-medium text-slate-900 mb-2">Paragraph 1: Why this job?</h3>
              <p className="text-slate-600 mb-3">Say which job you're applying for and why it interests you.</p>
              <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-700">
                <strong>Example:</strong> "I'm writing to apply for the Frontend Developer Internship at [Company].
                I'm interested in this role because I want to work on user-facing features and learn from an experienced team."
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-5">
              <h3 className="font-medium text-slate-900 mb-2">Paragraph 2: What can you do?</h3>
              <p className="text-slate-600 mb-3">Pick 1-2 projects or experiences that relate to the job.</p>
              <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-700">
                <strong>Example:</strong> "I've built several projects using React, including a course scheduling app
                where I developed frontend components and connected them to a backend API. I'm comfortable with JavaScript,
                React, and working on a team using Git and GitHub."
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-5">
              <h3 className="font-medium text-slate-900 mb-2">Paragraph 3: Why you'd be a good fit</h3>
              <p className="text-slate-600 mb-3">Connect your experience to what they're looking for.</p>
              <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-700">
                <strong>Example:</strong> "I'm a quick learner and I'm eager to contribute to real-world projects.
                I'm especially excited about [something specific about the company or role]. I'd love the opportunity
                to bring my React skills to your team and learn from your engineers."
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-5">
              <h3 className="font-medium text-slate-900 mb-2">Closing</h3>
              <p className="text-slate-600 mb-3">Thank them and say you're looking forward to hearing from them.</p>
              <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-700">
                <strong>Example:</strong> "Thank you for considering my application. I've attached my resume and would
                be happy to discuss how I could contribute to your team."
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
          <h3 className="text-lg text-slate-900 mb-3">Tips for students</h3>
          <ul className="space-y-2 text-slate-700">
            <li>• Keep it short — half a page is fine</li>
            <li>• Be specific about why you want this job (not just "any job")</li>
            <li>• Mention 1-2 projects that relate to what they need</li>
            <li>• Don't just repeat your resume — add context or explain why something matters</li>
            <li>• It's okay to sound like a student. Don't pretend to have more experience than you do</li>
            <li>• Proofread carefully before submitting. Typos can distract from the quality of your work</li>
          </ul>
        </div>

        <Link
          to="/my-cover-letters"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
        >
          Start writing a cover letter
        </Link>
      </div>
    </div>
  );
}
