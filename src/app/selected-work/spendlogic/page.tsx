import { Metadata } from "next";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { siteContent } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "SpendLogic: AI Procurement Agent — Matthew Sambor",
  description:
    "Building an agentic 'Risk Diagnostic' for SaaS spend and contract negotiation using Claude, Supabase, and an AI-first development workflow.",
};

export default function SpendLogicPage() {
  const cs = siteContent.spendLogic;

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
      heroImage="/images/spendlogic/dashboard.png"
    />
  );
}
