# Architecture

## Executive Summary
The HSK Tutor is a React-based Single Page Application (SPA). Currently, it tightly couples UI components with Firebase for authentication and database operations, and uses `@google/genai` directly on the client side for AI interactions. 

## Technology Stack
- **Frontend:** React, TypeScript, Vite, TailwindCSS
- **Backend as a Service:** Firebase (Auth, Firestore)
- **AI Integrations:** Google Generative AI (Gemini)

## Architecture Pattern
**Client-Heavy SPA with Serverless Backend**
The application implements its routing, state management, and API calls within the monolithic React application. It uses a BaaS (Firebase) to avoid needing a custom backend service.

## Data Architecture
Data is stored in Google Cloud Firestore. The primary collections are:
- `users`: Stores user profiles, roles, and settings.
- Under `users/{uid}/history/{hskLevel}`: Stores AI conversation history.
- Under `users/{uid}/progress/{hskLevel}`: Stores user progress percentages.

## Pending Architecture Changes (from PRD)
The PRD mandates a shift to:
1. **Clerk** instead of Firebase Auth.
2. **OpenRouter** instead of Google Generative AI direct client calls.
3. **Vercel** for hosting/CI/CD, likely requiring Next.js or a Vercel Serverless function layer to protect the OpenRouter API keys.
