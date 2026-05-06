import { Link } from 'react-router-dom';
import { Layout as LayoutIcon } from 'lucide-react';
import { useState } from 'react';
import { Sheet } from './Sheet';
import { PaletteSelector } from './PaletteSelector';
import { GridPortfolioTemplate } from './templates/GridPortfolioTemplate';
import { CaseStudyPortfolioTemplate } from './templates/CaseStudyPortfolioTemplate';
import { TimelinePortfolioTemplate } from './templates/TimelinePortfolioTemplate';
import { palettes } from '../lib/palettes';

export function PortfolioTemplates() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [selectedPalette, setSelectedPalette] = useState(palettes[0]);
  const templates = [
    {
      id: 1,
      name: 'Grid Layout',
      description: 'Project cards in a grid. Clean and visual. Great for showing multiple projects.',
      preview: 'Grid of project cards with images and short descriptions.',
      slug: 'grid',
    },
    {
      id: 2,
      name: 'Case Study',
      description: 'One project per page with detailed explanations. Good for fewer, deeper projects.',
      preview: 'Full-page case studies with process, challenges, and outcomes.',
      slug: 'case-study',
    },
    {
      id: 3,
      name: 'Timeline',
      description: 'Projects shown in chronological order. Shows your progression over time.',
      preview: 'Timeline layout showing growth from early to recent projects.',
      slug: 'timeline',
    },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl text-slate-900 mb-2">Portfolio Templates</h1>
        <p className="text-lg text-slate-600">
          Choose a template and we'll build a portfolio website with your projects.
        </p>
      </div>

      <div className="space-y-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-white border-2 border-slate-200 rounded-lg overflow-hidden hover:border-sage-600 transition-all"
          >
            <div className="flex">
              <div className="w-48 bg-slate-50 border-r border-slate-200 flex items-center justify-center p-8">
                <div className="w-32 h-40 bg-white border border-slate-300 rounded shadow-sm flex items-center justify-center">
                  <LayoutIcon className="w-12 h-12 text-slate-400" />
                </div>
              </div>
              <div className="flex-1 p-6">
                <h3 className="text-xl text-slate-900 mb-2">{template.name}</h3>
                <p className="text-slate-700 mb-4">{template.description}</p>
                <p className="text-slate-600 mb-6">{template.preview}</p>
                <div className="flex gap-3">
                  <Link
                    to="/my-projects"
                    className="px-4 py-2 bg-terracotta-600 text-white rounded-lg hover:bg-terracotta-700 transition-all inline-block"
                  >
                    Use this template
                  </Link>
                  <button
                    onClick={() => {
                      setSelectedTemplate(template.slug);
                      setPreviewOpen(true);
                    }}
                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-all"
                  >
                    Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="bg-sage-50 border border-sage-200 rounded-lg p-6">
          <p className="text-slate-700 mb-3">
            <strong>How this works:</strong> Choose a template and we'll create a simple portfolio website with your
            projects. You can publish it online or download it to host yourself.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
          <h3 className="text-lg text-slate-900 mb-3">What gets included?</h3>
          <ul className="space-y-2 text-slate-700">
            <li>• All your completed project entries</li>
            <li>• Screenshots and proof you've uploaded</li>
            <li>• Your GitHub links (if you've added them)</li>
            <li>• A simple About section with your background</li>
          </ul>
        </div>
      </div>

      <Sheet open={previewOpen} onOpenChange={setPreviewOpen}>
        <PaletteSelector selectedPalette={selectedPalette} onPaletteChange={setSelectedPalette} />
        {selectedTemplate === 'grid' && <GridPortfolioTemplate palette={selectedPalette} />}
        {selectedTemplate === 'case-study' && <CaseStudyPortfolioTemplate palette={selectedPalette} />}
        {selectedTemplate === 'timeline' && <TimelinePortfolioTemplate palette={selectedPalette} />}
      </Sheet>
    </div>
  );
}
