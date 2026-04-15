### **SpendLogic: AI-Native Procurement Agent**

**Building an agentic "Risk Diagnostic" for SaaS spend and contract negotiation.**

#### **The Problem**

For most Finance and Procurement teams, software spend is a "black box" of manual processes. Identifying savings requires manually cross-referencing complex contracts against inconsistent market benchmarks, often leading to missed renewal deadlines and overpayment.

#### **The Solution**

I built **SpendLogic**, a high-fidelity AI Procurement Agent that transforms the static contract review process into an actionable "Negotiation Strategy Dashboard." The app uses agentic AI to not only extract data but to reason against benchmark intelligence and generate immediate procurement leverage.

#### **Key Features**

* **Agentic Extraction:** Utilizes a Node/Express backend integrated with **Claude 3.5 Sonnet** to transform unstructured PDF text into structured JSON commercial terms (ACV, seats, renewal dates).  
* **Benchmark Intelligence:** A persistent **Supabase-backed** engine that compares extracted terms against market benchmarks in real-time.  
* **Negotiation Playbook:** Automatically identifies "Gotcha" clauses and generates a vendor-ready negotiation email drafted with specific financial leverage points.  
* **Dynamic Benchmark Manager:** Includes a dedicated UI for uploading and managing benchmark CSVs to ensure pricing data stays fresh.

#### **The Process**

* **AI Implementation:** Connected to Anthropic’s SDK with a custom fallback layer to ensure 100% uptime even if API limits are reached.  
* **Data Persistence:** Engineered a SQL schema in **Supabase** to handle persistent storage for benchmark sources and rows.  
* **Technical Challenges:** Overcame PDF parsing limitations by implementing **pdf-parse** to handle real-world artifacts like the Klaviyo invoice PDF.  
* **Code Review & Optimization:** Utilized **Claude Code** to perform an end-to-end audit of the repository. This agentic hand-off allowed for automated refactoring of the state management logic, improved error handling for the PDF buffer stream, and the implementation of a "finishing touches" pass that polished the UI responsiveness across all breakpoints.  
* **Stack:** React, Vite, TypeScript, Tailwind CSS, Node.js, Supabase, and Claude API.

#### **Impact**

SpendLogic demonstrates how AI can shift a sales motion from a technical pitch to a consultative diagnostic. By quantifying the financial risk of inaction and identifying 10x smarter accuracy in pricing, the platform provides a personalized proof-of-concept that drives immediate confidence for finance institutions.

