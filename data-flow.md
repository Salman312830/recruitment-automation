Data Flow Documentation

This document explains how data moves through the Recruitment Automation System, from the moment a candidate uploads a CV until the final results are generated.

1. Candidate Upload

The candidate uploads a file (PDF or DOCX).

The file is stored securely in the system.

An upload log entry is created with a timestamp.

2. Parsing & Data Extraction

The uploaded file is processed through the parsing engine:

Extracts text from PDF/DOCX

Converts extracted text into a unified JSON structure

Extracts the following information:

Personal details

Skills

Experience

Achievements

Education

Contact information

3. AI Pre-Screening

The extracted data is analyzed using AI models to generate:

Skill Score

Experience Score

Behavioral Score

Achievements Score

Overall Fit Score

The AI compares the candidate's details with job requirements.

4. Ranking Engine

Once all candidates are processed:

Candidates are compared based on their Fit Score

A final ranking is generated according to:

Job requirements

Company criteria

AI scoring results

Output: A ranked list of top candidates.

5. Output and Reporting

The system generates a detailed report containing:

Top 10 candidates

Strengths of each candidate

Weaknesses

Final suitability score

Recommendation (Hire / Interview / Reject)

Results are exported to:

JSON

Google Sheets

Dashboard interfaces

6. Logging & Traceability

The system logs all actions:

File upload history

Parsing logs

AI scoring logs

Ranking logs

Error logs

Logs help with troubleshooting and improving system performance.

7. Error Handling

If parsing fails: the system retries twice

If AI evaluation fails: a fallback model is used

If the file is corrupted: the user is notified

8. Security Considerations

Files are encrypted during upload and storage

Sensitive data is anonymized when possible

Strict access controls protect candidate information

All requests use secure API keys
