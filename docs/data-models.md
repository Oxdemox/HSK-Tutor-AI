# Data Models

The application currently uses Firebase Firestore as its database.

## Collections

### `users`
Stores standard user profile information.
- `uid` (string): Firebase Auth UID
- `email` (string): User's email
- `name` (string): User's display name
- `role` (string): 'admin' | 'user'
- `createdAt` (timestamp): Account creation time

### `users/{uid}/history/{hskLevel}`
Stores the transcript of the AI tutor conversations.
- `messages` (array of objects): 
  - `id` (string)
  - `role` ('user' | 'model')
  - `text` (string)
  - `structured` (object): Optional english/chinese/pinyin breakdown.
- `lastUpdated` (timestamp)

### `users/{uid}/progress/{hskLevel}`
Stores user progress percentages.
- `hskLevel` (string): The HSK level
- `percentage` (number): 0-100 progress value
- `lastUpdated` (timestamp)

## Notes
The PRD indicates a potential move away from Firebase to a MongoDB/PostgreSQL database via Prisma. This data structure will need to be formally mapped using Prisma schemas in the future architecture.
