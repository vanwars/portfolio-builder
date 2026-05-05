import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/Dashboard";
import { MyProjects } from "./components/MyProjects";
import { ResumeTemplates } from "./components/ResumeTemplates";
import { PortfolioTemplates } from "./components/PortfolioTemplates";
import { Bio } from "./components/Bio";
import { Skills } from "./components/Skills";
import { WorkHistory } from "./components/WorkHistory";
import { Certifications } from "./components/Certifications";
import { Publications } from "./components/Publications";
import { ChooseProject } from "./components/ChooseProject";
import { TellStory } from "./components/TellStory";
import { YourContribution } from "./components/YourContribution";
import { AddProof } from "./components/AddProof";
import { AddScreenshot } from "./components/AddScreenshot";
import { ConnectGithub } from "./components/ConnectGithub";
import { IdentifySkills } from "./components/IdentifySkills";
import { ImproveResumeBullet } from "./components/ImproveResumeBullet";
import { BuildPortfolioEntry } from "./components/BuildPortfolioEntry";
import { MatchToJob } from "./components/MatchToJob";
import { ProjectDetail } from "./components/ProjectDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "my-projects", Component: MyProjects },
      { path: "resume-templates", Component: ResumeTemplates },
      { path: "portfolio-templates", Component: PortfolioTemplates },
      { path: "bio", Component: Bio },
      { path: "skills", Component: Skills },
      { path: "work-history", Component: WorkHistory },
      { path: "certifications", Component: Certifications },
      { path: "publications", Component: Publications },
      { path: "choose-project", Component: ChooseProject },
      { path: "project/:id", Component: ProjectDetail },
      { path: "tell-story", Component: TellStory },
      { path: "your-contribution", Component: YourContribution },
      { path: "add-proof", Component: AddProof },
      { path: "add-screenshot", Component: AddScreenshot },
      { path: "connect-github", Component: ConnectGithub },
      { path: "identify-skills", Component: IdentifySkills },
      { path: "improve-bullet", Component: ImproveResumeBullet },
      { path: "build-portfolio", Component: BuildPortfolioEntry },
      { path: "match-job", Component: MatchToJob },
    ],
  },
]);
