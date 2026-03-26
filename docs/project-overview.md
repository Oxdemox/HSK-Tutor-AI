# Project Overview

## HSK Tutor

**Type:** Monolith
**Primary Language:** TypeScript
**Architecture:** Single Page Application (React)

## Executive Summary
HSK Tutor is an AI-powered Chinese learning platform currently built with React, Vite, TailwindCSS, and Firebase. It uses Google's Generative AI for its intelligent tutoring features. According to the updated PRD (`PRD/HSK_Tutor_Audit_Updated_PRD_SOP_v2.md`), the project is scheduled for a major architectural overhaul to migrate authentication to Clerk, AI capabilities to OpenRouter, and hosting to Vercel, alongside a comprehensive UI/UX revamp.

## Tech Stack Summary
| Category | Technology | Version | Justification |
|---|---|---|---|
| Frontend Framework | React | ^19.0.0 | Core UI library |
| Build Tool | Vite | ^6.2.0 | Fast bundling and development |
| Styling | Tailwind CSS | ^4.1.14 | Utility-first styling |
| Animation | Motion (Framer) | ^12.23.24 | UI animations |
| Backend/BaaS | Firebase | ^12.10.0 | Auth, Firestore, Hosting (Current) |
| AI Integration | @google/genai | ^1.29.0 | AI Tutor capabilities (Current) |

## Repository Structure
This is a standard monolith structure where the frontend application directly communicates with a Database-as-a-Service (Firebase).
