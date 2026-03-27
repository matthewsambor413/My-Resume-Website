import { Metadata } from "next";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { siteContent } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "Advanced Player Reports — Matthew Sambor",
  description:
    "From Canva draft to institutional MVP in record time. A case study in AI-assisted rapid prototyping.",
};

export default function PlayerReportsPage() {
  const cs = siteContent.playerReports;

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
      heroImage="/images/selected-work/portal_r4_reports-2-2880w.png"
    />
  );
}
