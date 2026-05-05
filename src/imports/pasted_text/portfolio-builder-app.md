Create a polished web app prototype for a tool called “Project-to-Portfolio Builder.”

The app helps upper-level college students turn class projects, team projects, client work, and technical assignments into resume bullets, portfolio case studies, and interview talking points. The core idea is that students have done meaningful work, but they need help reflecting on it, identifying what they learned, mapping their experience to employer-facing skills, and explaining their work clearly.

Design the app so it does NOT feel like a long form. It should feel like a guided career storytelling studio, evidence board, and project workbench.

Audience:
- Upper-level undergraduate computer science, web development, UX, data, and software engineering students
- Students preparing for internships, jobs, portfolios, LinkedIn, and interviews
- Instructors may assign reflection checkpoints during or after projects

Visual style:
- Modern, friendly, and professional
- Clean dashboard layout
- Warm academic/career-coaching feel, not corporate HR software
- Use cards, progress indicators, badges, timelines, and visual skill maps
- Avoid dense forms
- Use soft colors, rounded cards, clear icons, and spacious layouts

Core navigation:
1. Dashboard
2. My Projects
3. Story Builder
4. Skill Map
5. Evidence Board
6. Bullet Lab
7. Portfolio Builder
8. Job Match Studio

Create the following screens:

Screen 1: Dashboard / Workbench
- Welcome message: “Turn your projects into professional stories.”
- Summary cards:
  - Projects captured
  - Resume bullets drafted
  - Portfolio case studies
  - Evidence items saved
- A “Continue Reflection” card for the most recent project
- Project cards showing:
  - Project title
  - Course/context
  - Technologies
  - Skill badges
  - Completion status
- Button: “Add a Project”
- Button: “Tailor to a Job”

Screen 2: Project Card Detail
Show a project called “Course Scheduler App.”
Include:
- Project overview
- Technologies: React, FastAPI, PostgreSQL, GitHub
- Team size
- Role: Frontend + API Integration
- Skill badges: React, API Integration, GitHub Workflow, Team Collaboration, UX Feedback
- Progress sections:
  - Story: 70%
  - Evidence: 50%
  - Resume bullets: 80%
  - Portfolio case study: 40%
- A visual timeline showing milestones:
  - Prototype
  - API integration
  - User feedback
  - Final demo

Screen 3: Story Builder
Make this screen feel conversational, not like a form.
Use a chat-like guided reflection interface.
Prompt examples:
- “Tell me about something you built or helped build.”
- “What part were you personally responsible for?”
- “What was harder than expected?”
- “What would you show an employer as evidence?”
Show a student’s rough answer:
“I helped with the frontend and connected some pages to the backend.”
Then show the tool helping transform it:
“Stronger version: I built frontend views in React and connected them to backend API endpoints, helping the team turn project requirements into a working full-stack feature.”
Include buttons:
- “Yes, that’s accurate”
- “Make it more specific”
- “Ask me a follow-up”
- “Save to project story”

Screen 4: Skill Map
Create a visual map that connects project evidence to employer-facing skills.
Show skill clusters:
- Technical Skills
- Collaboration
- Design & UX
- Communication
- Problem Solving
Each cluster should contain skill badges.
Include a section called “Skills this project may demonstrate” with confirm buttons:
- React Development: Strong evidence
- REST API Integration: Strong evidence
- GitHub Pull Requests: Some evidence
- Cloud Deployment: Weak evidence
- Agile Workflow: Be careful / don’t overclaim
Use a confidence meter or colored labels for Strong, Some, Weak, and Avoid Overclaiming.

Screen 5: Evidence Board
Design this like a visual board or gallery.
Each evidence card should connect an artifact to a claim.
Evidence cards:
- Screenshot of dashboard → Shows UI implementation
- GitHub Pull Request #14 → Shows feature contribution
- Figma prototype → Shows design process
- API test results → Shows backend integration
- Client feedback notes → Shows stakeholder communication
Include upload/link options:
- Add GitHub link
- Add screenshot
- Add Figma file
- Add demo video
- Add reflection note
- Add code snippet

Screen 6: Bullet Lab
This screen helps students compare and improve resume bullets.
Show a “before and after” transformation.

Student draft:
“Helped with the frontend.”

Generated options:
A. Helped build a web app using React.
B. Built React components for a course scheduling application.
C. Developed reusable React components and connected frontend views to backend API endpoints in a team-based full-stack application.

Highlight option C as strongest.
Include a short explanation:
“Stronger because it names the technology, contribution, context, and outcome.”
Include buttons:
- “Use this bullet”
- “Make more concise”
- “Make more technical”
- “Make more collaboration-focused”
- “Check for overclaiming”

Screen 7: Portfolio Builder
Create a case study builder that looks like assembling sections, not filling out a form.
Sections:
- Overview
- My Role
- Process
- Challenge
- Technical Decisions
- Outcome
- What I Learned
- Evidence
Show a preview panel on the right with a portfolio case study layout.
Include a progress sidebar and draggable section cards.

Screen 8: Job Match Studio
This is Step 7 of the larger workflow.
The student pastes a job description, and the tool recommends which project evidence to foreground.
Use the title:
“Find your strongest evidence for this job.”
Show a sample role: “Frontend Developer Internship.”
Include a match visualization:
Strong matches:
- React components
- API integration
- GitHub workflow
Some evidence:
- UX feedback
- Testing
Weak or missing:
- TypeScript
- Automated testing
- Production deployment
Show recommendations:
- Feature “Course Scheduler App” first
- Use the React/API integration bullet
- Link the dashboard screenshot and GitHub PR
- Do not overemphasize cloud deployment
Include output tabs:
- Tailored resume bullets
- Portfolio projects to feature
- Interview talking points
- Skill gaps to work on

Interaction details:
- Use cards, badges, progress bars, and visual connections
- Avoid overwhelming students with too many fields at once
- Use microcopy that feels encouraging but not cheesy
- Emphasize honest, evidence-backed claims
- Include empty states that invite students to “add one artifact” rather than “complete a form”
- Make it look like a tool students would actually want to use before applying to jobs

Please generate a clickable, high-fidelity prototype with realistic sample content.