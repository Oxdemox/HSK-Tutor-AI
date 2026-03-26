# Story 4.2: Practice Time & Aggregate Stats Widget

Status: done

## Acceptance Criteria

1. [x] Instrument AI Tutor sessions to track duration in seconds.
2. [x] Update AI proxy to provide structured fluency scores in session reviews.
3. [x] Parse fluency scores and persist them along with duration to a central `user_stats` document in Firestore.
4. [x] Create a premium `StatsWidget` displaying:
    - Total Practice Time (HH:MM or MM).
    - Average Fluency Score (Radial progress).
    - Session Count.
5. [x] Integrate the widget into the Scholar Dashboard Bento Grid.

## Tasks / Subtasks

- [x] Update `app/api/ai/route.ts` with structured score instructions (AC: #2)
- [x] Instrument `AITutorView.tsx` with session timing and score extraction (AC: #1, #3)
- [x] Create `StatsWidget.tsx` with radial progress and occupancy logic (AC: #4)
- [x] Update `app/page.tsx` grid layout for stats integration (AC: #5)

## Dev Notes

- **Persistence**: Using Firestore `increment` for thread-safe aggregate updates.
- **Score Extraction**: regex `[[SCORE: (\d+)]]` used on AI content.
- **UI**: Added a radial SVG progress bar for fluency to match the premium aesthetic.
