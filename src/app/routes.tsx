import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/Dashboard";
import { ProjectDetail } from "./components/ProjectDetail";
import { StoryBuilder } from "./components/StoryBuilder";
import { SkillMap } from "./components/SkillMap";
import { EvidenceBoard } from "./components/EvidenceBoard";
import { BulletLab } from "./components/BulletLab";
import { PortfolioBuilder } from "./components/PortfolioBuilder";
import { JobMatchStudio } from "./components/JobMatchStudio";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "projects", Component: Dashboard },
      { path: "project/:id", Component: ProjectDetail },
      { path: "story-builder", Component: StoryBuilder },
      { path: "skill-map", Component: SkillMap },
      { path: "evidence-board", Component: EvidenceBoard },
      { path: "bullet-lab", Component: BulletLab },
      { path: "portfolio-builder", Component: PortfolioBuilder },
      { path: "job-match", Component: JobMatchStudio },
    ],
  },
]);
