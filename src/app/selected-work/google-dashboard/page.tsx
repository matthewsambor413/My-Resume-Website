import { Metadata } from "next";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { siteContent } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "Google Business Dashboard — Matthew Sambor",
  description:
    "Automating portfolio oversight with AI-driven development. A 2-hour sprint from idea to internal product.",
};

export default function GoogleDashboardPage() {
  const cs = siteContent.googleDashboard;

  return (
    <CaseStudyLayout
      label={cs.label}
      title={cs.title}
      caseTitle={cs.caseTitle}
      challenge={cs.challenge}
      role={cs.role}
      workflowIntro={cs.workflowIntro}
      steps={cs.steps}
      results={cs.results}
      finalImages={cs.finalImages}
      heroImage="/images/google-dashboard/dashboard.png"
      finalImagesFit="contain"
    />
  );
}
