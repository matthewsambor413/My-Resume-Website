import { Metadata } from "next";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { siteContent } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "Portfolio Website — Matthew Sambor",
  description:
    "Building a high-end digital presence from the ground up. A case study in human-centric design and AI-accelerated development.",
};

export default function ResumeWebsitePage() {
  const cs = siteContent.resumeWebsite;

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
      heroImage="/images/resume-website/oldWebsite.png"
    />
  );
}
