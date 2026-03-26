# Story 3.3: End-of-Session Review Summary

Status: in-progress

## Acceptance Criteria

1. [x] Add a "Finish Session" button to the AI Tutor View.
2. [x] Trigger a background AI analysis of the full session history (last 20 turns).
3. [x] Generate a summary including:
    - **Key Vocabulary**: Words used or learned during the session.
    - **Grammar Feedback**: Common mistakes or improvements.
    - **Fluency Score**: A high-level assessment of the turn-by-turn performance.
4. [x] Display this summary in a premium, immersive modal or screen before returning to the dashboard.
5. [x] Ensure the summary uses the SOUL-compliant AI proxy.

## Tasks / Subtasks

- [x] Modify `AITutorView.tsx` to include a "Finish Practice" action (AC: #1)
- [x] Create a new `SessionReview` component or modal (AC: #4)
- [x] Implement data extraction from the `messages` array for AI analysis (AC: #2)
- [x] Integrate with `/api/ai` using a new `review` feature type or reusing `progress` (AC: #3)
- [x] Verify the review content follows the HSK-focused SOUL structure (AC: #5)

## Dev Notes

- **AITutorView.tsx**: Needs to pass the current `messages` to the review component.
- **api/ai/route.ts**: May need a specific system prompt for session-level analysis if `progress` isn't specific enough.
- **UI Design**: Use the existing "Bento box" or "Glassmorphism" theme for the review summary.

### References

- [Source: PRD/epics.md#Story 3.3]
- [Source: src/components/AITutorView.tsx]
- [Source: app/api/ai/route.ts]

## Dev Agent Record

### Agent Model Used
Amelia (Dev Agent)

### Debug Log References

### Completion Notes List

### File List
