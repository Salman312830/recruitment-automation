# Extended Project Description – Recruitment Automation System

## 📌 Overview
This document provides the full technical and functional description of the Recruitment Automation System. It explains the entire workflow, modules, automations, data flow, and integration points. This system is designed to increase hiring efficiency using AI-driven automation.

---

## 🎯 Objectives
- Automate candidate screening and classification  
- Reduce manual recruiter workload  
- Improve consistency and fairness in hiring  
- Apply SLA rules for each stage of the hiring pipeline  
- Maintain structured, high-quality candidate data  
- Provide end-to-end workflow automation from CV upload to onboarding  

---

## 🧩 System Architecture

### **1. Candidate Intake**
- Upload CV (PDF/DOCX/Text)
- Extract candidate data using AI
- Classify candidate into:
  - **Rejected**
  - **Shortlisted**
  - **Accepted**
- Store standardised candidate JSON profile
- Automatically create candidate folder

---

### **2. Recruiter Review**
- Recruiter receives structured profile
- AI generates:
  - Skill match score
  - Skill gap analysis
  - Follow-up questions
- Recruiter adds comments & passes candidate to hiring manager
- **SLA: 24–48 hours**

---

### **3. Hiring Manager Review**
- Hiring manager views recruiter notes + AI analysis
- Decision options:
  - Approve for HR
  - Reject
  - Ask recruiter for more info
- **SLA: 48 hours**

---

### **4. HR Stage (Offer & Onboarding)**
- HR receives approved candidate profile
- System auto-generates:
  - Offer letter template
  - Onboarding checklist
  - Required documents list
- HR updates progress until onboarding completed

---

## ⏱ SLA Automation Rules
- Automated email/chat reminders
- Tagging overdue tasks
- Escalation to next manager after deadline
- Automatic timeline log

---

## 📁 Planned Repository Structure
