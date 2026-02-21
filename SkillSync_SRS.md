# Software Requirements Specification (SRS)
## SkillSync — Career Intelligence Platform

---

| Field | Detail |
|---|---|
| **Document Title** | Software Requirements Specification — SkillSync |
| **Version** | 1.0.0 |
| **Status** | Draft |
| **Prepared By** | SkillSync Product Team |
| **Date** | February 2026 |
| **Classification** | Confidential |

---

## Table of Contents

1. [Introduction](#1-introduction)
   - 1.1 Purpose
   - 1.2 Scope
   - 1.3 Definitions, Acronyms, and Abbreviations
   - 1.4 References
   - 1.5 Document Overview
2. [Overall Description](#2-overall-description)
   - 2.1 Product Perspective
   - 2.2 Product Functions
   - 2.3 User Classes and Characteristics
   - 2.4 Operating Environment
   - 2.5 Design and Implementation Constraints
   - 2.6 Assumptions and Dependencies
3. [System Features and Functional Requirements](#3-system-features-and-functional-requirements)
   - 3.1 User Authentication and Profile Management
   - 3.2 AI-Powered Job Matching Engine
   - 3.3 Skills Gap Analysis Module
   - 3.4 Personalised Learning Roadmap
   - 3.5 Application Analytics Dashboard
   - 3.6 Competitive Benchmarking Module
   - 3.7 Industry Intelligence Feed
   - 3.8 Notification and Alert System
   - 3.9 Course and Certification Management
   - 3.10 Admin and Content Management
4. [External Interface Requirements](#4-external-interface-requirements)
   - 4.1 User Interfaces
   - 4.2 Hardware Interfaces
   - 4.3 Software Interfaces
   - 4.4 Communication Interfaces
5. [Non-Functional Requirements](#5-non-functional-requirements)
   - 5.1 Performance Requirements
   - 5.2 Security Requirements
   - 5.3 Reliability and Availability
   - 5.4 Scalability
   - 5.5 Usability
   - 5.6 Maintainability
   - 5.7 Compliance
6. [Data Requirements](#6-data-requirements)
   - 6.1 Data Models
   - 6.2 Data Storage
   - 6.3 Data Retention and Deletion
7. [System Architecture Overview](#7-system-architecture-overview)
   - 7.1 High-Level Architecture
   - 7.2 Technology Stack
   - 7.3 Third-Party Integrations
8. [Use Cases](#8-use-cases)
9. [Constraints and Limitations](#9-constraints-and-limitations)
10. [Appendix](#10-appendix)

---

## 1. Introduction

### 1.1 Purpose

This Software Requirements Specification (SRS) document defines the complete functional and non-functional requirements for **SkillSync**, a career intelligence platform designed to bridge the gap between graduate qualifications and market-ready competence. The document is intended for use by software engineers, product managers, UX designers, QA engineers, and technical stakeholders responsible for the design, development, testing, and deployment of the SkillSync platform.

This SRS serves as the authoritative reference for what the system must do, how it must perform, and the constraints within which it must operate. It does not prescribe implementation details beyond what is necessary to define the system boundary.

### 1.2 Scope

SkillSync is a web and mobile application that provides:

- Intelligent, AI-driven job matching based on real-time user profiles and market data
- Personalised skills gap analysis comparing user competencies to hiring benchmarks
- Structured, role-specific learning roadmaps with integrated course content and resources
- Application performance analytics enabling data-driven job search strategy
- Competitive benchmarking against anonymised peer profiles of successfully hired candidates
- Live industry intelligence feeds tracking emerging employer skill demands
- Email and in-app notifications for matched opportunities and platform activity

The platform targets job seekers, career changers, and underemployed graduates primarily in Sub-Saharan Africa, with architecture designed to support global expansion. It does not replace recruitment agency services, act as an employer-facing ATS (Applicant Tracking System), or provide legally regulated career counselling.

### 1.3 Definitions, Acronyms, and Abbreviations

| Term | Definition |
|---|---|
| **SRS** | Software Requirements Specification |
| **AI** | Artificial Intelligence |
| **ML** | Machine Learning |
| **NLP** | Natural Language Processing |
| **API** | Application Programming Interface |
| **ATS** | Applicant Tracking System |
| **CV** | Curriculum Vitae |
| **UI** | User Interface |
| **UX** | User Experience |
| **MFA** | Multi-Factor Authentication |
| **OAuth** | Open Authorisation protocol |
| **JWT** | JSON Web Token |
| **RBAC** | Role-Based Access Control |
| **GDPR** | General Data Protection Regulation |
| **POPIA** | Protection of Personal Information Act (South Africa) |
| **SLA** | Service Level Agreement |
| **CDN** | Content Delivery Network |
| **REST** | Representational State Transfer |
| **WCAG** | Web Content Accessibility Guidelines |
| **Skills Gap** | The measurable difference between the skills a user currently has and the skills required to qualify competitively for a target role |
| **Match Score** | A computed percentage (0–100) indicating how well a user's profile aligns with a given job opportunity |
| **Roadmap** | A sequenced, personalised learning plan generated by the platform for a specific target role |
| **Cohort** | An anonymised group of candidates hired for roles within a defined sector, seniority level, and date range, used as benchmarking reference data |

### 1.4 References

- IEEE Std 830-1998: IEEE Recommended Practice for Software Requirements Specifications
- WCAG 2.1 Guidelines (W3C)
- OWASP Top 10 Security Risks (2023)
- GDPR (EU) 2016/679
- POPIA Act 4 of 2013 (South Africa)
- LinkedIn API Documentation (v2)
- OpenAI / LLM Provider API Documentation
- Stripe Payment API Documentation

### 1.5 Document Overview

Section 2 describes the product from a high level — its context, user classes, and operating environment. Section 3 defines all functional requirements organised by system feature. Section 4 covers external interfaces. Section 5 defines non-functional requirements. Sections 6–8 address data, architecture, and use cases respectively. Sections 9–10 cover constraints and supporting appendix material.

---

## 2. Overall Description

### 2.1 Product Perspective

SkillSync is a new, standalone platform. It does not replace any existing product but operates as an independent system that aggregates and synthesises data from multiple external sources (job boards, LinkedIn, course providers, industry databases) to deliver a unified career intelligence experience.

The platform interacts with:

- External job listing APIs (LinkedIn, Indeed, local job boards)
- LinkedIn profile import API
- Learning Management System (LMS) content providers
- Email delivery services (SendGrid / Amazon SES)
- Payment gateways (Stripe) for premium subscription management
- AI/ML model APIs for skills extraction, job matching, and gap analysis

SkillSync is not embedded within any third-party platform. It is accessed directly via a web application (responsive, desktop-first) and a native mobile application (iOS and Android).

### 2.2 Product Functions

At the highest level, SkillSync performs the following primary functions:

**Profile Intelligence** — Ingests and analyses user CVs, LinkedIn profiles, portfolios, and self-declared skills to construct a structured competency profile.

**Job Matching** — Continuously matches the user's competency profile against live job listings to surface the most relevant, realistic opportunities, ranked by match score.

**Skills Gap Analysis** — Computes the precise delta between a user's current profile and the demonstrated requirements of their target role, drawing on real hiring outcome data.

**Learning Roadmap Generation** — Produces a sequenced, achievable learning plan to close identified skills gaps, with specific course recommendations, project suggestions, and certification guidance.

**Application Analytics** — Tracks user application activity and outcomes, generating performance metrics and trend analysis to improve job search effectiveness.

**Competitive Benchmarking** — Provides anonymised comparative analysis between the user's profile and successfully hired candidates in equivalent roles.

**Industry Intelligence** — Delivers ongoing, sector-specific insights into evolving skill demands, emerging technologies, and hiring trend shifts.

**Notification Engine** — Proactively alerts users to matched job opportunities, platform milestones, and recommended next actions via email and in-app channels.

### 2.3 User Classes and Characteristics

#### 2.3.1 Job Seeker (Primary User)

The core user of the platform. Typically a graduate or early-to-mid career professional actively seeking employment or career advancement. Technical literacy varies from low to moderate. This user requires intuitive onboarding, clear visualisation of complex data, and actionable guidance with minimal cognitive overhead. The platform must not assume prior familiarity with career management tools.

| Attribute | Detail |
|---|---|
| **Age Range** | 18–35 (primary), 35–50 (secondary) |
| **Technical Literacy** | Low to Moderate |
| **Access Device** | Mobile-first in target markets; desktop for detailed work |
| **Session Length** | Short (5–15 min on mobile), long (30–60 min on desktop) |
| **Key Needs** | Job matches, skills clarity, learning direction, progress tracking |

#### 2.3.2 Career Changer

An existing professional transitioning to a new field. Has a prior career history that may not map directly to target role requirements. Requires nuanced gap analysis that accounts for transferable skills. Likely more analytically capable than a fresh graduate.

#### 2.3.3 Stay-at-Home Parent / Returnee

A user re-entering the workforce after a career break. Likely lacks recent formal employment history, may have developed informal skills, and may face confidence barriers in addition to skills gaps. The platform must handle sparse profiles gracefully and provide encouragement and low-barrier entry points.

#### 2.3.4 Platform Administrator

An internal SkillSync team member responsible for managing platform content, monitoring system health, managing user accounts, reviewing flagged content, and configuring AI model parameters. High technical and operational literacy. Accesses a separate admin dashboard not visible to end users.

#### 2.3.5 Content Partner / Course Provider

An organisation or individual that provides learning content hosted or linked within the platform. Requires a partner portal for content submission, tagging, and performance analytics. Interacts with the platform via a dedicated partner interface.

### 2.4 Operating Environment

| Environment Component | Specification |
|---|---|
| **Web Browser Support** | Chrome 100+, Firefox 100+, Safari 15+, Edge 100+ |
| **Mobile OS (App)** | iOS 15+, Android 10+ |
| **Server Environment** | Cloud-hosted (AWS / GCP), Linux-based containers |
| **Database** | PostgreSQL (primary relational), Redis (caching/sessions), Elasticsearch (search) |
| **Minimum Internet Speed** | 1 Mbps (core features); 5 Mbps recommended |
| **Offline Capability** | Course progress saved locally; synced on reconnect (mobile app) |
| **Accessibility** | WCAG 2.1 Level AA compliance required |

### 2.5 Design and Implementation Constraints

- **Language Localisation:** Initial release in English. Architecture must support multi-language content from v1.1 onwards. All user-facing strings must be externalised into localisation files at build time.
- **Data Residency:** User personal data must be stored within the geographic region of the user's country where technically and legally feasible, in compliance with applicable data protection law.
- **AI Model Transparency:** The platform must not present AI-generated recommendations without the ability to surface the reasoning behind them (explainability layer required).
- **Mobile Performance:** Mobile application must achieve a Lighthouse performance score of 80+ on a mid-range Android device on a 4G connection.
- **Third-Party Job Data:** Job listing data retrieved from external APIs must be clearly attributed to the source and must not be stored beyond the provider's permitted retention period.
- **Payment Compliance:** All payment processing must be handled by a PCI DSS Level 1 compliant payment provider. Card data must never be stored on SkillSync servers.

### 2.6 Assumptions and Dependencies

- Users have access to an internet-connected device capable of running a modern browser or the SkillSync mobile application.
- LinkedIn's public API will remain available under the agreed developer terms for profile data import. Loss of API access triggers a graceful degradation to manual CV upload only.
- Third-party job board APIs provide data in a parseable, structured format. Where APIs are unavailable, web scraping may be used only in compliance with the target site's terms of service.
- AI/ML model performance assumes a minimum training dataset of 50,000 candidate profiles and 10,000 verified hiring outcome records to produce reliable match scores. Model accuracy will improve over time as platform data accrues.
- Email deliverability rates assume a properly configured domain with SPF, DKIM, and DMARC records.

---

## 3. System Features and Functional Requirements

Each requirement is assigned a unique identifier in the format `SS-[MODULE]-[NUMBER]`. Priority is classified as **Critical** (must be in v1.0), **High** (must be in v1.0 or v1.1), or **Medium** (targeted for v1.1 or v1.2).

---

### 3.1 User Authentication and Profile Management

#### 3.1.1 Feature Description

The authentication and profile management module handles all aspects of user identity — registration, login, session management, and the creation and maintenance of the core user profile that drives all platform intelligence.

#### 3.1.2 Functional Requirements

**SS-AUTH-001** | Priority: Critical
The system shall allow users to register using an email address and password. Email verification shall be required before access to platform features is granted.

**SS-AUTH-002** | Priority: Critical
The system shall support OAuth 2.0 social login via Google and LinkedIn. On LinkedIn login, the system shall request permission to import the user's public profile data and pre-populate the profile accordingly.

**SS-AUTH-003** | Priority: Critical
The system shall enforce a minimum password complexity policy: at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.

**SS-AUTH-004** | Priority: High
The system shall support Multi-Factor Authentication (MFA) via authenticator app (TOTP) and SMS OTP. MFA shall be optional for standard users and mandatory for administrator accounts.

**SS-AUTH-005** | Priority: Critical
The system shall issue JWT access tokens with a maximum expiry of 60 minutes and refresh tokens with a maximum expiry of 30 days. Refresh tokens shall be rotated on each use.

**SS-AUTH-006** | Priority: Critical
The system shall allow users to reset their password via a time-limited (15-minute) link sent to their registered email address.

**SS-AUTH-007** | Priority: Critical
The system shall allow users to create and maintain a structured profile comprising the following data categories:
- Personal information (name, location, contact details)
- Education history (institution, qualification, field of study, year)
- Work experience (employer, role, dates, responsibilities, achievements)
- Skills (self-declared, platform-verified, imported from CV or LinkedIn)
- Certifications (name, issuing body, date, expiry, link)
- Portfolio links (GitHub, Behance, personal website, or uploaded files)
- Career preferences (target roles, industries, work type, salary range, location preference)

**SS-AUTH-008** | Priority: Critical
The system shall accept CV uploads in PDF, DOCX, and TXT formats up to 5MB. The AI engine shall parse the CV and automatically populate the corresponding profile fields, with the user able to review, confirm, or correct the extracted data before saving.

**SS-AUTH-009** | Priority: High
The system shall provide a profile completeness indicator displaying the percentage of profile fields populated and a prioritised list of fields the system recommends completing to improve match score accuracy.

**SS-AUTH-010** | Priority: High
The system shall allow users to import or re-sync their LinkedIn profile at any time. The import shall update only fields that the user has not manually overridden, unless the user explicitly selects a full overwrite.

**SS-AUTH-011** | Priority: Critical
The system shall allow users to permanently delete their account and all associated personal data within 30 days of the request, in compliance with applicable data protection regulations.

**SS-AUTH-012** | Priority: High
The system shall allow users to export their profile data in JSON and PDF formats at any time.

---

### 3.2 AI-Powered Job Matching Engine

#### 3.2.1 Feature Description

The job matching engine is the core intelligence layer of SkillSync. It continuously evaluates the user's structured profile against a live database of job listings and produces a ranked list of matched opportunities, each accompanied by a match score and a breakdown of matching and non-matching criteria.

#### 3.2.2 Functional Requirements

**SS-MATCH-001** | Priority: Critical
The system shall aggregate job listings from a minimum of three external job data sources (e.g., LinkedIn Jobs API, Indeed API, local job boards) and maintain an indexed database of active listings refreshed at least every 6 hours.

**SS-MATCH-002** | Priority: Critical
The system shall compute a Match Score (0–100) for each job listing relative to each user's profile. The score shall be derived from a weighted combination of the following factors:
- Skills alignment (required and preferred skills present on profile)
- Experience level match (years of experience and seniority)
- Education match (qualification type and field relevance)
- Certification match (required and preferred certifications)
- Location and work-type preference alignment
- Industry alignment

**SS-MATCH-003** | Priority: Critical
The system shall display matched job listings ranked by Match Score in descending order. The user shall be able to filter results by minimum Match Score threshold, location, work type (remote/hybrid/on-site), salary range, industry, and date posted.

**SS-MATCH-004** | Priority: Critical
Each matched job listing displayed to the user shall include:
- Job title, employer name, location, and work type
- Match Score with a colour-coded visual indicator (green: 75–100, amber: 50–74, red: below 50)
- A breakdown panel listing matched skills, missing skills, and matched/missing qualifications
- Estimated skills gap closure time based on the user's active roadmap
- Direct link to the original job posting

**SS-MATCH-005** | Priority: High
The system shall allow users to save, archive, or dismiss individual job listings. Dismissed listings shall not reappear in the primary feed but shall be accessible in a dismissed items archive.

**SS-MATCH-006** | Priority: High
The system shall learn from user behaviour (saved listings, dismissals, application actions) to progressively refine match scoring for that user. Preference signals shall be weighted more heavily than default scoring parameters after 10 or more observed interactions.

**SS-MATCH-007** | Priority: High
The system shall expose a "Why am I a match?" explainability panel for each job listing, providing a plain-English summary of the primary factors driving the match score.

**SS-MATCH-008** | Priority: Medium
The system shall support a "stretch role" toggle that surfaces listings with a Match Score below the user's defined threshold, labelled clearly as aspirational matches, alongside the skills most needed to become competitive.

**SS-MATCH-009** | Priority: Critical
The system shall remove expired or filled job listings from the active matching pool within 24 hours of the listing being marked inactive at the source.

---

### 3.3 Skills Gap Analysis Module

#### 3.3.1 Feature Description

The skills gap analysis module quantifies the difference between a user's current competency profile and the demonstrated competency requirements of their target role, using real hiring outcome data as the benchmark rather than generic job description requirements.

#### 3.3.2 Functional Requirements

**SS-SKILLS-001** | Priority: Critical
The system shall allow users to designate one or more target roles. For each target role, the system shall generate a Skills Gap Report comprising:
- A list of skills the user currently has that are relevant to the target role
- A list of skills the user is missing that are required by employers in that role (required gaps)
- A list of skills the user is missing that appear frequently in hired candidate profiles for that role (competitive gaps)
- A prioritised gap closure sequence based on frequency of requirement and estimated learning time

**SS-SKILLS-002** | Priority: Critical
The system shall maintain a Skills Taxonomy — a structured, hierarchical database of skills organised by domain, subdomain, and proficiency level. The taxonomy shall be updated at minimum monthly to reflect emerging skills identified from live job market data.

**SS-SKILLS-003** | Priority: Critical
The AI engine shall extract skills from user CVs, LinkedIn profiles, and portfolio links using NLP-based entity recognition. Extracted skills shall be mapped to the platform's Skills Taxonomy and presented to the user for confirmation.

**SS-SKILLS-004** | Priority: High
The system shall assign a proficiency level estimate (Beginner / Intermediate / Advanced / Expert) to each skill on the user's profile, inferred from context (years of experience, project complexity, role seniority). Users shall be able to override this estimate.

**SS-SKILLS-005** | Priority: High
The system shall provide a visual Skills Radar Chart displaying the user's current proficiency across key skill domains relevant to their target role, overlaid with the proficiency profile of the average successfully hired candidate in that role.

**SS-SKILLS-006** | Priority: High
The system shall update the Skills Gap Report automatically whenever the user's profile is updated, the target role is changed, or the underlying hiring benchmark data for the target role is refreshed.

**SS-SKILLS-007** | Priority: Medium
The system shall identify transferable skills from the user's existing profile that, while not identical to required skills, are semantically related and may partially satisfy employer requirements. These shall be highlighted in the Skills Gap Report as "Partial Matches."

---

### 3.4 Personalised Learning Roadmap

#### 3.4.1 Feature Description

The learning roadmap translates the Skills Gap Report into a concrete, sequenced action plan. Each roadmap is specific to the user's target role, current profile, and available time commitment, and includes recommended learning resources, projects, and certifications sourced from the platform's curated content library.

#### 3.4.2 Functional Requirements

**SS-ROAD-001** | Priority: Critical
Upon generation of a Skills Gap Report for a target role, the system shall automatically generate a Personalised Learning Roadmap comprising:
- A sequenced list of skills to acquire, ordered by dependency (foundational skills first) and employer demand frequency
- For each skill: at least one recommended course, at least one recommended project brief, and (where applicable) a recommended certification
- An estimated total time to roadmap completion based on the user's self-declared weekly availability
- Milestone checkpoints at 25%, 50%, 75%, and 100% completion

**SS-ROAD-002** | Priority: Critical
The system shall allow users to declare their weekly learning availability (in hours) and use this to compute a projected roadmap completion date. The user shall be able to update their availability at any time, which shall trigger a recalculation of the projected completion date.

**SS-ROAD-003** | Priority: Critical
The system shall maintain a Course Library containing a minimum of 500 courses at launch, organised by skill, domain, and difficulty level. Courses shall include:
- Title, provider, format (video / text / interactive), duration, cost (free or paid), and difficulty rating
- A relevance tag indicating which target roles and skills gaps the course addresses
- User ratings and completion data where available

**SS-ROAD-004** | Priority: High
The system shall support both internal courses (hosted natively on the platform) and external courses (linked to third-party providers such as Coursera, Udemy, edX, and LinkedIn Learning). External course completion shall require manual confirmation by the user.

**SS-ROAD-005** | Priority: High
The system shall track the user's progress through each roadmap item and update the Skills Gap Report and Match Scores accordingly as items are marked complete.

**SS-ROAD-006** | Priority: High
The system shall generate Project Briefs for each skill — short, practical project specifications that demonstrate real-world application of the skill. Completed projects shall be linkable from the user's profile as portfolio evidence.

**SS-ROAD-007** | Priority: High
The system shall recommend Certifications relevant to each target role, ranked by frequency of appearance in hired candidate profiles. For each certification, the system shall provide study material links, estimated study time, examination cost, and a link to the official examination registration page.

**SS-ROAD-008** | Priority: Medium
The system shall allow users to manually add skills, courses, or certifications to their roadmap that were not auto-generated. Manually added items shall be tracked in the same way as auto-generated items.

**SS-ROAD-009** | Priority: Medium
The system shall allow multiple concurrent roadmaps for users who have designated more than one target role. Roadmap progress shall be tracked independently per target role.

---

### 3.5 Application Analytics Dashboard

#### 3.5.1 Feature Description

The analytics dashboard provides job seekers with objective, data-driven visibility into the performance of their job search activity, enabling them to identify what is and is not working and adjust their strategy accordingly.

#### 3.5.2 Functional Requirements

**SS-ANALYTICS-001** | Priority: Critical
The system shall provide a dashboard enabling users to log job applications, including:
- Job title, employer, date applied, application channel, and current status
- The Match Score at the time of application
- Notes field for user observations

**SS-ANALYTICS-002** | Priority: Critical
The dashboard shall display the following aggregate metrics:
- Total applications submitted (all time and by selectable time period)
- Application-to-response rate (percentage of applications that received any response)
- Application-to-interview rate
- Interview-to-offer rate
- Average time from application to first response
- Match Score distribution across submitted applications

**SS-ANALYTICS-003** | Priority: High
The system shall display trend charts showing application activity and outcome rates over time (weekly and monthly views), enabling users to identify periods of improvement or decline.

**SS-ANALYTICS-004** | Priority: High
The system shall provide a breakdown of performance metrics by sector, role type, and application channel, allowing the user to identify which categories produce the best response rates.

**SS-ANALYTICS-005** | Priority: High
The system shall display an "Insights" panel with AI-generated, plain-English observations derived from the user's application data (e.g., "Applications to roles requiring Python are yielding a 40% higher response rate than those that do not. Consider prioritising these." )

**SS-ANALYTICS-006** | Priority: Medium
The system shall allow users to set application targets (e.g., 10 applications per week) and display progress against those targets with visual indicators.

---

### 3.6 Competitive Benchmarking Module

#### 3.6.1 Feature Description

The competitive benchmarking module allows users to compare their profile directly against the profiles of candidates who were successfully hired for equivalent roles, using anonymised cohort data. This provides an objective picture of the distance between a user's current state and the competitive threshold for their target role.

#### 3.6.2 Functional Requirements

**SS-BENCH-001** | Priority: High
The system shall maintain Cohort Profiles — aggregated, anonymised profile summaries constructed from verified hiring outcome data for defined role/seniority/sector combinations. Cohort Profiles shall include:
- Median years of experience
- Most common qualifications and fields of study
- Top 10 most common skills (ranked by frequency)
- Top 5 most common certifications
- Percentage with a portfolio/GitHub presence
- Percentage with relevant extracurricular or community contributions

**SS-BENCH-002** | Priority: High
The system shall display a side-by-side comparison between the user's profile and the relevant Cohort Profile for their target role, with clear visual indication of where the user meets, exceeds, or falls below the cohort benchmark.

**SS-BENCH-003** | Priority: High
The system shall compute and display a **Competitive Readiness Score** (0–100) representing the user's overall proximity to the hired cohort benchmark. The score shall be decomposed into sub-scores by category (skills, experience, qualifications, certifications, portfolio).

**SS-BENCH-004** | Priority: Medium
The system shall allow users to view how the Cohort Profile for their target role has evolved over the past 12 months, highlighting skills that have recently entered or exited the top 10 frequency list.

**SS-BENCH-005** | Priority: High
All cohort data displayed to users shall be fully anonymised. No individual's profile data shall be identifiable from cohort summaries. Cohorts shall require a minimum of 30 data points before being surfaced.

---

### 3.7 Industry Intelligence Feed

#### 3.7.1 Feature Description

The industry intelligence feed provides users with continuously updated, sector-specific insights into hiring trends, emerging skill demands, salary movements, and macro-level market signals relevant to their target role and industry.

#### 3.7.2 Functional Requirements

**SS-INTEL-001** | Priority: High
The system shall display a personalised Intelligence Feed on the user's dashboard, surfacing content relevant to their target role(s) and industry. Content categories shall include:
- Emerging skills: skills appearing with increasing frequency in job listings for the user's target role
- Declining skills: skills appearing with decreasing frequency (with recommended pivot guidance)
- Hiring activity: trends in volume of open roles in the user's target sector
- Salary insights: median and range data for the user's target role by geography
- Notable employers: companies in the user's target sector currently hiring at scale

**SS-INTEL-002** | Priority: High
Intelligence content shall be derived from a combination of live job listing data analysis, publicly available labour market data, and curated editorial content. Each intelligence item shall display its data source and the date of last update.

**SS-INTEL-003** | Priority: Medium
The system shall allow users to follow specific companies and receive alerts when those companies post new roles relevant to the user's profile.

**SS-INTEL-004** | Priority: Medium
The system shall provide a weekly "Market Brief" — a curated, plain-English summary of the top 3–5 developments relevant to the user's target sector — delivered via email and viewable in-app.

---

### 3.8 Notification and Alert System

#### 3.8.1 Feature Description

The notification system proactively surfaces time-sensitive information to users across email and in-app channels, ensuring users are aware of matched opportunities and platform activities without requiring constant manual checking.

#### 3.8.2 Functional Requirements

**SS-NOTIFY-001** | Priority: Critical
The system shall send email notifications to users for the following events:
- New job matches above a user-defined Match Score threshold (configurable: immediate, daily digest, weekly digest)
- Roadmap milestone reached (25%, 50%, 75%, 100%)
- Profile completeness prompt (triggered when completeness falls below 60%)
- Weekly application analytics summary
- Weekly Market Brief (if subscribed)
- Security events (login from new device, password change, MFA change)

**SS-NOTIFY-002** | Priority: Critical
The system shall display in-app notifications for all events listed in SS-NOTIFY-001 plus:
- Application status updates (when the user updates a tracked application)
- New course recommendations added to the user's roadmap
- Cohort benchmark updates for the user's target role

**SS-NOTIFY-003** | Priority: High
The system shall provide a Notification Preferences panel allowing users to independently enable or disable each notification type and configure delivery channel (email, in-app, or both) and frequency (immediate, daily, weekly) for each.

**SS-NOTIFY-004** | Priority: Critical
All email notifications shall include an accessible unsubscribe link. Unsubscribing from a specific notification type shall not affect other notification preferences.

**SS-NOTIFY-005** | Priority: High
The system shall support push notifications on the mobile application for time-sensitive events (new high-match job listings, security alerts). Push notification permissions shall be requested explicitly with a clear explanation of purpose.

---

### 3.9 Course and Certification Management

#### 3.9.1 Feature Description

This module manages the delivery, tracking, and validation of learning content consumed through the platform, including internally hosted courses and externally linked content.

#### 3.9.2 Functional Requirements

**SS-LEARN-001** | Priority: Critical
The system shall allow users to enrol in internally hosted courses. Course content formats shall include video lessons, text-based modules, quizzes, and practical assessments.

**SS-LEARN-002** | Priority: Critical
The system shall track progress through each enrolled course at the module level, persisting progress across sessions and devices. A user shall be able to resume any course from the exact point they left off.

**SS-LEARN-003** | Priority: High
Upon completion of an internal course, the system shall issue a verifiable digital completion certificate. The certificate shall include the user's name, course title, completion date, and a unique verification URL.

**SS-LEARN-004** | Priority: High
The system shall allow users to mark external courses as complete and upload supporting evidence (certificate image or PDF). Uploaded evidence shall be stored against the user's profile and the relevant roadmap item.

**SS-LEARN-005** | Priority: High
The system shall display a learning progress summary on the user's dashboard, including total courses completed, total learning hours logged, and active course(s) with current progress percentage.

**SS-LEARN-006** | Priority: Medium
The system shall support course ratings and reviews submitted by users who have completed the course. Ratings shall be used to sort and surface recommended content.

---

### 3.10 Admin and Content Management

#### 3.10.1 Feature Description

The admin module provides internal SkillSync team members with tools to manage platform content, users, AI model configuration, and system health monitoring.

#### 3.10.2 Functional Requirements

**SS-ADMIN-001** | Priority: Critical
The system shall provide a password-protected admin portal, accessible only to users with the Administrator role. Admin access shall require MFA at every login.

**SS-ADMIN-002** | Priority: Critical
Administrators shall be able to:
- View, search, and filter the full user base
- Suspend, reactivate, or permanently delete user accounts
- View individual user activity logs (excluding personal message content)
- Reset user passwords and revoke active sessions

**SS-ADMIN-003** | Priority: Critical
Administrators shall be able to manage the Course Library:
- Add, edit, archive, and delete course entries
- Assign skills tags and difficulty ratings
- Manage partner content submissions and publication status

**SS-ADMIN-004** | Priority: High
Administrators shall be able to manage the Skills Taxonomy:
- Add new skills and categories
- Merge duplicate skills entries
- Deprecate obsolete skills
- View skill frequency data from job listing analysis

**SS-ADMIN-005** | Priority: High
The admin portal shall provide a System Health Dashboard displaying:
- API response times (P50, P95, P99) over 24h, 7d, 30d
- Database query performance
- Active session count
- Email delivery success rate
- Job listing ingestion status and last refresh timestamp
- AI model inference latency

**SS-ADMIN-006** | Priority: High
Administrators shall be able to configure AI model parameters including match score weighting factors, minimum cohort size thresholds, and skills taxonomy update frequency.

---

## 4. External Interface Requirements

### 4.1 User Interfaces

**SS-UI-001** The web application shall be fully responsive, supporting viewport widths from 320px (mobile) to 2560px (wide desktop) without horizontal scrolling or content truncation.

**SS-UI-002** The application shall comply with WCAG 2.1 Level AA accessibility standards, including sufficient colour contrast ratios (minimum 4.5:1 for body text), keyboard navigability for all interactive elements, and screen reader compatibility.

**SS-UI-003** All primary user actions shall be completable within 3 clicks or taps from the main navigation.

**SS-UI-004** Loading states shall be communicated to the user via skeleton screens or progress indicators. No user-facing screen shall display a blank white state for longer than 500ms while data is loading.

**SS-UI-005** Error states shall display actionable, human-readable messages. Technical error codes shall not be displayed to end users.

**SS-UI-006** The mobile application shall follow platform-specific design conventions — Material Design 3 guidelines for Android and Apple Human Interface Guidelines for iOS.

### 4.2 Hardware Interfaces

The platform has no direct hardware interface requirements. It operates entirely through software running on user devices and cloud infrastructure. The mobile application may access the following device capabilities with explicit user permission:

- Camera (for portfolio photo upload and document scanning)
- Push notification service (APNs for iOS, FCM for Android)
- Local storage (for offline course progress caching)

### 4.3 Software Interfaces

| Integration | Purpose | Protocol | Auth Method |
|---|---|---|---|
| LinkedIn API v2 | Profile import | REST/HTTPS | OAuth 2.0 |
| Indeed API | Job listing ingestion | REST/HTTPS | API Key |
| LinkedIn Jobs API | Job listing ingestion | REST/HTTPS | OAuth 2.0 |
| OpenAI API (or equivalent LLM) | NLP, skills extraction, gap analysis, roadmap generation | REST/HTTPS | API Key |
| SendGrid / Amazon SES | Transactional email delivery | REST/HTTPS | API Key |
| Stripe API | Subscription billing and payment processing | REST/HTTPS | API Key + Webhook |
| Cloudinary / S3 | CV, portfolio, and certificate file storage | REST/HTTPS | IAM / Signed URLs |
| Elasticsearch | Full-text job search and skills taxonomy search | REST/HTTPS | Internal Auth |
| Firebase Cloud Messaging | Android push notifications | HTTPS | Service Account |
| Apple Push Notification Service | iOS push notifications | HTTP/2 | Certificate |

### 4.4 Communication Interfaces

- All client-server communication shall use HTTPS (TLS 1.2 minimum, TLS 1.3 preferred).
- Internal service-to-service communication shall use mTLS within the private network.
- The public REST API shall follow RESTful conventions with JSON request and response bodies.
- API versioning shall follow the format `/api/v{n}/` in the URL path.
- WebSocket connections shall be used for real-time in-app notification delivery.

---

## 5. Non-Functional Requirements

### 5.1 Performance Requirements

**SS-PERF-001** The application shall return search results and job matches within 2 seconds for 95% of requests under normal load conditions (defined as up to 10,000 concurrent users).

**SS-PERF-002** CV parsing and initial profile population shall complete within 30 seconds for 95% of uploads.

**SS-PERF-003** Skills Gap Report generation shall complete within 10 seconds for a profile against a single target role.

**SS-PERF-004** The application shall achieve a Google Lighthouse Performance Score of 85+ on desktop and 75+ on mobile for all primary user-facing pages.

**SS-PERF-005** The application shall support at least 50,000 registered users and 10,000 concurrent active sessions in v1.0, with architecture capable of scaling horizontally to 500,000 registered users without re-architecture.

**SS-PERF-006** AI model inference (match scoring, gap analysis, roadmap generation) shall complete within 5 seconds for 90% of requests under normal load.

### 5.2 Security Requirements

**SS-SEC-001** All user passwords shall be hashed using bcrypt with a minimum cost factor of 12. Plaintext passwords shall never be stored, logged, or transmitted.

**SS-SEC-002** The application shall implement rate limiting on all authentication endpoints: maximum 5 failed login attempts per account within a 15-minute window before a temporary account lock is applied.

**SS-SEC-003** All user-uploaded content (CVs, certificates, portfolio files) shall be scanned for malware before processing or storage.

**SS-SEC-004** The application shall implement Content Security Policy (CSP), HTTP Strict Transport Security (HSTS), X-Frame-Options, and X-Content-Type-Options headers on all responses.

**SS-SEC-005** SQL injection, XSS, and CSRF protections shall be implemented across all input-accepting endpoints, following OWASP Top 10 mitigation guidance.

**SS-SEC-006** All sensitive user data (PII, CV content, application history) shall be encrypted at rest using AES-256 and in transit using TLS 1.2+.

**SS-SEC-007** The platform shall implement Role-Based Access Control (RBAC) with a minimum of three roles: End User, Content Partner, and Administrator. Role assignments shall be stored server-side and validated on every API request.

**SS-SEC-008** Security events (failed logins, password resets, role changes, account deletions) shall be written to an immutable audit log retained for a minimum of 12 months.

**SS-SEC-009** Third-party API keys and secrets shall be stored in a dedicated secrets management service (e.g., AWS Secrets Manager) and shall never be hardcoded in application source code or committed to version control.

**SS-SEC-010** A penetration test shall be conducted by a qualified third party before the platform's public launch. Critical and high-severity findings shall be remediated before go-live.

### 5.3 Reliability and Availability

**SS-REL-001** The platform shall target a minimum availability of 99.5% uptime measured monthly, excluding scheduled maintenance windows.

**SS-REL-002** Scheduled maintenance windows shall not exceed 2 hours per calendar month and shall be communicated to users a minimum of 48 hours in advance via email and in-app notification.

**SS-REL-003** The system shall implement automated health checks on all critical services with a maximum detection-to-alert time of 60 seconds.

**SS-REL-004** Database backups shall be performed daily. Full backups shall be retained for 30 days. Point-in-time recovery shall be supported for the preceding 7 days.

**SS-REL-005** The Recovery Time Objective (RTO) for a full platform outage shall not exceed 4 hours. The Recovery Point Objective (RPO) shall not exceed 1 hour.

**SS-REL-006** The platform shall implement graceful degradation: if the AI matching engine is unavailable, the platform shall continue to serve basic job listing search functionality and display a user-facing notice about reduced matching capability.

### 5.4 Scalability

**SS-SCALE-001** The application shall be deployed using containerised microservices (Docker / Kubernetes) to support independent horizontal scaling of high-load components (matching engine, notification service, course delivery).

**SS-SCALE-002** The job listing database shall support at minimum 1 million active listings without degradation in search response time.

**SS-SCALE-003** The system shall implement a queue-based architecture (e.g., RabbitMQ or AWS SQS) for asynchronous tasks including CV parsing, roadmap generation, email dispatch, and bulk match score recomputation.

**SS-SCALE-004** CDN caching shall be implemented for all static assets and cacheable API responses. Cache invalidation strategies shall be defined and documented for each cacheable resource type.

### 5.5 Usability

**SS-USE-001** A new user shall be able to complete the onboarding flow (registration, CV upload, target role selection, and first job match review) within 10 minutes without external assistance.

**SS-USE-002** All data visualisations (match scores, skills radar, analytics charts) shall include text-based equivalents accessible to screen readers and users who cannot perceive colour.

**SS-USE-003** The platform shall support users with low-literacy profiles through the use of visual indicators, icons, and plain-English summaries alongside all analytical outputs.

**SS-USE-004** User research and usability testing shall be conducted with a representative sample of the target user population (including users from Sub-Saharan Africa on low-end mobile devices) before each major release.

### 5.6 Maintainability

**SS-MAINT-001** All application code shall be maintained in a version-controlled repository with a branching strategy enforcing code review before merging to the main branch.

**SS-MAINT-002** Unit test coverage shall be maintained at a minimum of 80% for all business logic modules. Integration tests shall cover all critical API endpoints.

**SS-MAINT-003** The platform shall implement centralised structured logging (e.g., using a log aggregation service such as Datadog or ELK Stack) for all services, with a minimum log retention period of 90 days.

**SS-MAINT-004** All configuration values that may vary between environments (development, staging, production) shall be managed via environment variables and shall not be hardcoded.

**SS-MAINT-005** API documentation shall be maintained using the OpenAPI 3.0 specification and shall be auto-generated from code annotations where possible. Documentation shall be updated as a mandatory step in the definition of done for any API change.

### 5.7 Compliance

**SS-COMP-001** The platform shall comply with the General Data Protection Regulation (GDPR) for users in the European Union, including lawful basis for processing, data subject rights (access, rectification, erasure, portability), and breach notification obligations.

**SS-COMP-002** The platform shall comply with the Protection of Personal Information Act (POPIA) for users in South Africa.

**SS-COMP-003** A Privacy Policy and Terms of Service shall be presented to users during registration. Acceptance of both shall be recorded with a timestamp before account activation.

**SS-COMP-004** The platform shall implement a Cookie Consent mechanism compliant with ePrivacy Directive requirements for users in applicable jurisdictions.

**SS-COMP-005** All payment processing shall comply with PCI DSS standards. The platform shall not store, process, or transmit cardholder data directly — all such activity shall be delegated to the PCI DSS Level 1 compliant payment provider.

---

## 6. Data Requirements

### 6.1 Data Models

The following entities constitute the core data model. Detailed ERD diagrams are maintained separately in the technical design documentation.

**User** — id, email, password_hash, created_at, status, mfa_enabled, role, subscription_tier

**Profile** — user_id, name, location, phone, headline, summary, completeness_score, last_updated

**Experience** — id, profile_id, employer, title, start_date, end_date, description, skills_extracted[]

**Education** — id, profile_id, institution, qualification, field, start_year, end_year, grade

**Skill** — id, name, taxonomy_id, domain, subdomain, proficiency_level, verified, source

**ProfileSkill** — profile_id, skill_id, proficiency_level, source (cv_parsed / linkedin / self_declared / course_completed), verified_at

**TargetRole** — id, user_id, job_title, industry, seniority, created_at, active

**JobListing** — id, source, source_id, title, employer, location, work_type, salary_min, salary_max, skills_required[], skills_preferred[], posted_at, expires_at, active

**MatchResult** — id, user_id, job_listing_id, match_score, breakdown{}, computed_at

**SkillsGapReport** — id, user_id, target_role_id, matched_skills[], required_gaps[], competitive_gaps[], generated_at

**Roadmap** — id, user_id, target_role_id, status, weekly_hours, projected_completion, created_at

**RoadmapItem** — id, roadmap_id, skill_id, sequence_order, item_type (course/project/certification), resource_id, status, completed_at

**Application** — id, user_id, job_listing_id, applied_at, status, match_score_at_application, notes

**Course** — id, title, provider, format, duration_hours, cost, difficulty, skills[], rating, active

**Enrollment** — id, user_id, course_id, enrolled_at, progress_pct, completed_at, certificate_url

**Notification** — id, user_id, type, channel, content, sent_at, read_at

**CohortProfile** — id, target_role_id, seniority, geography, data_points_count, top_skills[], top_certs[], median_experience_years, updated_at

### 6.2 Data Storage

| Data Type | Storage System | Justification |
|---|---|---|
| Relational entity data | PostgreSQL | ACID compliance, complex query support |
| Session and cache data | Redis | Sub-millisecond access, TTL support |
| Job listing and skills search | Elasticsearch | Full-text search, faceted filtering |
| Uploaded files (CVs, certs) | AWS S3 / equivalent | Durable object storage, signed URL access |
| Application logs | Log aggregation service | Structured querying, retention management |
| AI model outputs (cached) | Redis + PostgreSQL | Speed for repeated queries, persistence for audit |

### 6.3 Data Retention and Deletion

| Data Category | Retention Period | Deletion Trigger |
|---|---|---|
| Active user personal data | Duration of account + 30 days | Account deletion request |
| Application and match history | 3 years from creation | Account deletion or user request |
| Audit logs (security events) | 12 months minimum | N/A — cannot be deleted by user |
| Job listing data | 90 days post-expiry | Automated scheduled job |
| Cohort aggregate data | Indefinite (anonymised) | N/A |
| Email delivery logs | 90 days | Automated purge |

---

## 7. System Architecture Overview

### 7.1 High-Level Architecture

SkillSync employs a microservices architecture with the following primary service boundaries:

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                             │
│              Web App (React)   |   Mobile App (React Native)    │
└─────────────────────────┬───────────────────────────────────────┘
                          │ HTTPS / WSS
┌─────────────────────────▼───────────────────────────────────────┐
│                      API GATEWAY                                │
│              (Rate Limiting, Auth, Routing)                     │
└──┬──────────┬──────────┬──────────┬──────────┬─────────────────┘
   │          │          │          │          │
┌──▼──┐  ┌───▼───┐  ┌───▼───┐  ┌──▼──┐  ┌───▼────────┐
│User │  │Match  │  │Learn  │  │Notif│  │Analytics   │
│Svc  │  │Engine │  │Svc    │  │Svc  │  │Svc         │
└──┬──┘  └───┬───┘  └───┬───┘  └──┬──┘  └───┬────────┘
   │          │          │          │          │
┌──▼──────────▼──────────▼──────────▼──────────▼────────┐
│                   MESSAGE QUEUE (SQS / RabbitMQ)       │
└────────────────────────────────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────────────┐
│                     DATA LAYER                                  │
│   PostgreSQL  |  Redis  |  Elasticsearch  |  S3 Object Storage  │
└─────────────────────────────────────────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────────────┐
│                  EXTERNAL INTEGRATIONS                          │
│   LinkedIn API | Indeed API | OpenAI API | Stripe | SendGrid    │
└─────────────────────────────────────────────────────────────────┘
```

### 7.2 Technology Stack

| Layer | Technology | Rationale |
|---|---|---|
| **Frontend (Web)** | React 18, TypeScript, TailwindCSS | Component model, type safety, rapid UI development |
| **Frontend (Mobile)** | React Native, TypeScript | Code sharing with web layer, native performance |
| **Backend API** | Node.js (NestJS framework), TypeScript | Consistent language across stack, strong DI framework |
| **AI / ML Services** | Python (FastAPI), LangChain, OpenAI API | Python ecosystem for ML, FastAPI for performance |
| **Primary Database** | PostgreSQL 15 | Relational integrity, JSONB for flexible schema elements |
| **Cache** | Redis 7 | Session management, API response caching, job queues |
| **Search** | Elasticsearch 8 | Full-text search for jobs, skills taxonomy |
| **File Storage** | AWS S3 | Scalable, durable object storage |
| **Message Queue** | AWS SQS | Managed, scalable async task processing |
| **Email** | SendGrid | Deliverability, template management, analytics |
| **Payments** | Stripe | PCI compliance, subscription management |
| **Containerisation** | Docker, Kubernetes (EKS) | Scalability, deployment consistency |
| **CI/CD** | GitHub Actions | Automated testing and deployment pipelines |
| **Monitoring** | Datadog | APM, infrastructure metrics, alerting |

### 7.3 Third-Party Integrations

| Provider | Data Exchanged | Failure Handling |
|---|---|---|
| LinkedIn API | Profile data, job listings | Graceful degradation to manual CV upload |
| Indeed API | Job listings | Fall back to other sources; alert admin |
| OpenAI / LLM Provider | NLP tasks, gap analysis, roadmap generation | Queue retry with exponential backoff; display cached results |
| SendGrid | Outbound emails | Retry queue; fall back to Amazon SES |
| Stripe | Subscription events, payment status | Webhook retry; manual reconciliation process |

---

## 8. Use Cases

### UC-001: New User Onboarding

**Actor:** Job Seeker (new user)
**Precondition:** User has not previously registered on SkillSync.
**Trigger:** User visits the SkillSync registration page.

**Main Flow:**
1. User selects registration method (email/password or social login via Google or LinkedIn).
2. If email/password: user enters name, email, and password. System sends verification email. User clicks verification link.
3. System displays onboarding wizard. User selects primary goal (find a job, change career, re-enter workforce).
4. User uploads CV or connects LinkedIn account. System parses and populates profile fields.
5. User reviews, corrects, and confirms extracted profile data.
6. User selects one or more target roles from a searchable list.
7. System generates initial Match Results and Skills Gap Report.
8. System displays the user's dashboard with first matched jobs and initial roadmap.

**Alternative Flow A (LinkedIn Login):** At step 1, user selects LinkedIn. OAuth consent is granted. Profile is automatically imported. Steps 4–5 are abbreviated to a profile review screen.

**Post-condition:** User account is active. Profile is at minimum 40% complete. First match results are available.

---

### UC-002: User Reviews Job Matches and Applies

**Actor:** Job Seeker
**Precondition:** User is authenticated. Profile is at minimum 40% complete.
**Trigger:** User navigates to the Jobs section.

**Main Flow:**
1. System displays ranked list of matched job listings with Match Scores.
2. User filters by Match Score minimum, location, work type.
3. User selects a listing to view the full detail and match breakdown.
4. User reviews the "Why am I a match?" explainability panel.
5. User clicks "View Job" — is taken to the original listing in a new tab.
6. User returns to SkillSync and logs the application by clicking "I Applied."
7. System records the application with current date and Match Score and prompts the user to add notes.

**Alternative Flow A (Stretch Role):** User enables the "Show Stretch Roles" toggle. Lower-match listings appear with a "Stretch" label and a prompt to view the roadmap for that role.

**Post-condition:** Application is recorded in the user's application tracker. Analytics metrics are updated.

---

### UC-003: User Completes a Roadmap Course and Profile Updates

**Actor:** Job Seeker
**Precondition:** User has an active roadmap with at least one course in progress.
**Trigger:** User navigates to Learning and opens an enrolled course.

**Main Flow:**
1. User opens the course and resumes from last saved position.
2. User completes all modules and passes the final assessment.
3. System marks the course as complete, records completion date, and issues a digital certificate.
4. System adds the associated skill to the user's profile (if not already present) or upgrades the proficiency level of the existing skill.
5. System recomputes the user's Match Scores and Skills Gap Report.
6. System displays a completion notification and updated dashboard metrics.
7. Roadmap item is marked complete. Next recommended roadmap item is highlighted.

**Post-condition:** User's profile is updated. Match Scores and Gap Report reflect the new skill. Notification is sent.

---

### UC-004: Administrator Reviews Platform Health

**Actor:** Administrator
**Precondition:** Administrator is authenticated with MFA verified.
**Trigger:** Administrator navigates to the System Health Dashboard.

**Main Flow:**
1. Dashboard displays real-time metrics: API latency, active sessions, email delivery rate, job ingestion status.
2. Administrator identifies an elevated P95 API latency on the matching engine.
3. Administrator drills down to matching engine service logs.
4. Administrator identifies a slow database query and escalates to the engineering team via the integrated ticket creation button.
5. System creates a support ticket pre-populated with relevant log context.

**Post-condition:** Issue is logged and escalated. System health metrics continue to refresh.

---

## 9. Constraints and Limitations

**Data Availability Constraint:** The accuracy of cohort benchmarking and match scoring is directly dependent on the volume and quality of hiring outcome data ingested. In the early stages of the platform, cohort profiles may have insufficient data points (minimum 30 required) for certain niche roles or geographic markets. In such cases, the benchmarking feature shall display a notification indicating that the cohort sample is insufficient and rely on job listing requirement data as a proxy.

**AI Model Accuracy Limitation:** Machine learning models used for skills extraction and match scoring are probabilistic and will not achieve 100% accuracy. The platform shall communicate confidence levels where appropriate and provide users with mechanisms to correct AI-generated outputs.

**Third-Party API Dependency:** Several core features (LinkedIn profile import, external job listing ingestion) depend on third-party APIs that may change terms, reduce data access, or become temporarily unavailable without notice. The platform architecture must support graceful degradation in all such scenarios.

**Internet Connectivity Requirement:** The majority of platform functionality requires an active internet connection. The mobile application supports limited offline functionality (course progress caching) but cannot perform job matching, gap analysis, or profile updates offline.

**Regulatory Variability:** Data protection and employment law requirements vary significantly across the platform's target markets. Legal review for each new geographic market is required before the platform is made available to users in that jurisdiction.

**Language Constraint:** Version 1.0 of the platform is English-only. Non-English CVs will be parsed with reduced accuracy. Multi-language support is a v1.1 priority.

---

## 10. Appendix

### 10.1 Revision History

| Version | Date | Author | Description |
|---|---|---|---|
| 0.1 | January 2026 | Product Team | Initial draft — core features outlined |
| 0.5 | February 2026 | Product Team | Non-functional requirements added; data model expanded |
| 1.0 | February 2026 | Product Team | First complete draft submitted for stakeholder review |

### 10.2 Open Issues

| ID | Issue | Owner | Target Resolution |
|---|---|---|---|
| OI-001 | Final decision on primary LLM provider pending cost and data privacy evaluation | CTO | March 2026 |
| OI-002 | LinkedIn API data access tier to be confirmed — affects profile import scope | Tech Lead | March 2026 |
| OI-003 | POPIA compliance review for ZA data residency requirements | Legal | April 2026 |
| OI-004 | Mobile app offline course content strategy — full download vs. progressive streaming | Product Lead | March 2026 |
| OI-005 | Minimum viable cohort size for benchmarking — 30 data points may be too low for niche roles | Data Science | April 2026 |

### 10.3 Glossary of Domain Terms

**Career Intelligence:** The discipline of using data — market trends, hiring patterns, competitor benchmarks — to make informed, evidence-based decisions about career development and job search strategy.

**Competency Profile:** A structured representation of a user's skills, qualifications, experience, and certifications, organised in a format that can be systematically compared against employer requirements.

**Hiring Outcome Data:** Verified records of candidates who were successfully hired for specific roles, including the skills, certifications, and qualifications they held at the time of hiring. Used as the basis for cohort benchmarking and match scoring.

**Match Score:** A computed value (0–100) representing the degree of alignment between a user's competency profile and the demonstrated requirements of a specific job role. A score of 100 indicates complete alignment; a score of 0 indicates no meaningful alignment.

**Skills Taxonomy:** A hierarchical classification system organising skills into domains, subdomains, and proficiency levels, used to standardise skills data across diverse sources (CVs, job listings, course content).

**Roadmap:** A personalised, sequenced learning plan generated for a specific target role, comprising recommended courses, projects, and certifications ordered to close the user's identified skills gaps as efficiently as possible.

### 10.4 Contact Information

| Role | Name | Contact |
|---|---|---|
| Product Owner | SkillSync Product Team | product@skillsync.app |
| Technical Lead | Engineering Team | engineering@skillsync.app |
| Document Owner | Product Team | product@skillsync.app |

---

*This document is subject to revision. The most current version is maintained in the SkillSync internal documentation repository. All stakeholders should confirm they are referencing the latest approved version before implementation decisions are made.*

---

**End of Document — SkillSync SRS v1.0**
