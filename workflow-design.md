# Workflow Design

This document outlines the complete workflow for the Recruitment Automation system.  
It explains the sequence of operations, decision points, and automated actions performed throughout the pipeline.

---

## 1. Candidate Intake Process
- Candidates submit CVs through the provided upload interface.
- Files are stored securely in the system.
- Automated parsing extracts:
  - Personal details
  - Skills
  - Experience
  - Achievements
  - Contact information

---

## 2. Pre-Screening Automation
- ChatGPT analyzes extracted data.
- The system automatically scores candidates based on:
  - Job description match
  - Required technical skills
  - Years of experience
  - Certifications
  - Soft skills indicators

---

## 3. Ranking & Scoring
- Each candidate receives:
  - A total score (0–100)
