---
stepsCompleted: ['step-01-validate-prerequisites', 'step-02-design-epics', 'step-03-create-stories', 'step-04-final-validation']
inputDocuments: ['PRD/HSK_Tutor_Audit_Updated_PRD_SOP_v2.md', 'docs/architecture.md']
---

# HSK Tutor - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for HSK Tutor, decomposing the requirements from the PRD, UX Design if it exists, and Architecture requirements into implementable stories.

## Requirements Inventory

### Functional Requirements

- FR-001: The system shall provide secure user authentication (sign-up, log-in, session management, password reset) via a robust identity management solution.
- FR-002: The system shall allow users to select, save, and dynamically update their target HSK level and audio preferences (e.g., TTS voice gender, speaking rate).
- FR-003: The system shall securely capture user audio input via the device microphone after obtaining explicit browser-level user permission.
- FR-004: The system shall accurately transcribe the user's spoken Chinese audio stream into complete text strings.
- FR-005: The system shall process the transcribed text through an AI service configured with dynamic, HSK-specific prompts and session history context to generate an accurate, level-appropriate response.
- FR-006: The system shall reliably convert the AI-generated text response into natural-sounding spoken audio and automatically play it for the user.
- FR-007: The system shall maintain the conversational context and history of the active learning session until it is explicitly terminated or reset by the user.
- FR-008: The system's conversational response shall proactively include corrections or suggestions based on HSK grammar and vocabulary standards when the user makes errors.
- FR-009: The system shall aggregate, store, and display user progress data, rendering metrics such as total session count, aggregate practice time, and session history logs.
- FR-010: The system shall render a responsive, accessible user interface optimized for scaling between desktop, tablet, and mobile device viewports.

### NonFunctional Requirements

- NFR-001: The end-to-end latency—from the moment the user finishes speaking to the start of the AI's audio response playback—shall not consistently exceed 1,500 milliseconds under standard broadband network conditions.
- NFR-002: The application shall maintain an uptime of 99.9% excluding scheduled, announced maintenance windows.
- NFR-003: All user data, including transcripts, audio streams, and profile information, must be encrypted in transit (TLS 1.2+) and at rest.
- NFR-004: The system architecture shall cleanly support at least 1,000 concurrent active voice sessions without causing significant degradation in AI response times or application responsiveness.
- NFR-005: The application shall fully function on the latest two major versions of Chrome, Safari, Edge, and Firefox.

### Additional Requirements

- The architecture must transition away from legacy monolithic single-page application patterns to a highly modular, secure framework capable of server-side capability and API secret proxying (e.g., Next.js).
- Migrate authentication from Firebase Auth to Clerk.
- Migrate AI processing from direct client Google Generative AI calls to OpenRouter.
- Securely proxy all interactions with third-party APIs (OpenRouter, etc.) through backend routes.

### UX Design Requirements

- UX-DR1: Implement a "Bento box" style grid layout for the Dashboard.
- UX-DR2: Implement a Conversation View with an active visualizer for audio input/output and controls for mute/disconnect.
- UX-DR3: Implement a premium dark mode by default with glassmorphism layers and fluid micro-animations.
- UX-DR4: Implement visual feedback states indicating conversational AI states (listening, transcribing, AI thinking, AI speaking).

### FR Coverage Map

FR-001: Epic 1 - Authentication & Identity Management
FR-002: Epic 1 - Profile Selection and Preferences
FR-003: Epic 2 - Audio Input Capture
FR-004: Epic 2 - Speech-to-Text
FR-005: Epic 2 - Contextual AI Processing
FR-006: Epic 2 - Text-to-Speech Output
FR-007: Epic 2 - Session History/Context Management
FR-008: Epic 3 - Proactive Grammar & Vocabulary Feedback
FR-009: Epic 4 - Performance Analytics and Session Logs
FR-010: Epic 4 - Responsive Multi-device Interface

## Epic List

### Epic 1: User Onboarding & Identity
Learners can securely register, log in, and customize their learning profile (HSK level, voice preferences) to ensure they receive targeted content.
**FRs covered:** FR-001, FR-002

### Epic 2: Core Conversational Practice
Learners can engage in real-time, fluid spoken conversations with the AI tutor using their microphone, and hear natural spoken audio in response.
**FRs covered:** FR-003, FR-004, FR-005, FR-006, FR-007

### Epic 3: Learning Feedback & Correction
Learners receive proactive, real-time corrections on their grammar and vocabulary during conversations, transforming chat into a structured pedagogical tool.
**FRs covered:** FR-008

### Epic 4: Progress Tracking & Dashboard
Learners can view their learning history, track aggregate progress/practice time, and seamlessly navigate the application on any device.
**FRs covered:** FR-009, FR-010

## Epic 1: User Onboarding & Identity

Learners can securely register, log in, and customize their learning profile (HSK level, voice preferences) to ensure they receive targeted content.

### Story 1.1: Integrate Robust Authentication

As a learner,
I want to register, log in, and reset my password using a robust identity provider,
So that my learning progress and personal data are safe.

**Acceptance Criteria:**

**Given** an unauthenticated user on the Landing Page
**When** they click "Sign Up" or "Log In" and complete the flow via Clerk
**Then** they are securely authenticated and redirected to the dashboard.
**And** their session is created.

### Story 1.2: Set Initial Learning Profile

As a new learner,
I want to select my target HSK level during onboarding,
So that the AI tutor can immediately begin presenting curriculum-appropriate topics.

**Acceptance Criteria:**

**Given** a newly registered, authenticated user accessing the app
**When** the app detects an incomplete profile
**Then** they are presented with a screen to select their target HSK level (1-6).
**And** their preference is securely stored in the database.

### Story 1.3: Manage Audio Preferences

As a learner,
I want to adjust the system's text-to-speech voice gender and speaking rate,
So that I can practice listening comprehension at a pace that suits my skill level.

**Acceptance Criteria:**

**Given** the user is on the Settings profile page
**When** they change the TTS voice gender or speaking rate and save
**Then** the preference updates in the database.
**And** all future AI conversational interactions use the updated audio profile.

## Epic 2: Core Conversational Practice

Learners can engage in real-time, fluid spoken conversations with the AI tutor using their microphone, and hear natural spoken audio in response.

### Story 2.1: Establish Audio Streaming Pipeline (Backend Spike)

As a system architect,
I want to implement a secure, low-latency backend proxy that handles Speech-To-Text, OpenRouter AI streaming, and Text-To-Speech conversion seamlessly,
So that the client app experiences a fluid conversation mimicking human interaction perfectly (under 1.5s latency).

**Acceptance Criteria:**

**Given** an incoming audio stream or blob from the client
**When** it hits the backend API boundary
**Then** it is transcribed, processed through the OpenRouter LLM, and explicitly synthesized to audio in one fluid transaction without exposing third-party API keys.

### Story 2.2: Capture Audio & Playback (Frontend Control)

As a learner seeking conversation practice,
I want to use my device microphone to interact directly with the app,
So that I can practice speaking natively without typing.

**Acceptance Criteria:**

**Given** a learner in the Conversation View
**When** they grant permissions and begin speaking
**Then** their audio is securely captured and streamed over to the backend.
**And** the returned audio response from the AI plays back robustly and automatically.

### Story 2.3: Immersive Visual Feedback System (UX)

As a learner in an active voice session,
I want the UI to explicitly indicate when the AI is listening, processing, or speaking,
So that the interaction feels highly intuitive, responsive, and completely friction-free.

**Acceptance Criteria:**

**Given** the user is talking
**When** the app captures the audio
**Then** an elegant visualizer indicates "Listening".
**And** when processing the request, fluid micro-animations signify "Thinking".
**And** while AI audio plays back, the UI reacts synchronously to indicate "Speaking".

### Story 2.4: Session Context & Continuity

As a conversational learner,
I want the AI to remember my previous phrases within our session,
So that our dialogue feels continuous and intelligent.

**Acceptance Criteria:**

**Given** an active learning session
**When** the user sends the 3rd or 4th voice prompt
**Then** the previous interaction context is successfully passed in the backend payload.
**And** the AI responds cohesively to the overall storyline.

## Epic 3: Learning Feedback & Correction

Learners receive immediate, actionable feedback on their speech (grammar, pronunciation, vocabulary) to facilitate continuous improvement.

### Story 3.1: Inline Conversation Corrections

As a learner focused on improving accuracy,
I want the AI tutor to gently provide inline corrections when I make grammatical or vocabulary errors,
So that I learn from my mistakes without breaking the core conversational flow.

**Acceptance Criteria:**

**Given** an active conversation
**When** the user makes a recognizable language error
**Then** the AI's response naturally incorporates a spoken recast or correction of the phrase before continuing the conversation.
**And** the text transcript visually highlights the corrected portion without halting the session.

### Story 3.2: Detailed Post-Turn Analysis

As a dedicated language scholar,
I want to be able to review specific feedback on my pronunciation and word choice for individual turns,
So that I can study my weak points deeply at my own pace.

**Acceptance Criteria:**

**Given** the user is reviewing the conversational transcript
**When** they click or hover on any of their previously spoken messages
**Then** a detailed, premium-styled side-panel or modal opens.
**And** it displays specific grammar, vocabulary, or pronunciation feedback for that exact phrase.

### Story 3.3: End-of-Session Review Summary

As a learner concluding practice,
I want a summarized report of my performance during the session,
So that I know which areas to focus on next.

**Acceptance Criteria:**

**Given** the user ends a conversational session
**When** the session closes
**Then** the system triggers a background process to generate a summary of key vocabulary learned, grammar mistakes made, and overall fluency.
**And** this summary is presented in an immersive, easy-to-read review screen returning to the dashboard.

## Epic 4: Progress Tracking & Dashboard

Learners can view their learning history, track aggregate progress/practice time, and seamlessly navigate the application on any device.

### Story 4.1: Scholar Dashboard & Navigation Hub

As a learner seeking structure,
I want a centralized, aesthetically pleasing dashboard that serves as my core learning hub,
So that I can quickly start a practice session, view recent activity, and access settings effortlessly.

**Acceptance Criteria:**

**Given** an authenticated user
**When** they land on the root dashboard
**Then** they are presented with an elegant, responsive interface (utilizing premium UI elements like glassmorphism) that clearly links to Conversation Practice, History, and Settings.
**And** the layout adapts perfectly to mobile, tablet, and desktop viewports.

### Story 4.2: Practice Time & Aggregate Stats Widget

As a motivated student,
I want to see my total practice time and a high-level score of my fluency at a glance,
So that I feel a sense of accomplishment and motivation every time I log in.

**Acceptance Criteria:**

**Given** the user is on the dashboard
**When** the page loads
**Then** a statistics widget queries the database for aggregate session data (total time spoken, average fluency score).
**And** it displays these metrics using interactive, high-end data visualizations.

### Story 4.3: Learning History Archive

As a language scholar,
I want to browse an archive of my past conversational sessions,
So that I can revisit old transcripts, feedback summaries, and see how I've improved over time.

**Acceptance Criteria:**

**Given** the user navigates to the "History" tab
**When** the page data initiates
**Then** the system retrieves a paginated list of previous conversational sessions sorted by date.
**And** clicking on any historical session successfully pulls up the full transcript and feedback summary.
