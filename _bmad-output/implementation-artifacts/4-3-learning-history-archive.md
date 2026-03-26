# Story 4.3: Learning History Archive

Status: done

## Acceptance Criteria

1. [x] When a session is completed, save the summary to Firestore (`session_reviews` sub-collection).
2. [x] Display a "History" card in the Scholar Dashboard.
3. [x] Create a `SessionHistoryView` to list past summaries by date.
4. [x] Allow viewing specific session details (Vocabulary, Grammar, Fluency) from the history.
5. [x] Ensure correct user-level scoping and persistent retrieval.

## Tasks / Subtasks

- [x] Update `AITutorView.tsx` with Firestore persistence logic (AC: #1)
- [x] Create `SessionHistoryView.tsx` component (AC: #3, #4)
- [x] Add `ViewState` and navigation to `app/page.tsx` (AC: #2)
- [x] Verify data extraction and reverse-chronological ordering (AC: #5)

## Dev Notes

- **Collection Path**: `users/${userId}/session_reviews`.
- **UI Design**: Uses a "card-and-modal" pattern similar to the original SessionReview to maintain brand consistency.
- **Persistence**: Real-time Firestore fetching ensures history is immediately available after a session ends.
