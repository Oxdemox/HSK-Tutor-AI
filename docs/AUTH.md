# HSK Tutor AI - Authentication Documentation

## Overview
HSK Tutor AI uses **Better Auth** for its authentication and user management system. This provides a native-feeling, secure, and fully open-source-friendly auth experience.

## Authentication Methods

### 1. Email & Password
- Users can sign up and sign in using their email address.
- Support for password reset and email verification (to be finalized).

### 2. Social Providers (OAuth)
The following providers are configured and ready for setup:
- **Google**: Configured via `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.
- **Apple**: Configured via `APPLE_CLIENT_ID` and `APPLE_CLIENT_SECRET`.
- **Microsoft**: Configured via `MICROSOFT_CLIENT_ID` and `MICROSOFT_CLIENT_SECRET`.
- **LinkedIn**: Configured via `LINKEDIN_CLIENT_ID` and `LINKEDIN_CLIENT_SECRET`.
- **WeChat**: Scaffolded with a preview fallback.

## Setup & Configuration

### Environment Variables
Copy `.env.example` to `.env.local` and fill in the following:

```env
# Better Auth
BETTER_AUTH_SECRET=your_generated_secret_here
BETTER_AUTH_URL=http://localhost:3000

# Database (Postgres)
DATABASE_URL=postgres://user:pass@host:port/dbname

# Social Providers
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
APPLE_CLIENT_ID=
APPLE_CLIENT_SECRET=
MICROSOFT_CLIENT_ID=
MICROSOFT_CLIENT_SECRET=
LINKEDIN_CLIENT_ID=
LINKEDIN_CLIENT_SECRET=
```

### Local Development
1. **Initialize Database**:
   ```bash
   npx drizzle-kit push
   ```
2. **Run Dev Server**:
   ```bash
   npm run dev
   ```

## User Roles & Authorization
- **Role: `user`**: standard access to learning dashboard and profile.
- **Role: `admin`**: access to the internal user management interface.

### Authorization Helpers
- **Client-side**: Use `authClient.useSession()` for UI state.
- **Server-side**: Use `auth.api.getSession(ctx)` or standard Next.js middleware guards.

## Migration from Clerk
- All Clerk SDKs and components have been removed.
- Use `authClient` for all client-side auth operations.
- Backend logic uses the standard Drizzle ORM through `src/db/index.ts`.

## Deployment
For Vercel deployment:
1. Add all environment variables to the Vercel project dashboard.
2. Ensure the `DATABASE_URL` is accessible from the Vercel environment.
3. Configure the `BETTER_AUTH_URL` to your production domain.
